"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";

function SearchInner() {
  const params = useSearchParams();
  const q0 = params.get("q") || "";
  const badge0 = params.get("badge") || "";
  const { lang, t } = useLang();
  const [q, setQ] = useState(q0);
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(2000000);

  const results = useMemo(() => {
    let list = [...PRODUCTS];
    const query = (q || q0).toLowerCase().trim();
    if (query) list = list.filter((p) => p.nameEn.toLowerCase().includes(query) || p.nameAr.includes(query) || p.nameKu.includes(query) || p.category.includes(query) || p.descEn.toLowerCase().includes(query));
    if (badge0 === "new") list = list.filter((p) => p.badge === "new" || p.badge === "limited");
    if (cat !== "all") list = list.filter((p) => p.category === cat);
    list = list.filter((p) => p.price <= maxPrice);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, q0, badge0, cat, sort, maxPrice]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-black">{t("search")}</h1>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex bg-white border-2 border-[#0058A3] rounded-full overflow-hidden max-w-2xl">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search")} className="flex-1 px-5 py-3 text-sm outline-none" />
        <button className="bg-[#0058A3] text-white px-6 font-bold text-sm flex items-center gap-2"><Search size={18} /></button>
      </form>

      <div className="mt-6 flex flex-wrap gap-2">
        <button onClick={() => setCat("all")} className={`px-4 py-2 rounded-full text-sm font-bold border ${cat === "all" ? "bg-[#0058A3] text-white border-[#0058A3]" : ""}`}>All</button>
        {CATEGORIES.map((c) => (
          <button key={c.slug} onClick={() => setCat(c.slug)} className={`px-4 py-2 rounded-full text-sm font-bold border ${cat === c.slug ? "bg-[#0058A3] text-white border-[#0058A3]" : ""}`}>{lang === "ar" ? c.nameAr : lang === "ku" ? c.nameKu : c.nameEn}</button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-500">{results.length} {t("results")}{q0 && <> for “<b>{q0}</b>”</>}</span>
        <div className="ms-auto flex items-center gap-3">
          <label className="text-xs font-bold flex items-center gap-2">{t("price")} ≤ {(maxPrice / 1000).toFixed(0)}k <input type="range" min={50000} max={2000000} step={25000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="accent-[#0058A3]" /></label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded-full px-4 py-2 text-sm font-semibold bg-white">
            <option value="featured">Featured</option><option value="price-asc">Price ↑</option><option value="price-desc">Price ↓</option><option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl mt-6"><p className="font-bold text-lg">{t("noResults")}</p><Link href="/" className="text-[#0058A3] font-bold text-sm mt-2 inline-block">{t("continueShopping")}</Link></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">{results.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-20">Loading…</div>}><SearchInner /></Suspense>;
}
