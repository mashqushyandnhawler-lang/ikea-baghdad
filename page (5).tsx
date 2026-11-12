"use client";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang, t } = useLang();
  const cat = CATEGORIES.find((c) => c.slug === slug);
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.category === slug);
    list = list.filter((p) => p.price <= maxPrice && p.rating >= minRating);
    if (inStockOnly) list = list.filter((p) => p.stock > 0);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "name") list = [...list].sort((a, b) => a.nameEn.localeCompare(b.nameEn));
    return list;
  }, [slug, sort, maxPrice, minRating, inStockOnly]);

  if (!cat) return <div className="mx-auto max-w-7xl px-4 py-20 text-center"><h1 className="text-2xl font-black">Category not found</h1><Link href="/" className="text-[#0058A3] font-bold">← Home</Link></div>;

  const catName = lang === "ar" ? cat.nameAr : lang === "ku" ? cat.nameKu : cat.nameEn;

  const FilterPanel = (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-sm mb-2">{t("price")} — {t("maxPrice")}: {(maxPrice / 1000).toFixed(0)}k IQD</h4>
        <input type="range" min={50000} max={2000000} step={25000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#0058A3]" />
        <div className="flex justify-between text-xs text-gray-500"><span>50k</span><span>2M</span></div>
      </div>
      <div>
        <h4 className="font-bold text-sm mb-2">{t("rating")}</h4>
        <div className="flex gap-2">
          {[0, 4, 5].map((r) => (
            <button key={r} onClick={() => setMinRating(r)} className={`px-3 py-1.5 rounded-full text-xs font-bold border ${minRating === r ? "bg-[#0058A3] text-white border-[#0058A3]" : ""}`}>{r === 0 ? "All" : `${r}★+`}</button>
          ))}
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
        <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="w-4 h-4 accent-[#0058A3]" /> {t("inStock")}
      </label>
      <button onClick={() => { setMaxPrice(2000000); setMinRating(0); setInStockOnly(false); }} className="text-xs font-bold text-red-600">{t("clearFilters")}</button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="text-xs text-gray-500 mb-3"><Link href="/" className="hover:underline">{t("home")}</Link> / <span className="text-gray-900 font-semibold">{catName}</span></nav>
      <div className="relative rounded-3xl overflow-hidden h-48 sm:h-64 mb-8">
        <img src={cat.image} alt={catName} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div className="text-white"><h1 className="text-3xl sm:text-4xl font-black">{catName}</h1><p className="text-sm text-white/85 mt-1">{lang === "ar" ? cat.taglineAr : cat.taglineEn} • {filtered.length} {t("results")}</p></div>
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <aside className="hidden lg:block w-64 shrink-0 bg-white border rounded-2xl p-5 sticky top-36">
          <h3 className="font-black flex items-center gap-2 mb-4"><SlidersHorizontal size={18} /> {t("filters")}</h3>
          {FilterPanel}
        </aside>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-bold"><SlidersHorizontal size={16} /> {t("filters")}</button>
            <span className="text-sm text-gray-500">{filtered.length} {t("results")}</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="ms-auto border rounded-full px-4 py-2 text-sm font-semibold bg-white">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top rated</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
          {showFilters && <div className="lg:hidden bg-white border rounded-2xl p-5 mb-5">{FilterPanel}</div>}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl"><p className="font-bold">{t("noResults")}</p><button onClick={() => { setMaxPrice(2000000); setMinRating(0); setInStockOnly(false); }} className="mt-3 text-[#0058A3] font-bold text-sm">{t("clearFilters")}</button></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          )}
        </div>
      </div>
    </div>
  );
}
