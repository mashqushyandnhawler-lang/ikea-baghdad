"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, CheckCircle2, ShoppingCart } from "lucide-react";
import { formatIQD, WHATSAPP_NUMBER } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useLang } from "@/lib/i18n";

const GOVS = ["Baghdad", "Basra", "Erbil", "Sulaymaniyah", "Mosul (Nineveh)", "Kirkuk", "Anbar", "Babil", "Diyala", "Karbala", "Najaf", "Muthanna", "Dhi Qar", "Maysan", "Salah al-Din", "Wasit", "Dohuk", "Halabja"];

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useStore();
  const { lang, t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", address: "", governorate: "Baghdad" });
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);
  const delivery = cartTotal >= 500000 ? 0 : 15000;
  const grand = cartTotal + delivery;

  const waText = encodeURIComponent(`Hello IKEA Baghdad, new order:\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}, ${form.governorate}\nItems:\n${cart.map((i) => `• ${i.product.nameEn} x${i.qty}`).join("\n")}\nTotal: ${formatIQD(grand)}`);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, items: cart.map((i) => ({ slug: i.product.slug, name: i.product.nameEn, qty: i.qty, price: i.product.price })), total: grand }) });
    } catch {}
    setSaving(false);
    setDone(true);
    clearCart();
  };

  if (cart.length === 0 && !done) return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <ShoppingCart size={48} className="mx-auto text-gray-300" />
      <h1 className="text-2xl font-black mt-4">{t("cart")} — 0</h1>
      <Link href="/" className="mt-4 inline-block bg-[#0058A3] text-white font-bold px-6 py-3 rounded-full text-sm">{t("continueShopping")}</Link>
    </div>
  );

  if (done) return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <CheckCircle2 size={64} className="mx-auto text-green-600" />
      <h1 className="text-3xl font-black mt-4">{t("orderSuccess")}</h1>
      <p className="text-gray-500 mt-2">Order confirmed • {formatIQD(grand)}</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2"><MessageCircle size={18} /> {t("buyWhatsApp")}</a>
        <Link href="/" className="border font-bold px-6 py-3 rounded-full">{t("continueShopping")}</Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-black">{t("checkout")}</h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-8 mt-6 items-start">
        <form onSubmit={submit} className="bg-white border rounded-2xl p-6 space-y-4">
          <h2 className="font-black">{lang === "ar" ? "بيانات التوصيل" : lang === "ku" ? "زانیاری گەیاندن" : "Delivery details"}</h2>
          <div>
            <label className="text-sm font-bold">{t("name")} *</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" placeholder="e.g. Ahmed Mohammed" />
          </div>
          <div>
            <label className="text-sm font-bold">{t("phone")} *</label>
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" placeholder="07xx xxx xxxx" />
          </div>
          <div>
            <label className="text-sm font-bold">{t("address")} *</label>
            <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0058A3]" placeholder="Street, area, building" />
          </div>
          <div>
            <label className="text-sm font-bold">{t("governorate")} *</label>
            <select value={form.governorate} onChange={(e) => setForm({ ...form, governorate: e.target.value })} className="mt-1 w-full border rounded-xl px-4 py-3 text-sm bg-white">
              {GOVS.map((g) => <option key={g}>{g}</option>)}
            </select>
          </div>
          <button disabled={saving} className="w-full bg-[#0058A3] text-white font-black py-3.5 rounded-full disabled:opacity-60">{saving ? "Saving…" : t("placeOrder")}</button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white font-black py-3.5 rounded-full flex items-center justify-center gap-2"><MessageCircle size={18} /> {t("buyWhatsApp")}</a>
        </form>

        <aside className="bg-white border rounded-2xl p-6">
          <h2 className="font-black mb-4">{t("cart")}</h2>
          <ul className="space-y-3 text-sm">
            {cart.map((i) => (
              <li key={i.product.slug} className="flex gap-3 items-center">
                <img src={i.product.image} alt="" className="w-14 h-14 rounded-lg object-cover" />
                <div className="flex-1 min-w-0"><p className="font-semibold truncate">{i.product.nameEn}</p><p className="text-gray-500 text-xs">x{i.qty}</p></div>
                <span className="font-bold">{formatIQD(i.product.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="border-t mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt>{t("subtotal")}</dt><dd className="font-bold">{formatIQD(cartTotal)}</dd></div>
            <div className="flex justify-between"><dt>{t("delivery")}</dt><dd className="font-bold">{delivery === 0 ? "FREE" : formatIQD(delivery)}</dd></div>
            <div className="flex justify-between text-base"><dt className="font-black">{t("total")}</dt><dd className="font-black text-[#0058A3]">{formatIQD(grand)}</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
