"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useStore } from "@/lib/store";
import { useLang } from "@/lib/i18n";

export default function WishlistPage() {
  const { wishlist } = useStore();
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-black flex items-center gap-2"><Heart className="text-red-600" fill="currentColor" /> {t("wishlist")} ({wishlist.length})</h1>
      {wishlist.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl mt-6">
          <p className="font-bold">{lang === "ar" ? "لا توجد منتجات مفضلة بعد. اضغط على القلب لحفظ منتج!" : lang === "ku" ? "هێشتا هیچ بەرهەمێکی دڵخواز نییە. کرتە لەسەر دڵ بکە بۆ پاشەکەوتکردن!" : "No favourites yet. Tap the heart on any product to save it!"}</p>
          <Link href="/" className="mt-4 inline-block bg-[#0058A3] text-white font-bold px-6 py-3 rounded-full text-sm">{t("continueShopping")}</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">{wishlist.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      )}
    </div>
  );
}
