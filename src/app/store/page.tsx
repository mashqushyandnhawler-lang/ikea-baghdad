"use client";
import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, PHONE_TEL, PHONE_DISPLAY, STORE_MAP_QUERY } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function StorePage() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-black">{t("store")}</h1>
      <p className="text-gray-500 mt-2">{t("visitStore")} — {t("addressLine")}</p>

      <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
        <div>
          <div className="rounded-3xl overflow-hidden border h-[380px] bg-gray-100 relative">
            <iframe title="IKEA Baghdad — Al Rabee Street map" src={`https://www.google.com/maps?q=${STORE_MAP_QUERY}&output=embed`} className="w-full h-full border-0" loading="lazy" />
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <a href={`https://maps.google.com/?q=${STORE_MAP_QUERY}`} target="_blank" rel="noreferrer" className="bg-[#0058A3] text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 text-sm"><Navigation size={16} /> {t("getDirections")}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 text-sm"><MessageCircle size={16} /> WhatsApp</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 text-sm"><InstagramIcon size={16} /> Instagram</a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="font-black flex items-center gap-2"><MapPin className="text-[#0058A3]" /> IKEA Baghdad — {t("addressLine")}</h2>
            <p className="text-sm text-gray-600 mt-2">{t("addressLine")}</p>
            <p className="text-sm mt-2 flex items-center gap-2"><Phone size={15} className="text-[#0058A3]" /> <a href={PHONE_TEL} className="font-bold text-[#0058A3] hover:underline">{PHONE_DISPLAY}</a></p>
            <p className="text-sm mt-1 flex items-center gap-2"><MessageCircle size={15} className="text-[#25D366]" /> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="font-bold text-[#128C4B] hover:underline">WhatsApp {PHONE_DISPLAY}</a></p>
            <p className="text-sm mt-1 flex items-center gap-2"><InstagramIcon size={15} className="text-pink-600" /> <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-bold text-pink-600 hover:underline">@swedenekia</a></p>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 text-sm">
              <p className="font-black flex items-center gap-2"><Clock size={16} /> {t("openingHours")}</p>
              <p className="mt-1">{t("satThu")}</p><p>{t("fri")}</p>
            </div>
            <ul className="mt-4 text-sm space-y-1.5 text-gray-700">
              <li>✓ {lang === "ar" ? "معرض 2,500 م² مع غرف معيشة ونوم كاملة" : lang === "ku" ? "ناوەندێکی 2,500 م² بە ژووری تەواو" : "2,500 m² showroom with full living & bedroom displays"}</li>
              <li>✓ {lang === "ar" ? "مواقف سيارات مجانية" : lang === "ku" ? "پارکینگی بێبەرامبەر" : "Free parking"}</li>
              <li>✓ {lang === "ar" ? "خدمة تصميم داخلي مجانية" : lang === "ku" ? "خزمەتی دیزاینی ناوەوەی بێبەرامبەر" : "Free interior design service"}</li>
              <li>✓ {lang === "ar" ? "توصيل لجميع المحافظات" : lang === "ku" ? "گەیاندن بۆ هەموو پارێزگاکان" : "Delivery to all governorates"}</li>
            </ul>
          </div>
          <div className="bg-[#111827] text-white rounded-2xl p-6">
            <h3 className="font-black">{lang === "ar" ? "فروع أخرى قريباً" : lang === "ku" ? "لقێکی تر بەم زووانە" : "More branches coming soon"}</h3>
            <p className="text-sm text-gray-300 mt-1">Erbil • Basra • Mosul — {lang === "ar" ? "توصيل متاح الآن لجميع المحافظات" : lang === "ku" ? "گەیاندن ئێستا بۆ هەموو پارێزگاکان بەردەستە" : "Delivery available now to all governorates"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
