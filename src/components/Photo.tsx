"use client";
import { useState } from "react";
import { Star } from "lucide-react";
const tones = ["from-navy to-royal", "from-royal to-[#60a5fa]", "from-[#1e3a64] to-navy", "from-[#f5b942]/90 to-[#f59e0b]"];
/** Shows /public/images/<file> when it exists; otherwise a branded, clearly replaceable placeholder. */
export default function Photo({ src, alt, tone = 0, className = "", eager = false }: { src: string; alt: string; tone?: number; className?: string; eager?: boolean }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tones[tone % tones.length]} ${className}`}>
      <div className="absolute inset-0 grid place-items-center text-white/25" aria-hidden><Star className="h-1/4 w-1/4 max-h-24 max-w-24" fill="currentColor" strokeWidth={0} /></div>
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
      )}
      {!ok && <span className="sr-only">{alt} (placeholder image)</span>}
    </div>
  );
}
