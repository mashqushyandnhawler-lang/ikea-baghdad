"use client";
import Link from "next/link";
import { Trash2, ShoppingCart, MessageCircle, ArrowRight } from "lucide-react";
import { formatIQD, WHATSAPP_NUMBER } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useLang } from "@/lib/i18n";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, cartTotal, cartCount } = useStore();
  const { lang, t } = useLang();
  const delivery = cartTotal === 0 ? 0 : cartTotal >= 500000 ? 0 : 15000;
  const grand = cartTotal + delivery;
  const waText = encodeURIComponent(`Hello IKEA Baghdad, I want to order:\n${cart.map((i) => `• ${i.product.nameEn} x${i.qty} = ${formatIQD(i.product.price * i.qty)}`).join("\n")}\nTotal: ${formatIQD(grand)}`);

  if (cart.length === 0) return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full grid place-items-center"><ShoppingCart size={36} className="text-[#0058A3]" /></div>
      <h1 className="text-3xl font-black mt-5">{t("cart")} — 0</h1>
      <p className="text-gray-500 mt-2">{lang === "ar" ? "سلتك فارغة. ابدأ التسوق الآن!" : lang === "ku" ? "سەبەتەکەت بەتاڵە. ئێستا دەست بە بازاڕ بکە!" : "Your cart is empty. Start shopping now!"}</p>
      <Link href="/" className="mt-6 inline-flex items-center gap-2 bg-[#0058A3] text-white font-bold px-7 py-3 rounded-full">{t("continueShopping")} <ArrowRight size={16} /></Link>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-black">{t("cart")} ({cartCount})</h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-8 mt-6 items-start">
        <div className="space-y-4">
          {cart.map(({ product, qty }) => {
            const name = lang === "ar" ? product.nameAr : lang === "ku" ? product.nameKu : product.nameEn;
            return (
              <div key={product.slug} className="flex gap-4 bg-white border rounded-2xl p-4">
                <Link href={`/product/${product.slug}`} className="w-28 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-50"><img src={product.image} alt={name} className="w-full h-full object-cover" /></Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${product.slug}`} className="font-bold hover:text-[#0058A3] line-clamp-1">{name}</Link>
                  <p className="text-xs text-gray-500">{product.articleNo} • {product.dimensions}</p>
                  <p className="font-black text-[#0058A3] mt-1">{formatIQD(product.price)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border rounded-full">
                      <button onClick={() => updateQty(product.slug, qty - 1)} className="w-9 h-9 grid place-items-center font-black">−</button>
                      <span className="w-8 text-center font-bold text-sm">{qty}</span>
                      <button onClick={() => updateQty(product.slug, qty + 1)} className="w-9 h-9 grid place-items-center font-black">+</button>
                    </div>
                    <span className="font-bold text-sm">{formatIQD(product.price * qty)}</span>
                    <button onClick={() => removeFromCart(product.slug)} className="ms-auto text-red-600 p-2 hover:bg-red-50 rounded-full" aria-label="Remove"><Trash2 size={18} /></button>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href="/" className="text-sm font-bold text-[#0058A3]">{t("continueShopping")}</Link>
        </div>

        <aside className="bg-white border rounded-2xl p-6 sticky top-36">
          <h2 className="font-black text-lg mb-4">{t("checkout")}</h2>
          <dl className="space-y-2.5 text-sm">
            <div className="flex justify-between"><dt>{t("subtotal")}</dt><dd className="font-bold">{formatIQD(cartTotal)}</dd></div>
            <div className="flex justify-between"><dt>{t("delivery")} (Baghdad)</dt><dd className={`font-bold ${delivery === 0 ? "text-green-600" : ""}`}>{delivery === 0 ? "FREE" : formatIQD(delivery)}</dd></div>
            <div className="border-t pt-3 flex justify-between text-base"><dt className="font-black">{t("total")}</dt><dd className="font-black text-[#0058A3]">{formatIQD(grand)}</dd></div>
          </dl>
          {delivery > 0 && <p className="text-xs text-gray-500 mt-2">{lang === "ar" ? `أضف ${formatIQD(500000 - cartTotal)} للحصول على توصيل مجاني` : lang === "ku" ? `${formatIQD(500000 - cartTotal)} زیاد بکە بۆ گەیاندنی بێبەرامبەر` : `Add ${formatIQD(500000 - cartTotal)} more for FREE delivery`}</p>}
          <Link href="/checkout" className="mt-5 block text-center bg-[#0058A3] text-white font-black py-3.5 rounded-full">{t("checkout")}</Link>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noreferrer" className="mt-3 block text-center bg-[#25D366] text-white font-black py-3.5 rounded-full flex items-center justify-center gap-2"><MessageCircle size={18} /> {t("buyWhatsApp")}</a>
          <p className="text-[11px] text-gray-500 text-center mt-3">{lang === "ar" ? "الدفع نقداً عند الاستلام بالدينار العراقي" : lang === "ku" ? "پارەدان بە دیناری عێراقی لە کاتی گەیاندن" : "Cash on delivery in IQD • Card accepted"}</p>
        </aside>
      </div>
    </div>
  );
}
