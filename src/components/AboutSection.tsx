import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Photo from "./Photo";
const points = ["Learning beyond textbooks", "Individual attention and encouragement", "Creativity and critical thinking", "Confidence, communication, and collaboration", "Respect, responsibility, and positive values"];
export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="group overflow-hidden rounded-[2.5rem] shadow-lift"><Photo src="/images/about.jpg" alt="Students and teacher learning together" tone={2} className="aspect-[4/5]" /></div>
          <div className="absolute -right-3 -top-5 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-gold text-navy shadow-soft sm:-right-6"><svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" aria-hidden><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" /></svg></div>
        </Reveal>
        <div>
          <Reveal><p className="eyebrow">About Us</p><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.9rem)] leading-[1.05]">Growing Bright Minds. <span className="text-royal">Building Bright Futures.</span></h2></Reveal>
          <Reveal delay={0.1}><p className="mt-6 text-lg leading-relaxed">We believe every child arrives with their own spark. Our role is to nurture it with patience, encouragement and meaningful experiences, so children grow into confident, curious and kind young people.</p></Reveal>
          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (<Reveal key={p} delay={0.15 + i * 0.06}><li className="flex items-start gap-3 text-navy"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/25 text-navy"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>{p}</li></Reveal>))}
          </ul>
          <Reveal delay={0.5}><a href="#academics" className="btn btn-navy mt-10">Discover Our Approach</a></Reveal>
          <p className="mt-6 text-xs text-body/60">Placeholder copy: replace with the school&apos;s verified philosophy and mission.</p>
        </div>
      </div>
    </section>
  );
}
