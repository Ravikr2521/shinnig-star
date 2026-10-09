import { Instagram } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
export default function Footer() {
  const col = "text-sm text-white/65 transition hover:text-gold";
  return (
    <footer className="bg-navy pt-20 text-white">
      <div className="container-x grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div><Logo dark /><p className="mt-5 max-w-xs text-white/65">Helping every child learn, grow and shine.</p>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mt-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-gold transition hover:bg-gold hover:text-navy"><Instagram className="h-5 w-5" /></a></div>
        <nav aria-label="Quick links"><h3 className="font-display text-lg text-gold">Quick links</h3><ul className="mt-4 space-y-3">{nav.map((n) => <li key={n.href}><a href={n.href} className={col}>{n.label}</a></li>)}</ul></nav>
        <nav aria-label="Academic links"><h3 className="font-display text-lg text-gold">Academics</h3><ul className="mt-4 space-y-3">{["Early Learning", "Primary Education", "Middle School", "Learning Enrichment"].map((t) => <li key={t}><a href="#academics" className={col}>{t}</a></li>)}</ul></nav>
        <div><h3 className="font-display text-lg text-gold">Contact</h3><ul className="mt-4 space-y-3 text-sm text-white/65">
          <li>{site.address || "Address to be confirmed"}</li><li>{site.phone || "Phone to be confirmed"}</li><li>{site.email || "Email to be confirmed"}</li>
          <li><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline-offset-4 hover:underline">View on Google Maps</a></li></ul></div>
      </div>
      <div className="container-x flex flex-col items-center justify-between gap-3 py-7 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="flex gap-5"><a href="#contact" className="hover:text-gold">Privacy Policy</a><a href="#contact" className="hover:text-gold">Terms &amp; Conditions</a></p>
      </div>
    </footer>
  );
}
