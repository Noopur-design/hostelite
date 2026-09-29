import { createContext, useContext, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Check, X } from "lucide-react";
import { mapSrc } from "@/data/catalog";
import { cn } from "@/lib/cn";

type LeadMode = "visit" | "callback" | "enquire" | "list" | "expert";

type ModalState =
  | { kind: "lead"; mode: LeadMode; project?: string }
  | { kind: "login" }
  | { kind: "video"; images: string[]; title: string }
  | { kind: "gallery"; images: string[]; title: string; index: number }
  | { kind: "map"; title: string; lat: number; lon: number }
  | null;

type User = { name: string; email: string };

type AppState = {
  saved: string[];
  toggleSaved: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  user: User | null;
  signOut: () => void;
  openLead: (mode: LeadMode, project?: string) => void;
  openLogin: () => void;
  openVideo: (images: string[], title: string) => void;
  openGallery: (images: string[], title: string, index?: number) => void;
  openMap: (title: string, lat: number, lon: number) => void;
  toast: (message: string) => void;
};

const Ctx = createContext<AppState | null>(null);

export function useApp() {
  const value = useContext(Ctx);
  if (!value) throw new Error("useApp must be used within AppStateProvider");
  return value;
}

const inputClass =
  "h-12 w-full rounded-control border border-line bg-card px-3 text-sm text-ink outline-none transition placeholder:text-faint focus:border-forest";

