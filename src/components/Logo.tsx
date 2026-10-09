// Temporary star mark. Replace with the school's official logo.
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-navy ring-2 ring-gold/80">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="currentColor" aria-hidden><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" /></svg>
      </span>
      <span className="leading-tight text-left">
        <span className={`block font-display text-[17px] font-semibold ${dark ? "text-white" : "text-navy"}`}>Shining Star</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[.2em] ${dark ? "text-white/60" : "text-body"}`}>International School</span>
      </span>
    </span>
  );
}
