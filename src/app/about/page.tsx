"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-black">{t("about")}</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
        <img src="https://images.pexels.com/photos/7587779/pexels-photo-7587779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Showroom" className="rounded-3xl w-full h-80 object-cover" />
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>{lang === "ar" ? "IKEA Baghdad هو متجر أثاث مستقل في قلب بغداد يجلب التصميم الاسكندنافي البسيط والمريح إلى المنازل العراقية. نؤمن أن الجميع يستحق منزلاً جميلاً ومريحاً بأسعار عادلة بالدينار العراقي." : lang === "ku" ? "IKEA Baghdad دوکانێکی سەربەخۆی مێبلە لە دڵی بەغدا کە دیزاینی سادەی سکاندینافی دەهێنێت بۆ ماڵە عێراقییەکان. باوەڕمان وایە هەموو کەسێک شایەنی ماڵێکی جوان و ئارامە بە نرخێکی دادپەروەرانە بە دیناری عێراقی." : "IKEA Baghdad is an independent furniture store in the heart of Baghdad bringing simple, comfortable Scandinavian design to Iraqi homes. We believe everyone deserves a beautiful, comfortable home at a fair price in IQD."}</p>
          <p>{lang === "ar" ? "من شارع الربيع في بغداد إلى أربيل والبصرة، نوفر أكثر من 500 منتج مع توصيل سريع وتركيب مجاني وضمان 10 سنوات. فريقنا يتحدث العربية والكوردية والإنجليزية لخدمتك عبر واتساب 0774 090 7063 وفي المعرض." : lang === "ku" ? "لە شەقامی ئەلڕەبیع لە بەغدا تا هەولێر و بەسرە، زیاتر لە 500 بەرهەم دابین دەکەین بە گەیاندنی خێرا و دانانی بێبەرامبەر و گرەنتی 10 ساڵ. تیمەکەمان بە عەرەبی و کوردی و ئینگلیزی خزمەتت دەکات لە ڕێگەی WhatsApp 0774 090 7063 و لە ناوەندەکەدا." : "From Al Rabee Street in Baghdad to Erbil and Basra, we offer 500+ products with fast delivery, free assembly and 10-year warranty. Our team speaks Arabic, Kurdish Sorani and English to serve you on WhatsApp 0774 090 7063 and in-store."}</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-blue-50 rounded-2xl p-4"><p className="text-2xl font-black text-[#0058A3]">500+</p><p className="text-xs font-bold">Products</p></div>
            <div className="bg-blue-50 rounded-2xl p-4"><p className="text-2xl font-black text-[#0058A3]">18</p><p className="text-xs font-bold">Governorates</p></div>
            <div className="bg-blue-50 rounded-2xl p-4"><p className="text-2xl font-black text-[#0058A3]">10y</p><p className="text-xs font-bold">Warranty</p></div>
          </div>
          <Link href="/store" className="inline-block bg-[#0058A3] text-white font-bold px-6 py-3 rounded-full text-sm">{t("visitStore")}</Link>
        </div>
      </div>
      <div className="mt-8 bg-[#FFF7CC] border border-yellow-200 rounded-2xl p-5 text-sm text-gray-700">
        <p className="font-bold">{t("disclaimer")}</p>
        <p className="mt-1">{lang === "ar" ? "نستخدم تصاميم وأسماء منتجات مستوحاة من الطراز الاسكندنافي لأغراض العرض. جميع العلامات التجارية ملك لأصحابها." : lang === "ku" ? "ئێمە دیزاین و ناوی بەرهەم بە ئیلھام لە شێوازی سکاندینافی بەکاردەهێنین بۆ مەبەستی نمایش. هەموو براندەکان موڵکی خاوەنەکانیانن." : "We use Scandinavian-inspired designs and product names for display purposes. All trademarks belong to their respective owners."}</p>
      </div>
    </div>
  );
}
