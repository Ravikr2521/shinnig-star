"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Baby, BookOpen, Backpack, Sparkles, Plus } from "lucide-react";
import Reveal, { Stagger, item } from "./Reveal";
import Photo from "./Photo";

const programs = [
  { icon: Baby, t: "Early Learning", d: "Play-based discovery that builds language, curiosity and social confidence.", more: "Placeholder: describe the school's actual early years programme.", img: "academic-1" },
  { icon: BookOpen, t: "Primary Education", d: "Strong foundations in literacy, numeracy and inquiry, taught with care.", more: "Placeholder: describe verified primary curriculum and classes offered.", img: "academic-2" },
  { icon: Backpack, t: "Middle School", d: "Growing independence, critical thinking and responsibility.", more: "Placeholder: describe verified middle school offering.", img: "academic-3" },
  { icon: Sparkles, t: "Learning Enrichment", d: "Creative and skill-building experiences beyond the classroom.", more: "Placeholder: list confirmed enrichment activities.", img: "academic-4" },
];
export default function AcademicsSection() {
  const [openI, setOpenI] = useState<number | null>(null);
  return (
    <section id="academics" className="bg-sky py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl"><p className="eyebrow">Academics</p><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">A path that grows with every child.</h2>
          <p className="mt-4 text-sm text-body/70">Suggested categories. Display only the stages the school confirms.</p></Reveal>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ icon: I, t, d, more, img }, i) => (
            <motion.article key={t} variants={item} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <div className="relative"><Photo src={`/images/${img}.jpg`} alt={`${t} at school`} tone={i} className="aspect-[4/3]" />
                <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-navy shadow-soft"><I className="h-5 w-5" /></span></div>
              <div className="flex flex-1 flex-col p-6 pt-10">
                <h3 className="font-display text-2xl text-navy">{t}</h3><p className="mt-2 text-[15px] leading-relaxed">{d}</p>
                <AnimatePresence initial={false}>{openI === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-3 text-sm italic text-body/80">{more}</motion.p>}</AnimatePresence>
                <button onClick={() => setOpenI(openI === i ? null : i)} aria-expanded={openI === i} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-royal"><Plus className={`h-4 w-4 transition-transform duration-300 ${openI === i ? "rotate-45" : ""}`} />Learn More</button>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
