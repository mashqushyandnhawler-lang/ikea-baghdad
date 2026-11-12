"use client";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Clock, CreditCard, Truck, ShieldCheck } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { CATEGORIES, WHATSAPP_NUMBER, INSTAGRAM_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang, t } = useLang();
  const catName = (c: typeof CATEGORIES[0]) => lang === "ar" ? c.nameAr : lang === "ku" ? c.nameKu : c.nameEn;
  return (
    <footer className="bg-[#111827] text-gray-300 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="bg-[#0058A3] text-white font-black px-3 py-1.5 rounded inline-block">IKEA <span className="text-[#FFDB00]">BAGHDAD</span></span>
          <p className="text-sm mt-3 leading-relaxed">{lang === "ar" ? "أثاث اسكندنافي عصري للمنازل العراقية. جودة، راحة وسعر عادل بالدينار العراقي." : lang === "ku" ? "مێبلی سکاندینافی مۆدێرن بۆ ماڵە عێراقییەکان. کوالێتی و ئارامی و نرخێکی دادپەروەرانە بە دیناری عێراقی." : "Modern Scandinavian furniture for Iraqi homes. Quality, comfort and fair prices in IQD."}</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2.5 rounded-full text-sm"><MessageCircle size={18} /> WhatsApp {PHONE_DISPLAY}</a>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-full text-sm"><Phone size={16} /> {PHONE_DISPLAY}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-4 py-2.5 rounded-full text-sm"><InstagramIcon size={16} /> @swedenekia</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">{t("shop")}</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => <li key={c.slug}><Link href={`/category/${c.slug}`} className="hover:text-white">{catName(c)}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">{t("about")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">{t("about")}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{t("contact")}</Link></li>
            <li><Link href="/store" className="hover:text-white">{t("store")}</Link></li>
            <li><Link href="/offers" className="hover:text-white">{t("offers")}</Link></li>
            <li><Link href="/rooms" className="hover:text-white">{t("rooms")}</Link></li>
            <li><Link href="/cart" className="hover:text-white">{t("cart")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">{t("contact")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5" /> <a href="https://maps.google.com/?q=Al+Rabee+Street+Baghdad+Iraq" target="_blank" rel="noreferrer" className="hover:text-white hover:underline">{t("addressLine")}</a></li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0" /> <a href={PHONE_TEL} className="hover:text-white hover:underline font-semibold">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-2"><MessageCircle size={16} className="shrink-0" /> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">WhatsApp {PHONE_DISPLAY}</a></li>
            <li className="flex gap-2"><InstagramIcon size={16} className="shrink-0 mt-0.5" /> <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">@swedenekia</a></li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0" /> info@ikeabaghdad.iq</li>
            <li className="flex gap-2"><Clock size={16} className="shrink-0" /> {t("satThu")}</li>
          </ul>
          <div className="flex gap-2 mt-4 text-xs">
            <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><CreditCard size={13} /> Cash / Card</span>
            <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><Truck size={13} /> Delivery</span>
            <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><ShieldCheck size={13} /> Warranty</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs space-y-2">
          <p className="text-[#FFDB00] font-semibold">{t("disclaimer")}</p>
          <p>© {new Date().getFullYear()} IKEA Baghdad. {t("allRights")} • {t("poweredBy")}</p>
        </div>
      </div>
    </footer>
  );
}
