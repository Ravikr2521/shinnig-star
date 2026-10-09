"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Info, Star } from "lucide-react";
import Photo from "./Photo";

const up = (d: number) => ({ initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const } });

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy pb-24 pt-32 sm:items-center sm:pb-20">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20"><Photo src="/images/hero.jpg" alt="Children learning together in a bright classroom" tone={0} eager className="h-full w-full" /></motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-royal/30 sm:bg-gradient-to-r sm:from-navy sm:via-navy/75 sm:to-transparent" />
      {[["8%", "22%", 28], ["52%", "14%", 18], ["88%", "40%", 34], ["70%", "78%", 22]].map(([l, t, s], i) => (
        <Star key={i} aria-hidden className="floaty absolute -z-10 text-gold/70" style={{ left: l as string, top: t as string, width: s as number, height: s as number, animationDelay: `${i * 1.3}s` }} fill="currentColor" strokeWidth={0} />
      ))}
      <motion.div style={{ opacity: fade }} className="container-x grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <motion.p {...up(0.1)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[.2em] text-gold backdrop-blur-sm"><Star className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />Shining Star International School</motion.p>
          <h1 className="font-display text-[clamp(2.9rem,9vw,6.6rem)] font-medium leading-[.98] tracking-tight text-white">
            <motion.span className="block" {...up(0.2)}>Where Every</motion.span>
            <motion.span className="block" {...up(0.32)}>Child <em className="relative not-italic text-gold">Shines.<svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full" fill="none"><motion.path d="M2 8 C 80 2, 200 2, 298 8" stroke="#F5B942" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} /></svg></em></motion.span>
          </h1>
          <motion.p {...up(0.5)} className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">Discover a nurturing learning environment where curiosity grows, confidence develops, and every child is encouraged to reach their full potential.</motion.p>
          <motion.div {...up(0.65)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="btn btn-gold">Explore Our School <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="btn btn-ghost">Enquire for Admission</a>
          </motion.div>
        </div>
        <motion.div {...up(0.8)} className="hidden lg:block">
          <div className="relative ml-auto max-w-sm">
            <div className="group rotate-3 overflow-hidden rounded-[2rem] border-4 border-white/90 shadow-lift"><Photo src="/images/hero-card.jpg" alt="Students enjoying an activity" tone={1} className="aspect-[4/5]" /></div>
            <div className="absolute -bottom-6 -left-10 w-64 rounded-2xl bg-ivory p-5 shadow-lift">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy"><Info className="h-4 w-4 text-royal" />Admission information</p>
              <p className="mt-1.5 text-sm leading-snug text-body">Speak with the school team to learn about current availability and the admissions process.</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-royal hover:gap-2 transition-all">Get in touch <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <a href="#highlights" aria-label="Scroll to content" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 sm:block"><motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="block"><ChevronDown /></motion.span></a>
    </section>
  );
}
