import { Home, Lightbulb, Sprout, Hand, Users } from "lucide-react";
import Reveal from "./Reveal";
const r = [
  { i: Home, t: "A welcoming learning environment", d: "Children thrive when they feel safe, seen and valued." },
  { i: Lightbulb, t: "Encouragement of curiosity", d: "Questions are celebrated, not rushed past." },
  { i: Sprout, t: "Focus on personal development", d: "Growth in confidence and character alongside academics." },
  { i: Hand, t: "Learning through participation", d: "Children learn best by doing, making and sharing." },
  { i: Users, t: "Partnership with families", d: "Parents and educators working together for each child." },
];
export default function WhyParents() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">Why Parents Choose Us</p>
          <h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">A school that feels like a <span className="italic text-royal">partnership.</span></h2>
          <p className="mt-5 max-w-md text-lg">The values we hold close, and the way we hope your child experiences every day with us.</p></Reveal>
        <ul className="divide-y divide-navy/10">
          {r.map(({ i: I, t, d }, k) => (<Reveal key={t} delay={k * 0.05}><li className="flex gap-5 py-7"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sky text-royal"><I className="h-5 w-5" /></span>
            <div><h3 className="font-display text-xl text-navy sm:text-2xl">{t}</h3><p className="mt-1">{d}</p></div></li></Reveal>))}
        </ul>
      </div>
    </section>
  );
}
