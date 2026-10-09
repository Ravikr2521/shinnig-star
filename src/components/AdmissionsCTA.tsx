"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
export default function AdmissionsCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-28 text-center text-white sm:py-36">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Cpath fill='%23F5B942' d='M36 18l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z'/%3E%3C/svg%3E\")" }} />
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-royal/40 blur-3xl" />
      <motion.div className="container-x" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <Star className="floaty mx-auto h-10 w-10 text-gold" fill="currentColor" strokeWidth={0} aria-hidden />
        <h2 className="font-display mx-auto mt-6 max-w-3xl text-[clamp(2.4rem,6.5vw,5rem)] leading-[1.02]">Every Great Journey <span className="text-gold">Starts Somewhere.</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">Take the next step toward discovering a learning environment designed to inspire your child&apos;s growth.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contact" className="btn btn-gold">Enquire About Admissions</a><a href="#contact" className="btn btn-ghost">Contact the School</a></div>
      </motion.div>
    </section>
  );
}
