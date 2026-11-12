"use client";
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle2, Navigation } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, PHONE_TEL, PHONE_DISPLAY, STORE_MAP_QUERY } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang, t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try { await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }); } catch {}
    setSaving(false);
    setDone(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-black">{t("contact")}</h1>
      <div className="grid lg:grid-cols-[380px_1fr] gap-8 mt-8 items-start">
        <aside className="space-y-4">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5">
            <MessageCircle size={32} />
            <div><p className="font-black">{t("whatsappSupport")}</p><p className="text-sm text-white/90">{PHONE_DISPLAY} — {lang === "ar" ? "رد سريع" : lang === "ku" ? "وەڵامی خێرا" : "Fast reply"}</p></div>
          </a>
          <a href={PHONE_TEL} className="flex items-center gap-4 bg-[#0058A3] text-white rounded-2xl p-5">
            <Phone size={32} />
            <div><p className="font-black">{t("callUs")}</p><p className="text-sm text-white/90">{PHONE_DISPLAY}</p></div>
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-2xl p-5">
            <InstagramIcon size={32} />
            <div><p className="font-black">Instagram</p><p className="text-sm text-white/90">@swedenekia — {t("followUs")}</p></div>
          </a>
          <div className="bg-white border rounded-2xl p-5 space-y-4 text-sm">
            <p className="flex gap-3"><Phone className="text-[#0058A3] shrink-0" size={18} /> <a href={PHONE_TEL} className="font-bold text-[#0058A3] hover:underline">{PHONE_DISPLAY}</a></p>
            <p className="flex gap-3"><MessageCircle className="text-[#25D366] shrink-0" size={18} /> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="font-bold text-[#128C4B] hover:underline">WhatsApp {PHONE_DISPLAY}</a></p>
            <p className="flex gap-3"><InstagramIcon size={18} className="text-pink-600 shrink-0" /> <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-bold text-pink-600 hover:underline">@swedenekia</a></p>
            <p className="flex gap-3"><Mail className="text-[#0058A3] shrink-0" size={18} /> info@ikeabaghdad.iq</p>
            <p className="flex gap-3"><MapPin className="text-[#0058A3] shrink-0" size={18} /> <span><b>{t("storeAddress")}:</b><br />{t("addressLine")}</span></p>
            <p className="flex gap-3"><Clock className="text-[#0058A3] shrink-0" size={18} /> <span><b>{t("openingHours")}</b><br />{t("satThu")}<br />{t("fri")}</span></p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 text-sm">
            <p className="font-black">{lang === "ar" ? "خدمة العملاء" : lang === "ku" ? "خزمەتی کڕیار" : "Customer service"}</p>
            <p className="text-gray-600 mt-1">{lang === "ar" ? "نتحدث العربية والكوردية والإنجليزية. اطلب عبر واتساب أو زر المعرض." : lang === "ku" ? "بە عەرەبی و کوردی و ئینگلیزی قسە دەکەین. لە ڕێگەی WhatsApp داوا بکە یان سەردانی ناوەندەکە بکە." : "We speak Arabic, Kurdish Sorani & English. Order via WhatsApp or visit the showroom."}</p>
          </div>
        </aside>

        <div className="bg-white border rounded-2xl p-6">
          {done ? (
            <div className="text-center py-10">
              <CheckCircle2 size={56} className="mx-auto text-green-600" />
              <h2 className="text-2xl font-black mt-4">{t("contactSuccess")}</h2>
              <button onClick={() => { setDone(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="mt-4 text-[#0058A3] font-bold text-sm">{t("send")} →</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h2 className="font-black text-lg">{t("send")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-bold">{t("name")} *</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" /></div>
                <div><label className="text-sm font-bold">{t("email")} *</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" /></div>
              </div>
              <div><label className="text-sm font-bold">{t("subject")}</label><input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" placeholder="Order, delivery, assembly…" /></div>
              <div><label className="text-sm font-bold">{t("message")} *</label><textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" /></div>
              <button disabled={saving} className="bg-[#0058A3] text-white font-black px-8 py-3.5 rounded-full disabled:opacity-60">{saving ? "Sending…" : t("send")}</button>
            </form>
          )}
        </div>
      </div>

      {/* Map section */}
      <div className="mt-10">
        <h2 className="font-black text-xl flex items-center gap-2"><MapPin className="text-[#0058A3]" /> {t("storeAddress")} — {t("addressLine")}</h2>
        <div className="rounded-3xl overflow-hidden border h-[340px] bg-gray-100 mt-4">
          <iframe title="IKEA Baghdad — Al Rabee Street map" src={`https://www.google.com/maps?q=${STORE_MAP_QUERY}&output=embed`} className="w-full h-full border-0" loading="lazy" />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <a href={`https://maps.google.com/?q=${STORE_MAP_QUERY}`} target="_blank" rel="noreferrer" className="bg-[#0058A3] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 text-sm"><Navigation size={16} /> {t("getDirections")}</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 text-sm"><MessageCircle size={16} /> WhatsApp {PHONE_DISPLAY}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 text-sm"><InstagramIcon size={16} /> @swedenekia</a>
        </div>
      </div>
    </div>
  );
}
