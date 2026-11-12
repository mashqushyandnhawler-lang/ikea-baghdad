"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown, MapPin, Phone, Globe, Truck, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { CATEGORIES, INSTAGRAM_URL, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/data";
import { useLang, Lang } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const { cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [q, setQ] = useState("");

  const catName = (c: typeof CATEGORIES[0]) => lang === "ar" ? c.nameAr : lang === "ku" ? c.nameKu : c.nameEn;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_#e5e7eb]">
      {/* Top bar */}
      <div className="bg-[#0058A3] text-white text-[12px] sm:text-[13px]">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 truncate"><Truck size={14} /> {t("freeDelivery")}</p>
          <div className="hidden md:flex items-center gap-4">
            <a href={PHONE_TEL} className="flex items-center gap-1 hover:underline font-semibold"><Phone size={13} /> {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline"><MessageCircle size={13} /> WhatsApp</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram @swedenekia" className="flex items-center gap-1 hover:underline"><InstagramIcon size={14} /> @swedenekia</a>
            <span className="flex items-center gap-1"><MapPin size={13} /> {t("addressLine")}</span>
          </div>
          <div className="flex items-center gap-1 bg-white/15 rounded-full p-0.5">
            {(["en", "ar", "ku"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${lang === l ? "bg-[#FFDB00] text-black" : "text-white"}`}>
                {l === "en" ? "EN" : l === "ar" ? "عربي" : "کوردی"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3 sm:gap-5">
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(true)} aria-label={t("menu")}><Menu size={24} /></button>
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="bg-[#0058A3] text-white font-black text-lg sm:text-2xl px-3 py-1.5 rounded tracking-tight">IKEA <span className="text-[#FFDB00]">BAGHDAD</span></span>
          <span className="hidden sm:block text-[10px] leading-tight text-gray-500 font-semibold">Scandinavian<br />Furniture • Iraq</span>
        </Link>

        <form action="/search" method="get" className="hidden md:flex flex-1 max-w-xl mx-auto">
          <div className="flex w-full border-2 border-[#0058A3] rounded-full overflow-hidden">
            <input name="q" defaultValue={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search")} className="flex-1 px-4 py-2.5 text-sm outline-none" />
            <button className="bg-[#0058A3] text-white px-5 flex items-center gap-2 text-sm font-semibold"><Search size={18} /> {lang === "ar" ? "بحث" : lang === "ku" ? "گەڕان" : "Search"}</button>
          </div>
        </form>

        <nav className="ms-auto flex items-center gap-1 sm:gap-2">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram @swedenekia" className="p-2.5 rounded-full hover:bg-gray-100 text-gray-700 hover:text-pink-600"><InstagramIcon size={22} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-full hover:bg-gray-100 text-[#25D366]"><MessageCircle size={22} /></a>
          <a href={PHONE_TEL} aria-label={t("callUs")} className="p-2.5 rounded-full hover:bg-gray-100 text-[#0058A3]"><Phone size={22} /></a>
          <Link href="/wishlist" className="relative p-2.5 rounded-full hover:bg-gray-100" aria-label={t("wishlist")}>
            <Heart size={22} />
            {wishlist.length > 0 && <span className="absolute -top-0.5 -end-0.5 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">{wishlist.length}</span>}
          </Link>
          <Link href="/cart" className="relative p-2.5 rounded-full hover:bg-gray-100" aria-label={t("cart")}>
            <ShoppingCart size={22} />
            {cartCount > 0 && <span className="absolute -top-0.5 -end-0.5 bg-[#0058A3] text-white text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">{cartCount}</span>}
          </Link>
          <Link href="/store" className="hidden lg:flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-full hover:bg-gray-100"><MapPin size={17} /> {t("store")}</Link>
        </nav>
      </div>

      {/* Desktop nav with mega menu */}
      <nav className="hidden lg:block border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-1 relative">
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className="flex items-center gap-1 px-4 py-3 text-sm font-bold text-[#0058A3]">{t("shop")} <ChevronDown size={16} /></button>
            {megaOpen && (
              <div className="absolute start-0 top-full w-[720px] bg-white shadow-2xl border rounded-b-2xl p-6 grid grid-cols-4 gap-4 z-50">
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/category/${c.slug}`} className="group">
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100"><img src={c.image} alt={catName(c)} className="w-full h-full object-cover group-hover:scale-105 transition" /></div>
                    <p className="mt-2 text-sm font-bold group-hover:text-[#0058A3]">{catName(c)}</p>
                    <p className="text-xs text-gray-500">{lang === "ar" ? c.taglineAr : c.taglineEn}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {CATEGORIES.slice(0, 5).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="px-3 py-3 text-sm font-medium hover:text-[#0058A3] whitespace-nowrap">{catName(c)}</Link>
          ))}
          <Link href="/offers" className="px-3 py-3 text-sm font-bold text-red-600 whitespace-nowrap">{t("offers")}</Link>
          <Link href="/rooms" className="px-3 py-3 text-sm font-medium hover:text-[#0058A3] whitespace-nowrap">{t("rooms")}</Link>
          <Link href="/about" className="px-3 py-3 text-sm font-medium hover:text-[#0058A3] whitespace-nowrap">{t("about")}</Link>
          <Link href="/contact" className="px-3 py-3 text-sm font-medium hover:text-[#0058A3] whitespace-nowrap">{t("contact")}</Link>
        </div>
      </nav>

      {/* Mobile search */}
      <form action="/search" method="get" className="md:hidden px-4 pb-3">
        <div className="flex border-2 border-[#0058A3] rounded-full overflow-hidden">
          <input name="q" placeholder={t("search")} className="flex-1 px-4 py-2 text-sm outline-none" />
          <button className="bg-[#0058A3] text-white px-4"><Search size={18} /></button>
        </div>
      </form>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setMobileOpen(false)}>
          <div className="bg-white w-[85%] max-w-sm h-full overflow-y-auto p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#0058A3] text-white font-black px-3 py-1.5 rounded">IKEA <span className="text-[#FFDB00]">BAGHDAD</span></span>
              <button onClick={() => setMobileOpen(false)} className="p-2"><X size={24} /></button>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 mb-4">
              <Globe size={16} className="ms-2" />
              {(["en", "ar", "ku"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`flex-1 py-1.5 rounded-full text-xs font-bold ${lang === l ? "bg-[#0058A3] text-white" : ""}`}>{l === "en" ? "English" : l === "ar" ? "العربية" : "کوردی"}</button>
              ))}
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">{t("shop")}</p>
            <div className="space-y-1 mb-5">
              {CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <img src={c.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  <span className="text-sm font-semibold">{catName(c)}</span>
                </Link>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <a href={PHONE_TEL} className="flex items-center gap-2 py-2 font-bold text-[#0058A3]"><Phone size={18} /> {PHONE_DISPLAY}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 font-bold text-[#128C4B]"><MessageCircle size={18} /> WhatsApp</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 font-bold text-pink-600"><InstagramIcon size={18} /> Instagram @swedenekia</a>
              <p className="flex items-start gap-2 py-2 text-sm text-gray-600"><MapPin size={18} className="shrink-0 mt-0.5" /> {t("addressLine")}</p>
              <Link href="/offers" onClick={() => setMobileOpen(false)} className="block py-2 font-bold text-red-600">{t("offers")}</Link>
              <Link href="/rooms" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold">{t("rooms")}</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold">{t("about")}</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold">{t("contact")}</Link>
              <Link href="/store" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold">{t("store")}</Link>
              <Link href="/cart" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold">{t("cart")} ({cartCount})</Link>
              <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold">{t("wishlist")} ({wishlist.length})</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
