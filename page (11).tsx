"use client";
import Link from "next/link";
import { ROOMS, PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export default function RoomsPage() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-black">{t("rooms")}</h1>
      <p className="text-gray-500 mt-2 max-w-2xl text-sm sm:text-base">{lang === "ar" ? "إلهام تصميم داخلي لغرف المعيشة والنوم والطعام والمكتب — مصمم للمنازل العراقية والشقق في بغداد وأربيل والبصرة." : lang === "ku" ? "ئیلھامی دیزاینی ناوەوە بۆ ژووری دانیشتن و نوستن و خواردن و ئۆفیس — بۆ ماڵە عێراقییەکان لە بەغدا و هەولێر و بەسرە." : "Interior inspiration for living, bedroom, dining and office — designed for Iraqi homes and apartments in Baghdad, Erbil & Basra."}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {ROOMS.map((r, i) => (
          <article key={i} className="rounded-3xl overflow-hidden border bg-white">
            <div className="relative h-64 sm:h-72">
              <img src={r.image} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-4 start-4 bg-white/90 text-xs font-black px-3 py-1 rounded-full">{lang === "ar" ? r.titleAr : lang === "ku" ? r.titleKu : r.titleEn}</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-black">{lang === "ar" ? r.titleAr : lang === "ku" ? r.titleKu : r.titleEn}</h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{lang === "ar" ? r.descAr : lang === "ku" ? r.descKu : r.descEn}</p>
              <ul className="mt-3 text-sm space-y-1.5 text-gray-700">
                <li>• {lang === "ar" ? "ألوان فاتحة وخشب طبيعي" : lang === "ku" ? "ڕەنگی سووک و داری سروشتی" : "Light colours & natural wood"}</li>
                <li>• {lang === "ar" ? "أثاث متعدد الوظائف وتخزين ذكي" : lang === "ku" ? "مێبلی فرەکار و هەڵگرتنی زیرەک" : "Multifunctional furniture & smart storage"}</li>
                <li>• {lang === "ar" ? "إضاءة دافئة ومنسوجات مريحة" : lang === "ku" ? "ڕووناکی گەرم و دەقی ئارام" : "Warm lighting & cosy textiles"}</li>
              </ul>
              <Link href={`/category/${r.category}`} className="mt-4 inline-flex items-center gap-2 bg-[#0058A3] text-white font-bold px-5 py-2.5 rounded-full text-sm">{t("shopNow")} <ArrowRight size={15} /></Link>
            </div>
          </article>
        ))}
      </div>

      <h2 className="text-2xl font-black mt-12 mb-5">{lang === "ar" ? "منتجات مميزة لهذه الغرف" : lang === "ku" ? "بەرهەمی تایبەت بۆ ئەم ژوورانە" : "Featured products for these rooms"}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  );
}
