"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar" | "ku";

const dict: Record<Lang, Record<string, string>> = {
  en: {
    home: "Home", shop: "Shop", offers: "Offers", rooms: "Room Inspiration", about: "About Us", contact: "Contact Us", store: "Store Location",
    search: "Search products...", cart: "Cart", wishlist: "Wishlist", addToCart: "Add to cart", buyWhatsApp: "Order via WhatsApp",
    freeDelivery: "Free delivery in Baghdad on orders over 500,000 IQD", newArrivals: "New Arrivals", bestsellers: "Bestsellers", shopByRoom: "Shop by Room",
    viewAll: "View all", filters: "Filters", sortBy: "Sort by", price: "Price", availability: "Availability", inStock: "In stock", outOfStock: "Out of stock",
    checkout: "Checkout", subtotal: "Subtotal", delivery: "Delivery", total: "Total", continueShopping: "Continue shopping",
    heroTitle: "Scandinavian comfort for Iraqi homes", heroSub: "Discover sofas, beds, dining and office furniture designed for modern Baghdad living. Free delivery & assembly in Baghdad.",
    shopNow: "Shop now", exploreRooms: "Explore rooms", whyUs: "Why shop with IKEA Baghdad?", deliveryTitle: "Fast delivery", deliveryDesc: "Same-day delivery in Baghdad, 2–3 days to all governorates.",
    assemblyTitle: "Free assembly", assemblyDesc: "Professional assembly included on all large furniture.",
    warrantyTitle: "10-year warranty", warrantyDesc: "Quality guaranteed on frames and mechanisms.",
    paymentTitle: "Cash on delivery", paymentDesc: "Pay in IQD cash or card on delivery. WhatsApp ordering available.",
    newsletter: "Get offers & new arrivals", subscribe: "Subscribe", email: "Email address",
    disclaimer: "IKEA Baghdad is an independent concept store inspired by Scandinavian design. Not affiliated with or endorsed by IKEA Systems B.V.",
    allRights: "All rights reserved.", poweredBy: "Made for Iraq • Baghdad",
    language: "Language", currency: "IQD (Iraqi Dinar)", results: "results", noResults: "No products found. Try another search.",
    dimensions: "Dimensions", materials: "Materials & care", description: "Description", related: "You may also like", qty: "Quantity",
    specs: "Specifications", article: "Article no.", colors: "Colours", reviews: "reviews", rating: "Rating",
    name: "Full name", phone: "Phone (WhatsApp)", address: "Address", governorate: "Governorate", placeOrder: "Place order via WhatsApp",
    orderSuccess: "Order saved! We will contact you on WhatsApp shortly.", message: "Message", subject: "Subject", send: "Send message",
    contactSuccess: "Message sent! We will reply within 24 hours.", openingHours: "Opening hours", satThu: "Sat–Thu: 10:00 AM – 10:00 PM", fri: "Friday: 3:00 PM – 10:00 PM",
    visitStore: "Visit our showroom", addressLine: "Al Rabee Street, Baghdad, Iraq",
    clearFilters: "Clear filters", minPrice: "Min", maxPrice: "Max", apply: "Apply", under: "Under 250k", mid: "250k – 750k", high: "750k – 1.5M", premium: "Over 1.5M",
    menu: "Menu", close: "Close", homeAccessories: "Home Accessories",
    callUs: "Call us", whatsappSupport: "WhatsApp Support", followUs: "Follow us on Instagram", storeAddress: "Store address", getDirections: "Get directions",
  },
  ar: {
    home: "الرئيسية", shop: "تسوق", offers: "العروض", rooms: "إلهام الغرف", about: "من نحن", contact: "اتصل بنا", store: "موقع المتجر",
    search: "ابحث عن منتجات...", cart: "السلة", wishlist: "المفضلة", addToCart: "أضف إلى السلة", buyWhatsApp: "اطلب عبر واتساب",
    freeDelivery: "توصيل مجاني في بغداد للطلبات فوق 500,000 دينار", newArrivals: "وصل حديثاً", bestsellers: "الأكثر مبيعاً", shopByRoom: "تسوق حسب الغرفة",
    viewAll: "عرض الكل", filters: "الفلاتر", sortBy: "ترتيب حسب", price: "السعر", availability: "التوفر", inStock: "متوفر", outOfStock: "غير متوفر",
    checkout: "إتمام الشراء", subtotal: "المجموع الفرعي", delivery: "التوصيل", total: "الإجمالي", continueShopping: "متابعة التسوق",
    heroTitle: "راحة اسكندنافية للمنازل العراقية", heroSub: "اكتشف كنب وأسرة وطاولات وأثاث مكتب مصمم للحياة العصرية في بغداد. توصيل وتركيب مجاني في بغداد.",
    shopNow: "تسوق الآن", exploreRooms: "استكشف الغرف", whyUs: "لماذا تتسوق معنا؟", deliveryTitle: "توصيل سريع", deliveryDesc: "توصيل في نفس اليوم في بغداد، و2-3 أيام لباقي المحافظات.",
    assemblyTitle: "تركيب مجاني", assemblyDesc: "تركيب احترافي مشمول مع جميع الأثاث الكبير.",
    warrantyTitle: "ضمان 10 سنوات", warrantyDesc: "جودة مضمونة على الهياكل والآليات.",
    paymentTitle: "الدفع عند الاستلام", paymentDesc: "ادفع نقداً بالدينار أو بالبطاقة عند الاستلام. الطلب عبر واتساب متاح.",
    newsletter: "احصل على العروض والوصل حديثاً", subscribe: "اشترك", email: "البريد الإلكتروني",
    disclaimer: "IKEA Baghdad متجر مستقل مستوحى من التصميم الاسكندنافي. غير تابع أو مدعوم من IKEA Systems B.V.",
    allRights: "جميع الحقوق محفوظة.", poweredBy: "صُنع للعراق • بغداد",
    language: "اللغة", currency: "دينار عراقي", results: "نتيجة", noResults: "لا توجد منتجات. جرب بحثاً آخر.",
    dimensions: "الأبعاد", materials: "المواد والعناية", description: "الوصف", related: "قد يعجبك أيضاً", qty: "الكمية",
    specs: "المواصفات", article: "رقم المقال", colors: "الألوان", reviews: "تقييم", rating: "التقييم",
    name: "الاسم الكامل", phone: "الهاتف (واتساب)", address: "العنوان", governorate: "المحافظة", placeOrder: "اطلب عبر واتساب",
    orderSuccess: "تم حفظ الطلب! سنتصل بك قريباً عبر واتساب.", message: "الرسالة", subject: "الموضوع", send: "إرسال الرسالة",
    contactSuccess: "تم إرسال الرسالة! سنرد خلال 24 ساعة.", openingHours: "ساعات العمل", satThu: "السبت–الخميس: 10 صباحاً – 10 مساءً", fri: "الجمعة: 3 عصراً – 10 مساءً",
    visitStore: "زر معرضنا", addressLine: "شارع الربيع، بغداد، العراق",
    clearFilters: "مسح الفلاتر", minPrice: "الأدنى", maxPrice: "الأقصى", apply: "تطبيق", under: "أقل من 250 ألف", mid: "250–750 ألف", high: "750 ألف – 1.5 مليون", premium: "أكثر من 1.5 مليون",
    menu: "القائمة", close: "إغلاق", homeAccessories: "إكسسوارات المنزل",
    callUs: "اتصل بنا", whatsappSupport: "دعم واتساب", followUs: "تابعنا على إنستغرام", storeAddress: "عنوان المتجر", getDirections: "الاتجاهات",
  },
  ku: {
    home: "ماڵپەڕ", shop: "بازاڕ", offers: "پێشنیارەکان", rooms: "ئیلھامی ژوور", about: "دەربارەی ئێمە", contact: "پەیوەندی", store: "شوێنی دوکان",
    search: "گەڕان بۆ بەرهەم...", cart: "سەبەتە", wishlist: "دڵخوازەکان", addToCart: "زیاد بکە بۆ سەبەتە", buyWhatsApp: "داوا بکە لە ڕێگەی WhatsApp",
    freeDelivery: "گەیاندنی بێبەرامبەر لە بەغدا بۆ داواکاری زیاتر لە 500,000 دینار", newArrivals: "نوێ هاتووە", bestsellers: "زۆرترین فرۆش", shopByRoom: "بازاڕ بەپێی ژوور",
    viewAll: "بینینی هەموو", filters: "فلتەرەکان", sortBy: "ڕیزبەندی", price: "نرخ", availability: "بەردەستبوون", inStock: "بەردەستە", outOfStock: "بەردەست نییە",
    checkout: "کۆتایی هێنان", subtotal: "کۆی گشتی", delivery: "گەیاندن", total: "کۆ", continueShopping: "بەردەوام بە لە بازاڕ",
    heroTitle: "ئارامی سکاندینافی بۆ ماڵە عێراقییەکان", heroSub: "سۆفا و جێگا و مێز و مێبلی ئۆفیس بدۆزەرەوە کە بۆ ژیانی مۆدێرنی بەغدا دیزاین کراوە. گەیاندن و دانانی بێبەرامبەر لە بەغدا.",
    shopNow: "ئێستا بازاڕ بکە", exploreRooms: "ژوورەکان ببینە", whyUs: "بۆچی لەگەڵ ئێمە بازاڕ دەکەیت؟", deliveryTitle: "گەیاندنی خێرا", deliveryDesc: "هەمان ڕۆژ لە بەغدا، 2-3 ڕۆژ بۆ هەموو پارێزگاکان.",
    assemblyTitle: "دانانی بێبەرامبەر", assemblyDesc: "دانانی پیشەیی لەگەڵ هەموو مێبلی گەورەدا.",
    warrantyTitle: "گرەنتی 10 ساڵ", warrantyDesc: "کوالێتی گەرەنتی لەسەر چوارچێوە و میکانیزمەکان.",
    paymentTitle: "پارەدان لە کاتی گەیاندن", paymentDesc: "بە دینار یان کارت لە کاتی گەیاندن پارە بدە. داواکردن لە ڕێگەی WhatsApp بەردەستە.",
    newsletter: "پێشنیار و نوێیەکان وەرگرە", subscribe: "بەشدار بە", email: "ئیمەیڵ",
    disclaimer: "IKEA Baghdad دوکانێکی سەربەخۆیە بە ئیلھام لە دیزاینی سکاندینافی. پەیوەندی بە IKEA Systems B.V نییە.",
    allRights: "هەموو مافەکان پارێزراون.", poweredBy: "بۆ عێراق دروست کراوە • بەغدا",
    language: "زمان", currency: "دیناری عێراقی", results: "ئەنجام", noResults: "هیچ بەرهەمێک نەدۆزرایەوە. گەڕانێکی تر تاقی بکەرەوە.",
    dimensions: "پێوانەکان", materials: "ماددە و چاودێری", description: "وەسف", related: "لەوانەیە بە دڵت بێت", qty: "ژمارە",
    specs: "تایبەتمەندییەکان", article: "ژمارەی بەرهەم", colors: "ڕەنگەکان", reviews: "هەڵسەنگاندن", rating: "هەڵسەنگاندن",
    name: "ناوی تەواو", phone: "تەلەفۆن (WhatsApp)", address: "ناونیشان", governorate: "پارێزگا", placeOrder: "داوا بکە لە ڕێگەی WhatsApp",
    orderSuccess: "داواکاری پاشەکەوت کرا! بەم زووانە لە ڕێگەی WhatsApp پەیوەندیت پێوە دەکەین.", message: "پەیام", subject: "بابەت", send: "ناردنی پەیام",
    contactSuccess: "پەیام نێردرا! لە ماوەی 24 کاتژمێردا وەڵام دەدەینەوە.", openingHours: "کاتژمێرەکانی کار", satThu: "شەممە–پێنجشەممە: 10 بەیانی – 10 شەو", fri: "هەینی: 3 پاشنیوەڕۆ – 10 شەو",
    visitStore: "سەردانی ناوەندەکەمان بکە", addressLine: "شەقامی ئەلڕەبیع، بەغدا، عێراق",
    clearFilters: "سڕینەوەی فلتەرەکان", minPrice: "کەمترین", maxPrice: "زۆرترین", apply: "جێبەجێ بکە", under: "کەمتر لە 250 هەزار", mid: "250–750 هەزار", high: "750 هەزار – 1.5 ملیۆن", premium: "زیاتر لە 1.5 ملیۆن",
    menu: "مێنیو", close: "داخستن", homeAccessories: "ئەکسسواری ماڵ",
    callUs: "پەیوەندی بکە", whatsappSupport: "پاڵپشتی WhatsApp", followUs: "لە ئینستاگرام شوێنمان بکەوە", storeAddress: "ناونیشانی دوکان", getDirections: "ئاراستە",
  },
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: string }>({
  lang: "en", setLang: () => {}, t: (k) => k, dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("ib-lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("ib-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  }, [lang]);
  const t = (k: string) => dict[lang][k] || dict.en[k] || k;
  return <LangCtx.Provider value={{ lang, setLang, t, dir: lang === "en" ? "ltr" : "rtl" }}>{children}</LangCtx.Provider>;
}

export function useLang() { return useContext(LangCtx); }
