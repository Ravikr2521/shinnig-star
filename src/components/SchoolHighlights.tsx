"use client";
import { motion } from "framer-motion";
import { Compass, HeartHandshake, ShieldCheck, Palette } from "lucide-react";
import Reveal, { Stagger, item } from "./Reveal";

const cards = [
  { icon: Compass, t: "Holistic Learning", d: "Growth of mind, character and creativity, together." },
  { icon: HeartHandshake, t: "Caring Educators", d: "Teachers who notice, encourage and guide each child." },
  { icon: ShieldCheck, t: "Safe & Supportive Environment", d: "A secure, respectful place where children feel they belong." },
  { icon: Palette, t: "Learning Through Activities", d: "Hands-on experiences that make ideas stick." },
];
export default function SchoolHighlights() {
  return (
    <section id="highlights" className="relative -mt-12 pb-10 sm:-mt-16">
      <div className="container-x">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: I, t, d }) => (
            <motion.article key={t} variants={item} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group rounded-3xl border border-navy/5 bg-white p-7 shadow-soft">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky text-royal transition-colors duration-300 group-hover:bg-gold group-hover:text-navy"><I className="h-6 w-6" /></span>
              <h3 className="mt-5 font-display text-xl text-navy">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{d}</p>
            </motion.article>
          ))}
        </Stagger>
        <Reveal className="mt-4"><p className="text-center text-xs text-body/70">Statistics and achievements will be added here once verified by the school.</p></Reveal>
      </div>
    </section>
  );
}
