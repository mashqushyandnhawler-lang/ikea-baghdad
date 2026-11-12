"use client";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Heart, ShoppingCart, Star, MessageCircle, Truck, ShieldCheck, Wrench, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { PRODUCTS, CATEGORIES, formatIQD, WHATSAPP_NUMBER } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang, t } = useLang();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState<"desc" | "specs">("desc");

  const related = useMemo(() => product ? PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4) : [], [product]);

  if (!product) return <div className="mx-auto max-w-7xl px-4 py-20 text-center"><h1 className="text-2xl font-black">Product not found</h1><Link href="/" className="text-[#0058A3] font-bold">← {t("home")}</Link></div>;

  const name = lang === "ar" ? product.nameAr : lang === "ku" ? product.nameKu : product.nameEn;
  const desc = lang === "ar" ? product.descAr : product.descEn;
  const cat = CATEGORIES.find((c) => c.slug === product.category);
  const wished = isWishlisted(product.slug);
  const waText = encodeURIComponent(`Hello IKEA Baghdad, I want to order: ${product.nameEn} x${qty} (${formatIQD(product.price * qty)})`);

  const handleAdd = () => { addToCart(product, qty); setAdded(true); setTimeout(() => setAdded(false), 2000); };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="text-xs text-gray-500 mb-5 flex flex-wrap gap-1"><Link href="/" className="hover:underline">{t("home")}</Link> / <Link href={`/category/${product.category}`} className="hover:underline">{cat ? (lang === "ar" ? cat.nameAr : cat.nameEn) : product.category}</Link> / <span className="text-gray-900 font-semibold">{name}</span></nav>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <div>
          <div className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-[4/3]">
            <img src={product.gallery[imgIdx]} alt={name} className="w-full h-full object-cover" />
            <button onClick={() => setImgIdx((imgIdx - 1 + product.gallery.length) % product.gallery.length)} className="absolute start-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow grid place-items-center"><ChevronLeft size={20} /></button>
            <button onClick={() => setImgIdx((imgIdx + 1) % product.gallery.length)} className="absolute end-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow grid place-items-center"><ChevronRight size={20} /></button>
            {product.badge && <span className="absolute top-4 start-4 bg-[#FFDB00] text-black text-xs font-black px-3 py-1 rounded-full uppercase">{product.badge}</span>}
          </div>
          <div className="flex gap-3 mt-3">
            {product.gallery.map((g, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className={`w-20 h-16 rounded-xl overflow-hidden border-2 ${i === imgIdx ? "border-[#0058A3]" : "border-transparent"}`}><img src={g} alt="" className="w-full h-full object-cover" /></button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500"><span className="flex text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />)}</span> {product.rating}.0 • {product.reviews} {t("reviews")} • {product.articleNo}</div>
          <h1 className="text-3xl sm:text-4xl font-black mt-2 leading-tight">{name}</h1>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-3xl font-black text-[#0058A3]">{formatIQD(product.price)}</span>
            {product.oldPrice && <><span className="text-lg text-gray-400 line-through">{formatIQD(product.oldPrice)}</span><span className="bg-red-600 text-white text-xs font-black px-2 py-1 rounded-full">-{Math.round((1 - product.price / product.oldPrice) * 100)}%</span></>}
          </div>
          <p className="text-xs text-gray-500 mt-1">{t("currency")} • {lang === "ar" ? "شامل الضريبة" : lang === "ku" ? "باجەکە لەگەڵە" : "VAT included"} • {product.stock > 0 ? <span className="text-green-600 font-bold">{t("inStock")} ({product.stock})</span> : <span className="text-red-600 font-bold">{t("outOfStock")}</span>}</p>

          <div className="mt-5">
            <p className="text-sm font-bold mb-2">{t("colors")}: <span className="font-normal text-gray-600">{color || product.colors[0]}</span></p>
            <div className="flex gap-2">{product.colors.map((c) => <button key={c} onClick={() => setColor(c)} className={`px-4 py-2 rounded-full text-sm border font-semibold ${color === c || (!color && c === product.colors[0]) ? "border-[#0058A3] bg-blue-50 text-[#0058A3]" : ""}`}>{c}</button>)}</div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm font-bold">{t("qty")}:</span>
            <div className="flex items-center border rounded-full overflow-hidden">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-11 grid place-items-center font-black">−</button>
              <span className="w-10 text-center font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-10 h-11 grid place-items-center font-black">+</button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={handleAdd} className="bg-[#0058A3] hover:bg-[#004a8a] text-white font-black py-3.5 rounded-full flex items-center justify-center gap-2">
              {added ? <><Check size={18} /> {lang === "ar" ? "تمت الإضافة!" : lang === "ku" ? "زیاد کرا!" : "Added!"}</> : <><ShoppingCart size={18} /> {t("addToCart")}</>}
            </button>
            <button onClick={() => toggleWishlist(product)} className={`font-bold py-3.5 rounded-full border-2 flex items-center justify-center gap-2 ${wished ? "border-red-600 text-red-600 bg-red-50" : "border-gray-200"}`}><Heart size={18} fill={wished ? "currentColor" : "none"} /> {t("wishlist")}</button>
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noreferrer" className="mt-3 w-full bg-[#25D366] text-white font-black py-3.5 rounded-full flex items-center justify-center gap-2"><MessageCircle size={20} /> {t("buyWhatsApp")}</a>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="bg-gray-50 rounded-2xl p-3"><Truck className="mx-auto text-[#0058A3]" size={20} /><p className="font-bold mt-1">{t("deliveryTitle")}</p><p className="text-gray-500">Baghdad same day</p></div>
            <div className="bg-gray-50 rounded-2xl p-3"><Wrench className="mx-auto text-[#0058A3]" size={20} /><p className="font-bold mt-1">{t("assemblyTitle")}</p><p className="text-gray-500">Free</p></div>
            <div className="bg-gray-50 rounded-2xl p-3"><ShieldCheck className="mx-auto text-[#0058A3]" size={20} /><p className="font-bold mt-1">{t("warrantyTitle")}</p><p className="text-gray-500">10 years</p></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 border rounded-2xl overflow-hidden">
        <div className="flex border-b">
          <button onClick={() => setTab("desc")} className={`px-6 py-3.5 text-sm font-bold ${tab === "desc" ? "border-b-2 border-[#0058A3] text-[#0058A3]" : "text-gray-500"}`}>{t("description")}</button>
          <button onClick={() => setTab("specs")} className={`px-6 py-3.5 text-sm font-bold ${tab === "specs" ? "border-b-2 border-[#0058A3] text-[#0058A3]" : "text-gray-500"}`}>{t("specs")}</button>
        </div>
        <div className="p-6">
          {tab === "desc" ? (
            <p className="text-gray-700 leading-relaxed max-w-3xl">{desc}</p>
          ) : (
            <dl className="grid sm:grid-cols-2 gap-4 max-w-3xl text-sm">
              <div><dt className="font-bold text-gray-500 text-xs uppercase">{t("dimensions")}</dt><dd className="mt-1 font-semibold">{product.dimensions}</dd></div>
              <div><dt className="font-bold text-gray-500 text-xs uppercase">{t("materials")}</dt><dd className="mt-1 font-semibold">{product.materials}</dd></div>
              <div><dt className="font-bold text-gray-500 text-xs uppercase">{t("article")}</dt><dd className="mt-1 font-semibold">{product.articleNo}</dd></div>
              <div><dt className="font-bold text-gray-500 text-xs uppercase">{t("colors")}</dt><dd className="mt-1 font-semibold">{product.colors.join(", ")}</dd></div>
            </dl>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-black mb-5">{t("related")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      )}
    </div>
  );
}
