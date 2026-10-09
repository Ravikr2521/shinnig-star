"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.querySelector(n.href); el && io.observe(el); });
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [open]);

  const light = !scrolled && !open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ivory/90 shadow-soft backdrop-blur-md" : "bg-transparent"}`}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#home" aria-label="Shining Star International School, home"><Logo dark={light} /></a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHover(null)}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onMouseEnter={() => setHover(n.href)} onFocus={() => setHover(n.href)} onBlur={() => setHover(null)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${light ? "text-white/90 hover:text-white" : "text-navy"}`}>
              {n.label}
              {(hover ?? active) === n.href && <motion.span layoutId="nav-ind" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold" transition={{ type: "spring", stiffness: 500, damping: 36 }} />}
            </a>
          ))}
          <a href="#contact" className="btn btn-gold ml-4 !min-h-11 !px-6">Enquire Now</a>
        </nav>
        <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className={`grid h-12 w-12 place-items-center rounded-full lg:hidden ${light ? "text-white" : "text-navy"}`}><Menu /></button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-navy p-6 text-white lg:hidden"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex items-center justify-between"><Logo dark /><button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-12 w-12 place-items-center rounded-full bg-white/10"><X /></button></div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col">
                {nav.map((n, i) => (
                  <motion.a key={n.href} href={n.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.05 }}
                    className="border-b border-white/10 py-4 font-display text-2xl">{n.label}</motion.a>
                ))}
              </nav>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold mt-auto">Enquire Now</a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
