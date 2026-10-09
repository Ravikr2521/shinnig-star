import Reveal from "./Reveal";
import Photo from "./Photo";
const a = ["Art and creativity", "Cultural celebrations", "Sports and movement", "Group projects", "Classroom discoveries", "Student performances"];
export default function ActivitiesSection() {
  return (
    <section id="activities" className="overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl"><p className="eyebrow !text-gold">Activities & School Life</p><h2 className="h-display mt-4 !text-white text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">Learning Is an <span className="text-gold">Adventure.</span></h2></Reveal>
      </div>
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:px-8 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:container-x">
        {a.map((t, i) => (
          <Reveal key={t} delay={(i % 3) * 0.08} className="group w-[78vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none">
            <div className="relative overflow-hidden rounded-3xl"><Photo src={`/images/activity-${i + 1}.jpg`} alt={t} tone={i + 1} className="aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" /><h3 className="absolute bottom-5 left-5 font-display text-2xl">{t}</h3></div>
          </Reveal>
        ))}
      </div>
      <p className="container-x mt-8 text-xs text-white/50">Images shown are illustrative placeholders until genuine school photographs are added.</p>
    </section>
  );
}
