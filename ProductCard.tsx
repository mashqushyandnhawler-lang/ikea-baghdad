"use client";
import Link from "next/link";
import { Heart, ShoppingCart, Star, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatIQD, WHATSAPP_NUMBER } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useLang();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const name = lang === "ar" ? product.nameAr : lang === "ku" ? product.nameKu : product.nameEn;
  const wished = isWishlisted(product.slug);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const waText = encodeURIComponent(`Hello IKEA Baghdad, I want to order: ${product.nameEn} (${formatIQD(product.price)})`);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <Link href={`/product/${product.slug}`}>
          <img src={product.image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
        </Link>
        {product.badge && (
          <span className={`absolute top-3 start-3 text-[11px] font-black px-2.5 py-1 rounded-full uppercase ${product.badge === "offer" ? "bg-red-600 text-white" : product.badge === "new" ? "bg-green-600 text-white" : product.badge === "limited" ? "bg-purple-700 text-white" : "bg-[#FFDB00] text-black"}`}>
            {product.badge === "offer" ? `-${discount}%` : product.badge === "new" ? (lang === "ar" ? "جديد" : lang === "ku" ? "نوێ" : "New") : product.badge === "limited" ? "Limited" : (lang === "ar" ? "الأكثر مبيعاً" : lang === "ku" ? "زۆرترین فرۆش" : "Bestseller")}
          </span>
        )}
        <button onClick={() => toggleWishlist(product)} aria-label={t("wishlist")} className={`absolute top-3 end-3 w-9 h-9 rounded-full grid place-items-center shadow ${wished ? "bg-red-600 text-white" : "bg-white text-gray-700"}`}>
          <Heart size={18} fill={wished ? "currentColor" : "none"} />
        </button>
        {product.stock <= 5 && <span className="absolute bottom-3 start-3 bg-black/70 text-white text-[11px] px-2 py-1 rounded-full">Only {product.stock} left</span>}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="flex text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill={i < product.rating ? "currentColor" : "none"} />)}</span>
          <span>({product.reviews})</span>
          <span className="ms-auto">{product.articleNo}</span>
        </div>
        <Link href={`/product/${product.slug}`} className="mt-1.5 font-bold text-[15px] leading-snug hover:text-[#0058A3] line-clamp-2">{name}</Link>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{lang === "ar" ? product.descAr : product.descEn}</p>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-black text-[#0058A3]">{formatIQD(product.price)}</span>
          {product.oldPrice && <span className="text-sm text-gray-400 line-through">{formatIQD(product.oldPrice)}</span>}
        </div>
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
          <button onClick={() => addToCart(product)} className="bg-[#0058A3] hover:bg-[#004a8a] text-white font-bold text-sm py-2.5 rounded-full flex items-center justify-center gap-1.5">
            <ShoppingCart size={16} /> {t("addToCart")}
          </button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-11 grid place-items-center rounded-full bg-[#25D366] text-white"><MessageCircle size={20} /></a>
        </div>
      </div>
    </div>
  );
}
