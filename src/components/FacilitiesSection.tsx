import Reveal from "./Reveal";
import Photo from "./Photo";
const f = [
  { t: "Classrooms", d: "Bright, welcoming spaces for learning.", c: "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto" },
  { t: "Library & Reading", d: "A quiet corner to love books.", c: "aspect-[4/3]" },
  { t: "Science & Computer Learning", d: "Exploring ideas hands-on.", c: "aspect-[4/3]" },
  { t: "Sports & Physical Activities", d: "Movement, teamwork and joy.", c: "aspect-[4/3] lg:col-span-2" },
  { t: "Creative Arts", d: "Space to imagine and make.", c: "aspect-[4/3]" },
  { t: "Safety & Wellbeing", d: "Care for every child, every day.", c: "aspect-[4/3]" },
];
export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl"><p className="eyebrow">Learning Environment</p><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">Spaces designed for curiosity.</h2>
          <p className="mt-4 text-sm text-body/70">Categories to be confirmed by the school before publication.</p></Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-4">
          {f.map((x, i) => (
            <Reveal key={x.t} delay={(i % 3) * 0.08} className={`${x.c} group relative overflow-hidden rounded-3xl`}>
              <Photo src={`/images/facility-${i + 1}.jpg`} alt={x.t} tone={i} className="h-full w-full min-h-[220px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white"><h3 className="font-display text-xl">{x.t}</h3><p className="text-sm text-white/80">{x.d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
