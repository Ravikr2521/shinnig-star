"use client";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Clock, Loader2, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "unconfigured" | "error";
const grades = ["Nursery / Pre-primary", "Primary classes", "Middle classes", "Not sure yet"];
const inp = "mt-2 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3.5 text-navy outline-none transition focus:border-royal focus:ring-4 focus:ring-royal/15";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const v: Record<string, string> = {};
    if ((d.name ?? "").trim().length < 2) v.name = "Please enter the parent or guardian's name.";
    if (!/^[+()\-\s\d]{7,18}$/.test((d.phone ?? "").trim())) v.phone = "Enter a valid phone number (digits, +, spaces).";
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) v.email = "Enter a valid email address or leave it blank.";
    if (!d.grade) v.grade = "Please choose a class of interest.";
    setErr(v); if (Object.keys(v).length) return;
    setStatus("loading");
    try {
      const r = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else if (j.code === "NOT_CONFIGURED") setStatus("unconfigured");
      else { setMsg(j.error ?? "Something went wrong."); setStatus("error"); }
    } catch { setMsg("Network error. Please try again."); setStatus("error"); }
  }
  const Field = ({ id, label, opt, error, children }: { id: string; label: string; opt?: boolean; error?: string; children: React.ReactNode }) => (
    <div><label htmlFor={id} className="text-sm font-semibold text-navy">{label}{opt && <span className="font-normal text-body/60"> (optional)</span>}</label>{children}
      {error && <p id={`${id}-e`} role="alert" className="mt-1.5 text-sm text-red-600">{error}</p>}</div>
  );
  const row = (I: typeof Mail, l: string, v: string) => (
    <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><I className="h-5 w-5" /></span>
      <div><p className="text-xs uppercase tracking-widest text-white/50">{l}</p><p className={v ? "" : "italic text-white/50"}>{v || "To be confirmed with the school"}</p></div></li>
  );
  return (
    <section id="contact" className="bg-sky py-24 sm:py-32">
      <div className="container-x grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal className="rounded-[2rem] bg-navy p-8 text-white sm:p-10">
          <p className="eyebrow !text-gold">Contact</p><h2 className="font-display mt-3 text-4xl">{site.name}</h2>
          <ul className="mt-8 space-y-6">{row(MapPin, "Address", site.address)}{row(Phone, "Phone", site.phone)}{row(Mail, "Email", site.email)}{row(Clock, "School hours", site.hours)}</ul>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-10"><Navigation className="h-4 w-4" />Get Directions</a>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
            <h3 className="font-display text-3xl text-navy">Parent enquiry</h3><p className="mt-1 text-sm">Share a few details and the school team can get back to you.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Parent / guardian name" error={err.name}><input id="name" name="name" autoComplete="name" required aria-invalid={!!err.name} aria-describedby={err.name ? "name-e" : undefined} className={inp} /></Field>
              <Field id="phone" label="Phone number" error={err.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required aria-invalid={!!err.phone} aria-describedby={err.phone ? "phone-e" : undefined} className={inp} /></Field>
              <Field id="email" label="Email address" opt error={err.email}><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!err.email} aria-describedby={err.email ? "email-e" : undefined} className={inp} /></Field>
              <Field id="grade" label="Class of interest" error={err.grade}><select id="grade" name="grade" defaultValue="" required aria-invalid={!!err.grade} aria-describedby={err.grade ? "grade-e" : undefined} className={inp}><option value="" disabled>Select…</option>{grades.map((g) => <option key={g}>{g}</option>)}</select></Field>
              <div className="sm:col-span-2"><Field id="message" label="Message" opt><textarea id="message" name="message" rows={4} maxLength={1500} className={inp} /></Field></div>
            </div>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            <button disabled={status === "loading"} className="btn btn-navy mt-7 w-full disabled:opacity-70 sm:w-auto">{status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" />Sending…</> : "Send enquiry"}</button>
            <div aria-live="polite" className="mt-5">
              {status === "success" && <p className="flex items-center gap-2 rounded-2xl bg-green-50 p-4 text-green-800"><CheckCircle2 className="h-5 w-5 shrink-0" />Thank you. Your enquiry has been sent to the school.</p>}
              {status === "unconfigured" && <p className="flex items-start gap-2 rounded-2xl bg-amber-50 p-4 text-amber-900"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />Demo mode: your details were validated but not delivered, because the enquiry service isn&apos;t connected yet. Please contact the school directly.</p>}
              {status === "error" && <p className="flex items-center gap-2 rounded-2xl bg-red-50 p-4 text-red-800"><AlertCircle className="h-5 w-5 shrink-0" />{msg}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