function validateContact(values: { name: string; phone: string; email: string }, emailRequired: boolean) {
  const errors: Record<string, string> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name";
  const phone = values.phone.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(phone)) errors.phone = "Enter a valid 10-digit mobile number";
  if (emailRequired && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }
  return errors;
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [modal, setModal] = useState<ModalState>(null);
  const [shown, setShown] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const rawSaved = localStorage.getItem("havennest-saved");
      const rawUser = localStorage.getItem("havennest-user");
      if (rawSaved) setSaved(JSON.parse(rawSaved) as string[]);
      if (rawUser) setUser(JSON.parse(rawUser) as User);
    } catch {
      /* ignore broken local demo storage */
    }
  }, []);

  useEffect(() => {
    if (!modal) return undefined;
    const frame = requestAnimationFrame(() => setShown(true));
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
    };
  }, [modal]);

  function close() {
    setShown(false);
    window.setTimeout(() => setModal(null), 160);
  }

  function toast(text: string) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2400);
  }

  const api = useMemo<AppState>(
    () => ({
      saved,
      toggleSaved: (slug) => {
        setSaved((current) => {
          const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
          localStorage.setItem("havennest-saved", JSON.stringify(next));
          return next;
        });
      },
      isSaved: (slug) => saved.includes(slug),
      user,
      signOut: () => {
        localStorage.removeItem("havennest-user");
        setUser(null);
        toast("Signed out");
      },
      openLead: (mode, project) => setModal({ kind: "lead", mode, project }),
      openLogin: () => setModal({ kind: "login" }),
      openVideo: (images, title) => setModal({ kind: "video", images, title }),
      openGallery: (images, title, index = 0) => setModal({ kind: "gallery", images, title, index }),
      openMap: (title, lat, lon) => setModal({ kind: "map", title, lat, lon }),
      toast,
    }),
    [saved, user],
  );

  return (
    <Ctx.Provider value={api}>
      {children}
      {modal ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center sm:p-4" role="presentation">
          <button
            aria-label="Close dialog"
            className={cn("absolute inset-0 bg-forest-deep/60 transition-opacity", shown ? "opacity-100" : "opacity-0")}
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            className={cn(
              "relative z-10 max-h-[min(92dvh,100%)] w-full overflow-auto overscroll-contain rounded-card bg-card shadow-2xl transition duration-200",
              modal.kind === "gallery" || modal.kind === "video" || modal.kind === "map" ? "max-w-4xl" : "max-w-md",
              shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="tap absolute top-3 right-3 z-10 grid size-10 place-items-center rounded-full bg-card/90 text-ink"
            >
              <X className="size-4" />
            </button>
            {modal.kind === "lead" ? (
              <LeadForm mode={modal.mode} project={modal.project} onClose={close} />
            ) : null}
            {modal.kind === "login" ? (
              <LoginForm
                onDone={(next) => {
                  setUser(next);
                  localStorage.setItem("havennest-user", JSON.stringify(next));
                  toast(`Welcome, ${next.name.split(" ")[0]}`);
                  close();
                }}
              />
            ) : null}
            {modal.kind === "video" ? <VideoTour images={modal.images} title={modal.title} /> : null}
            {modal.kind === "gallery" ? (
              <GalleryLightbox images={modal.images} title={modal.title} start={modal.index} />
            ) : null}
            {modal.kind === "map" ? (
              <div className="p-4">
                <h2 className="pr-10 font-serif text-2xl">{modal.title}</h2>
                <iframe title={modal.title} src={mapSrc(modal.lat, modal.lon)} className="mt-4 h-96 w-full rounded-control border border-line" />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {message ? (
        <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-pill bg-forest px-4 py-2 text-sm text-card shadow-lg">
          {message}
        </div>
      ) : null}
    </Ctx.Provider>
  );
}

const LEAD_COPY: Record<LeadMode, { title: string; body: string; cta: string; email: boolean }> = {
  visit: {
    title: "Schedule a visit",
    body: "Tell us when to expect you. An advisor will confirm the site visit.",
    cta: "Request site visit",
    email: true,
  },
  callback: {
    title: "Get a callback",
    body: "Share your number and we will call you about this home.",
    cta: "Request callback",
    email: false,
  },
  enquire: {
    title: "Enquire",
    body: "Send your details and we will share pricing, availability and offers.",
    cta: "Send enquiry",
    email: true,
  },
  list: {
    title: "List your property",
    body: "Tell us about the home. A HavenNest advisor will help you reach serious buyers.",
    cta: "Submit listing",
    email: true,
  },
  expert: {
    title: "Talk to an expert",
    body: "Share what you need. We will match a project to your budget and timeline.",
    cta: "Request a call",
    email: true,
  },
};

function LeadForm({ mode, project, onClose }: { mode: LeadMode; project?: string; onClose: () => void }) {
  const copy = LEAD_COPY[mode];
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Gurugram",
    propertyType: "Apartment",
    price: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function update(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const next = validateContact(values, copy.email);
    if (mode === "list" && !values.price.trim()) next.price = "Enter an expected price";
    setErrors(next);
    if (Object.keys(next).length) return;
    const existing = JSON.parse(localStorage.getItem("havennest-leads") || "[]") as unknown[];
    existing.push({ ...values, mode, project, at: Date.now() });
    localStorage.setItem("havennest-leads", JSON.stringify(existing));
    setDone(true);
  }

  if (done) {
    return (
      <div className="px-6 py-12 text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-forest text-card">
          <Check className="size-5" />
        </div>
        <h2 className="mt-4 font-serif text-3xl">Request received</h2>
        <p className="mt-2 text-sm text-muted">
          {project ? `We have noted your interest in ${project}. ` : ""}A HavenNest advisor will reach out shortly.
        </p>
        <button onClick={onClose} className="tap mt-6 h-11 rounded-pill bg-forest px-5 text-sm text-card">
          Done
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="px-4 py-5 sm:px-6 sm:py-6" noValidate>
      <p className="text-xs tracking-widest text-muted uppercase">HavenNest</p>
      <h2 className="mt-1 pr-8 font-serif text-3xl">{copy.title}</h2>
      <p className="mt-2 text-sm text-muted">{copy.body}</p>
      {project ? <p className="mt-3 text-sm font-medium">{project}</p> : null}
      <div className="mt-5 space-y-3">
        <Field label="Full name" error={errors.name}>
          <input className={inputClass} value={values.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input className={inputClass} inputMode="numeric" value={values.phone} onChange={(event) => update("phone", event.target.value)} placeholder="10-digit mobile" />
        </Field>
        {copy.email ? (
          <Field label="Email address" error={errors.email}>
            <input className={inputClass} type="email" value={values.email} onChange={(event) => update("email", event.target.value)} placeholder="name@email.com" />
          </Field>
        ) : null}
        {mode === "list" ? (
          <>
            <Field label="City">
              <select className={inputClass} value={values.city} onChange={(event) => update("city", event.target.value)}>
                {["Gurugram", "Bengaluru", "Mumbai", "Hyderabad", "Pune", "Delhi"].map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </Field>
            <Field label="Property type">
              <select className={inputClass} value={values.propertyType} onChange={(event) => update("propertyType", event.target.value)}>
                {["Apartment", "Villa", "Builder Floor", "Plot", "Commercial"].map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </Field>
            <Field label="Expected price" error={errors.price}>
              <input className={inputClass} value={values.price} onChange={(event) => update("price", event.target.value)} placeholder="₹ 2.5 Cr or ₹ 80,000 / month" />
            </Field>
          </>
        ) : null}
        {mode === "expert" ? (
          <Field label="What are you looking for?">
            <textarea
              className="min-h-24 w-full rounded-control border border-line bg-card px-3 py-3 text-sm outline-none focus:border-forest"
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder="3 BHK in Gurugram, ready by 2027, under ₹4 Cr"
            />
          </Field>
        ) : null}
      </div>
      <button type="submit" className="tap mt-5 h-12 w-full rounded-control bg-forest text-sm text-card">
        {copy.cta}
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-forest-soft">{error}</span> : null}
    </label>
  );
}

function LoginForm({ onDone }: { onDone: (user: User) => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (mode === "signup" && name.trim().length < 2) next.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email";
    if (password.length < 6) next.password = "Use at least 6 characters";
    const accounts = JSON.parse(localStorage.getItem("havennest-accounts") || "[]") as {
      name: string;
      email: string;
      password: string;
    }[];
    const existing = accounts.find((item) => item.email.toLowerCase() === email.trim().toLowerCase());
    if (!next.email && !next.password) {
      if (mode === "login") {
        if (existing && existing.password !== password) next.password = "That password does not match";
      } else if (existing) {
        next.email = "An account with this email already exists";
      }
    }
    setErrors(next);
    if (Object.keys(next).length) return;
    if (mode === "signup") {
      const account = { name: name.trim(), email: email.trim(), password };
      localStorage.setItem("havennest-accounts", JSON.stringify([...accounts, account]));
      onDone({ name: account.name, email: account.email });
      return;
    }
    const display = existing?.name || email.trim().split("@")[0];
    if (!existing) {
      localStorage.setItem(
        "havennest-accounts",
        JSON.stringify([...accounts, { name: display, email: email.trim(), password }]),
      );
    }
    onDone({ name: existing?.name || display, email: email.trim() });
  }

  return (
    <form onSubmit={submit} className="px-4 py-5 sm:px-6 sm:py-6" noValidate>
      <h2 className="pr-8 font-serif text-3xl">{mode === "login" ? "Login" : "Create an account"}</h2>
      <p className="mt-2 text-sm text-muted">A demo account saved on this device. No password leaves the browser.</p>
      <div className="mt-5 space-y-3">
        {mode === "signup" ? (
          <Field label="Full name" error={errors.name}>
            <input className={inputClass} value={name} onChange={(event) => setName(event.target.value)} />
          </Field>
        ) : null}
        <Field label="Email" error={errors.email}>
          <input className={inputClass} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Field>
        <Field label="Password" error={errors.password}>
          <input className={inputClass} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Field>
      </div>
      <button type="submit" className="tap mt-5 h-12 w-full rounded-control bg-forest text-sm text-card">
        {mode === "login" ? "Login" : "Sign up"}
      </button>
      <button
        type="button"
        className="mt-3 w-full text-sm text-muted"
        onClick={() => {
          setMode(mode === "login" ? "signup" : "login");
          setErrors({});
        }}
      >
        {mode === "login" ? "New here? Create an account" : "Already have an account? Login"}
      </button>
    </form>
  );
}

function VideoTour({ images, title }: { images: string[]; title: string }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setFrame((current) => (current + 1) % images.length), 1700);
    return () => window.clearInterval(timer);
  }, [images.length]);
  return (
    <div>
      <img src={images[frame]} alt="" className="h-80 w-full object-cover sm:h-[28rem]" />
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Walkthrough</p>
          <h2 className="font-serif text-2xl">{title}</h2>
        </div>
        <p className="text-sm text-muted">
          {frame + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

function GalleryLightbox({ images, title, start }: { images: string[]; title: string; start: number }) {
  const [index, setIndex] = useState(start);
  return (
    <div>
      <img src={images[index]} alt={`${title} photo ${index + 1}`} className="h-80 w-full object-cover sm:h-[28rem]" />
      <div className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between pr-8">
          <h2 className="font-serif text-2xl">{title}</h2>
          <p className="text-sm text-muted">
            {index + 1} / {images.length}
          </p>
        </div>
        <div className="flex gap-2 overflow-auto">
          {images.map((image, imageIndex) => (
            <button key={image + imageIndex} onClick={() => setIndex(imageIndex)} className={cn("h-16 w-20 shrink-0 overflow-hidden rounded-control border", imageIndex === index ? "border-forest" : "border-line")}>
              <img src={image} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
