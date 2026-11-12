"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search, Truck, Wrench, ShieldCheck, CreditCard, ChevronRight, Sparkles, Tag, Sofa } from "lucide-react";
import { CATEGORIES, PRODUCTS, ROOMS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";

export default function HomePage() {
  const { lang, t } = useLang();
  const [q, setQ] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const catName = (c: typeof CATEGORIES[0]) => lang === "ar" ? c.nameAr : lang === "ku" ? c.nameKu : c.nameEn;
  const newArrivals = PRODUCTS.filter((p) => p.badge === "new" || p.badge === "limited").slice(0, 4);
  const bestsellers = PRODUCTS.filter((p) => p.badge === "bestseller").slice(0, 4);
  const offers = PRODUCTS.filter((p) => p.oldPrice).slice(0, 4);
  const heroImg = "https://images.pexels.com/photos/7587779/pexels-photo-7587779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end lg:items-center overflow-hidden">
        <img src={heroImg} alt="Scandinavian living room" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/20 lg:to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28 w-full">
          <div className="max-w-2xl text-white fade-up">
            <span className="inline-flex items-center gap-2 bg-[#FFDB00] text-black text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide"><Sparkles size={14} /> {lang === "ar" ? "جديد في بغداد" : lang === "ku" ? "نوێ لە بەغدا" : "New in Baghdad"} • IQD</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">{t("heroTitle")}</h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">{t("heroSub")}</p>
            <form action="/search" method="get" className="mt-6 flex bg-white rounded-full overflow-hidden shadow-2xl max-w-lg">
              <input name="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search")} className="flex-1 px-5 py-3.5 text-sm text-gray-900 outline-none" />
              <button className="bg-[#0058A3] text-white px-5 sm:px-7 font-bold text-sm flex items-center gap-2"><Search size={18} /> <span className="hidden sm:inline">{lang === "ar" ? "بحث" : lang === "ku" ? "گەڕان" : "Search"}</span></button>
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/category/sofas-armchairs" className="bg-[#FFDB00] text-black font-black px-7 py-3.5 rounded-full flex items-center gap-2 hover:bg-yellow-300">{t("shopNow")} <ArrowRight size={18} className="rtl:rotate-180" /></Link>
              <Link href="/rooms" className="bg-white/15 backdrop-blur border border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/25">{t("exploreRooms")}</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-white/90">
              <span className="flex items-center gap-1.5"><Truck size={16} /> {t("deliveryTitle")}</span>
              <span className="flex items-center gap-1.5"><Wrench size={16} /> {t("assemblyTitle")}</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> {t("warrantyTitle")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">{t("shopByRoom")}</h2>
            <p className="text-sm text-gray-500 mt-1">8 {lang === "ar" ? "أقسام" : lang === "ku" ? "بەش" : "departments"} • {PRODUCTS.length}+ {lang === "ar" ? "منتج" : lang === "ku" ? "بەرهەم" : "products"}</p>
          </div>
          <Link href="/search" className="text-sm font-bold text-[#0058A3] flex items-center gap-1">{t("viewAll")} <ChevronRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src={c.image} alt={catName(c)} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <p className="font-black leading-tight">{catName(c)}</p>
                <p className="text-xs text-white/80 mt-0.5">{lang === "ar" ? c.taglineAr : c.taglineEn}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OFFERS BANNER */}
      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div className="bg-[#0058A3] rounded-3xl p-6 sm:p-10 text-white flex flex-col lg:flex-row items-start lg:items-center gap-6 overflow-hidden relative">
          <div className="absolute -end-10 -top-10 w-48 h-48 bg-[#FFDB00]/20 rounded-full blur-2xl" />
          <div className="flex-1 relative">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full"><Tag size={13} /> {t("offers")} • -30%</span>
            <h3 className="text-2xl sm:text-3xl font-black mt-3">{lang === "ar" ? "تخفيضات الموسم حتى 30% على الكنب والتخزين" : lang === "ku" ? "داشکاندنی وەرز تا 30% لەسەر سۆفا و هەڵگرتن" : "Season Sale up to 30% off sofas & storage"}</h3>
            <p className="text-white/85 text-sm mt-2">{lang === "ar" ? "لفترة محدودة. توصيل مجاني في بغداد فوق 500,000 دينار + تركيب مجاني." : lang === "ku" ? "بۆ ماوەیەکی سنووردار. گەیاندنی بێبەرامبەر لە بەغدا زیاتر لە 500,000 دینار + دانانی بێبەرامبەر." : "Limited time. Free Baghdad delivery over 500,000 IQD + free assembly."}</p>
          </div>
          <Link href="/offers" className="relative bg-[#FFDB00] text-black font-black px-7 py-3.5 rounded-full whitespace-nowrap">{t("viewAll")}</Link>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2"><Sparkles className="text-[#0058A3]" /> {t("newArrivals")}</h2>
          <Link href="/search?badge=new" className="text-sm font-bold text-[#0058A3]">{t("viewAll")}</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2"><Sofa className="text-[#0058A3]" /> {t("bestsellers")}</h2>
            <Link href="/search" className="text-sm font-bold text-[#0058A3]">{t("viewAll")}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{bestsellers.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      {/* OFFERS GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-2"><Tag className="text-red-600" /> {t("offers")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{offers.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      {/* ROOM INSPIRATION */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">{t("rooms")}</h2>
            <p className="text-sm text-gray-500 mt-1">{lang === "ar" ? "أفكار تصميم داخلي للمنازل العراقية" : lang === "ku" ? "بیرۆکەی دیزاینی ناوەوە بۆ ماڵە عێراقییەکان" : "Interior design ideas for Iraqi homes"}</p>
          </div>
          <Link href="/rooms" className="text-sm font-bold text-[#0058A3]">{t("viewAll")}</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROOMS.map((r, i) => (
            <Link key={i} href={`/category/${r.category}`} className="group rounded-2xl overflow-hidden bg-white border">
              <div className="aspect-[4/3] overflow-hidden"><img src={r.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" /></div>
              <div className="p-4">
                <h3 className="font-bold leading-snug">{lang === "ar" ? r.titleAr : lang === "ku" ? r.titleKu : r.titleEn}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{lang === "ar" ? r.descAr : lang === "ku" ? r.descKu : r.descEn}</p>
                <span className="text-xs font-bold text-[#0058A3] mt-2 inline-flex items-center gap-1">{t("shopNow")} <ArrowRight size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#0058A3] text-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">{t("whyUs")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Truck, title: t("deliveryTitle"), desc: t("deliveryDesc") },
              { icon: Wrench, title: t("assemblyTitle"), desc: t("assemblyDesc") },
              { icon: ShieldCheck, title: t("warrantyTitle"), desc: t("warrantyDesc") },
              { icon: CreditCard, title: t("paymentTitle"), desc: t("paymentDesc") },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center">
                <div className="w-12 h-12 mx-auto bg-[#FFDB00] text-black rounded-full grid place-items-center"><f.icon size={22} /></div>
                <h3 className="font-black mt-3">{f.title}</h3>
                <p className="text-sm text-white/85 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="bg-[#FFF7CC] border border-yellow-200 rounded-3xl p-6 sm:p-10 text-center">
          <h3 className="text-2xl font-black">{t("newsletter")}</h3>
          <p className="text-sm text-gray-600 mt-2">Baghdad • Erbil • Basra • Mosul — {lang === "ar" ? "اشترك واحصل على خصم 5% على أول طلب" : lang === "ku" ? "بەشدار بە و 5% داشکاندن لە یەکەم داواکاری وەرگرە" : "Subscribe and get 5% off your first order"}</p>
          {subscribed ? (
            <p className="mt-5 inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-full text-sm">✓ {lang === "ar" ? "تم الاشتراك! تحقق من بريدك" : lang === "ku" ? "بەشداریت کرد! ئیمەیڵەکەت بپشکنە" : "Subscribed! Check your email for 5% code."}</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-5 flex max-w-md mx-auto bg-white rounded-full overflow-hidden border shadow-sm">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("email")} className="flex-1 px-5 py-3 text-sm outline-none" />
              <button className="bg-[#0058A3] text-white font-bold px-6 text-sm">{t("subscribe")}</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
