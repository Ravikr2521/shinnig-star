import { Instagram } from "lucide-react";
import Reveal from "./Reveal";
import Photo from "./Photo";
import { site } from "@/data/site";
export default function InstagramSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal to-navy text-white"><Instagram /></span>
          <h2 className="h-display mt-5 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">Little Moments. <span className="text-royal">Big Achievements.</span></h2>
          <p className="mt-4 text-lg">Explore school activities, creative moments, celebrations, and everyday learning.</p>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-navy mt-8"><Instagram className="h-4 w-4" />Follow {site.instagramHandle}</a>
        </Reveal>
        <div className="mt-14 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="View on Instagram" className="group relative block overflow-hidden rounded-xl sm:rounded-2xl">
                <Photo src={`/images/insta-${i + 1}.jpg`} alt="Demonstration image, replace with authorized photo" tone={i} className="aspect-square" />
                <span className="absolute inset-0 grid place-items-center bg-navy/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"><Instagram /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-body/60">Demonstration tiles. Not a live feed. Replace with authorized images.</p>
      </div>
    </section>
  );
}
