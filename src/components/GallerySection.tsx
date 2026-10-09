"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { gallery } from "@/data/site";

const cats = ["All", "Campus", "Classrooms", "Activities", "Events", "Celebrations"] as const;
export default function GallerySection() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const list = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  const closeRef = useRef<HTMLButtonElement>(null);
  const prev = useCallback(() => setIdx((i) => (i === null ? i : (i + list.length - 1) % list.length)), [list.length]);
  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % list.length)), [list.length]);
  useEffect(() => {
    if (idx === null) return;
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setIdx(null); if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [idx, prev, next]);
  const cur = idx !== null ? list[idx] : null;
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="eyebrow">Gallery</p><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">Moments worth remembering.</h2></div>
          <div role="tablist" aria-label="Gallery categories" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:px-0">
            {cats.map((c) => (<button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${cat === c ? "text-navy" : "bg-white text-body hover:text-navy"}`}>
              {cat === c && <motion.span layoutId="gal-pill" className="absolute inset-0 rounded-full bg-gold" />}<span className="relative">{c}</span></button>))}
          </div>
        </Reveal>
        <motion.div layout className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((g, i) => (
              <motion.button layout key={g.src} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.4 }}
                onClick={() => setIdx(i)} aria-label={`Open ${g.caption}`}
                className={`group relative overflow-hidden rounded-2xl text-left ${g.tall ? "row-span-2" : ""} ${g.wide ? "col-span-2" : ""}`}>
                <Photo src={g.src} alt={g.alt} tone={i} className="h-full w-full" />
                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy/80 via-transparent to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:opacity-100">
                  <span className="text-sm font-semibold">{g.caption}</span><ZoomIn className="h-4 w-4" /></div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-6 text-xs text-body/60">Placeholders shown. Add authorized school photographs in <code>public/images</code> and edit <code>src/data/site.ts</code>.</p>
      </div>
      <AnimatePresence>
        {cur && (
          <motion.div role="dialog" aria-modal="true" aria-label={cur.caption} className="fixed inset-0 z-[60] grid place-items-center bg-navy/95 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIdx(null)}>
            <button ref={closeRef} onClick={() => setIdx(null)} aria-label="Close" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white sm:left-6"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white sm:right-6"><ChevronRight /></button>
            <motion.figure key={cur.src} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, i) => { if (i.offset.x < -70) next(); else if (i.offset.x > 70) prev(); }}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
              <Photo src={cur.src} alt={cur.alt} tone={idx ?? 0} className="aspect-[4/3] w-full rounded-2xl sm:aspect-[16/10]" />
              <figcaption className="mt-4 text-center text-white">{cur.caption} <span className="text-white/50">· {(idx ?? 0) + 1}/{list.length}</span></figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
