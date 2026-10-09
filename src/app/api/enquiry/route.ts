import { NextResponse } from "next/server";

// Server-side enquiry handler. Forwards to ENQUIRY_WEBHOOK_URL (CRM / email service / Zapier / Make).
// If unset, it honestly returns 501 so the UI never fakes a success.
const hits = new Map<string, number[]>();
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (recent.length >= 3) return NextResponse.json({ error: "Too many requests. Please wait a minute." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let b: Record<string, string>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  const name = (b.name ?? "").trim(), phone = (b.phone ?? "").trim(), email = (b.email ?? "").trim();
  if (name.length < 2 || !/^[+()\-\s\d]{7,18}$/.test(phone) || (email && !/^\S+@\S+\.\S+$/.test(email)) || !b.grade)
    return NextResponse.json({ error: "Please check the form fields." }, { status: 422 });

  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return NextResponse.json({ error: "Enquiry delivery is not connected yet.", code: "NOT_CONFIGURED" }, { status: 501 });
  try {
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, grade: b.grade, message: (b.message ?? "").slice(0, 1500), receivedAt: new Date().toISOString() }) });
    if (!r.ok) throw new Error();
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Could not deliver your enquiry. Please try again." }, { status: 502 }); }
}
