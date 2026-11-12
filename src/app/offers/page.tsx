"use client";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";
import { Tag } from "lucide-react";

export default function OffersPage() {
  const { lang, t } = useLang();
  const offers = PRODUCTS.filter((p) => p.oldPrice);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="bg-red-600 text-white rounded-3xl p-8 sm:p-10 text-center">
        <Tag size={36} className="mx-auto" />
        <h1 className="text-3xl sm:text-4xl font-black mt-3">{t("offers")} — up to 30% OFF</h1>
        <p className="text-white/90 mt-2 text-sm">{lang === "ar" ? "تخفيضات محدودة على كنب وتخزين وإكسسوارات. الأسعار بالدينار العراقي." : lang === "ku" ? "داشکاندنی سنووردار لەسەر سۆفا و هەڵگرتن و ئەکسسوارات. نرخ بە دیناری عێراقی." : "Limited-time deals on sofas, storage & accessories. Prices in IQD."}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">{offers.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  );
}
