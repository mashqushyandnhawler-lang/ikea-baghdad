export type Category = {
  slug: string;
  nameEn: string;
  nameAr: string;
  nameKu: string;
  image: string;
  taglineEn: string;
  taglineAr: string;
};

export type Product = {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  nameKu: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  descEn: string;
  descAr: string;
  materials: string;
  dimensions: string;
  colors: string[];
  badge?: "new" | "offer" | "bestseller" | "limited";
  stock: number;
  articleNo: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "sofas-armchairs",
    nameEn: "Sofas & Armchairs",
    nameAr: "كنب وكراسي بذراعين",
    nameKu: "سۆفا و کورسی دەستک",
    image: "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    taglineEn: "Comfort for every living room",
    taglineAr: "راحة لكل غرفة معيشة",
  },
  {
    slug: "living-room",
    nameEn: "Living Room",
    nameAr: "غرفة المعيشة",
    nameKu: "ژووری دانیشتن",
    image: "https://images.pexels.com/photos/7587779/pexels-photo-7587779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    taglineEn: "TV units, tables & storage",
    taglineAr: "وحدات تلفاز وطاولات وتخزين",
  },
  {
    slug: "bedroom",
    nameEn: "Bedroom",
    nameAr: "غرفة النوم",
    nameKu: "ژووری نوستن",
    image: "https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    taglineEn: "Beds, wardrobes & nightstands",
    taglineAr: "أسرة وخزائن وكومودينو",
  },
  {
    slug: "dining-room",
    nameEn: "Dining Room",
    nameAr: "غرفة الطعام",
    nameKu: "ژووری خواردن",
    image: "https://images.pexels.com/photos/7046002/pexels-photo-7046002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    taglineEn: "Tables & chairs for gatherings",
    taglineAr: "طاولات وكراسي للعائلة",
  },
  {
    slug: "kitchen",
    nameEn: "Kitchen",
    nameAr: "المطبخ",
    nameKu: "چێشتخانە",
    image: "https://images.pexels.com/photos/8569470/pexels-photo-8569470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    taglineEn: "Cabinets, storage & dining",
    taglineAr: "خزائن وتخزين وطاولات",
  },
  {
    slug: "office",
    nameEn: "Office Furniture",
    nameAr: "أثاث المكتب",
    nameKu: "مێبلی ئۆفیس",
    image: "https://images.pexels.com/photos/7652541/pexels-photo-7652541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    taglineEn: "Desks, chairs & shelves",
    taglineAr: "مكاتب وكراسي ورفوف",
  },
  {
    slug: "garden",
    nameEn: "Garden Furniture",
    nameAr: "أثاث الحديقة",
    nameKu: "مێبلی باخچە",
    image: "https://images.pexels.com/photos/34005890/pexels-photo-34005890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    taglineEn: "Outdoor sofas & parasols",
    taglineAr: "كنب خارجي ومظلات",
  },
  {
    slug: "accessories",
    nameEn: "Home Accessories",
    nameAr: "إكسسوارات المنزل",
    nameKu: "ئەکسسواری ماڵ",
    image: "https://images.pexels.com/photos/6805422/pexels-photo-6805422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    taglineEn: "Lamps, vases & textiles",
    taglineAr: "مصابيح ومزهريات ومنسوجات",
  },
];

const IMG = {
  sofa1: "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sofa2: "https://images.pexels.com/photos/7587779/pexels-photo-7587779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sofa3: "https://images.pexels.com/photos/7195585/pexels-photo-7195585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  sofa4: "https://images.pexels.com/photos/6480202/pexels-photo-6480202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  sofa5: "https://images.pexels.com/photos/5825537/pexels-photo-5825537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  living1: "https://images.pexels.com/photos/7614608/pexels-photo-7614608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  living2: "https://images.pexels.com/photos/6890405/pexels-photo-6890405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  living3: "https://images.pexels.com/photos/6480211/pexels-photo-6480211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  bed1: "https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bed2: "https://images.pexels.com/photos/17994859/pexels-photo-17994859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bed3: "https://images.pexels.com/photos/8089074/pexels-photo-8089074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bed4: "https://images.pexels.com/photos/6920442/pexels-photo-6920442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  dining1: "https://images.pexels.com/photos/7046002/pexels-photo-7046002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  dining2: "https://images.pexels.com/photos/3229076/pexels-photo-3229076.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  dining3: "https://images.pexels.com/photos/8113029/pexels-photo-8113029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchen1: "https://images.pexels.com/photos/8569470/pexels-photo-8569470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchen2: "https://images.pexels.com/photos/7533852/pexels-photo-7533852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchen3: "https://images.pexels.com/photos/7846117/pexels-photo-7846117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  office1: "https://images.pexels.com/photos/7652541/pexels-photo-7652541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  office2: "https://images.pexels.com/photos/7046161/pexels-photo-7046161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  office3: "https://images.pexels.com/photos/8092466/pexels-photo-8092466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  garden1: "https://images.pexels.com/photos/34005890/pexels-photo-34005890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  garden2: "https://images.pexels.com/photos/36933445/pexels-photo-36933445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  garden3: "https://images.pexels.com/photos/36933433/pexels-photo-36933433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  acc1: "https://images.pexels.com/photos/6805422/pexels-photo-6805422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  acc2: "https://images.pexels.com/photos/6707631/pexels-photo-6707631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  acc3: "https://images.pexels.com/photos/5793642/pexels-photo-5793642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  acc4: "https://images.pexels.com/photos/7119223/pexels-photo-7119223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const PRODUCTS: Product[] = [
  { id: "p1", slug: "norrby-3-seat-sofa", nameEn: "NORRBY 3-seat sofa", nameAr: "كنبة نوربي 3 مقاعد", nameKu: "سۆفای نۆربی ٣ کەسی", category: "sofas-armchairs", price: 1245000, oldPrice: 1499000, rating: 5, reviews: 128, image: IMG.sofa1, gallery: [IMG.sofa1, IMG.sofa2, IMG.sofa3], descEn: "A deep, comfortable 3-seat sofa with removable covers in light grey fabric. Perfect for family living rooms in Baghdad homes. Solid wood frame, high-resilience foam.", descAr: "كنبة مريحة بعمق 3 مقاعد بأغطية قابلة للإزالة بلون رمادي فاتح. مثالية لغرف المعيشة العائلية. هيكل خشب صلب وإسفنج عالي المرونة.", materials: "Frame: solid pine. Fabric: polyester blend. Legs: beech.", dimensions: "W 220 × D 95 × H 85 cm", colors: ["Light grey", "Beige", "Dark grey"], badge: "bestseller", stock: 14, articleNo: "IB-1001" },
  { id: "p2", slug: "strandmon-armchair", nameEn: "STRANDMON armchair", nameAr: "كرسي ستراندمن بذراعين", nameKu: "کورسی ستراندمن", category: "sofas-armchairs", price: 485000, rating: 4, reviews: 86, image: IMG.sofa5, gallery: [IMG.sofa5, IMG.sofa4, IMG.sofa3], descEn: "Classic wing armchair with soft cushions and wooden legs. A reading corner favourite.", descAr: "كرسي كلاسيكي بمساند جانبية ووسائد ناعمة وأرجل خشبية. مثالي لركن القراءة.", materials: "Fabric: cotton/polyester. Legs: solid oak.", dimensions: "W 82 × D 85 × H 101 cm", colors: ["Blue", "Mustard", "Cream"], stock: 22, articleNo: "IB-1002" },
  { id: "p3", slug: "klippan-2-seat-sofa", nameEn: "KLIPPAN 2-seat sofa", nameAr: "كنبة كليبان مقعدين", nameKu: "سۆفای کلیپان ٢ کەسی", category: "sofas-armchairs", price: 895000, oldPrice: 1050000, rating: 5, reviews: 64, image: IMG.sofa3, gallery: [IMG.sofa3, IMG.sofa1, IMG.sofa2], descEn: "Compact 2-seat sofa for smaller apartments. Removable washable covers.", descAr: "كنبة مدمجة بمقعدين للشقق الصغيرة. أغطية قابلة للغسل.", materials: "Frame: pine. Cover: cotton blend.", dimensions: "W 180 × D 88 × H 66 cm", colors: ["Grey", "White", "Green"], badge: "offer", stock: 9, articleNo: "IB-1003" },
  { id: "p4", slug: "soderhamn-corner-sofa", nameEn: "SÖDERHAMN corner sofa", nameAr: "كنبة زاوية سودرهامن", nameKu: "سۆفای گۆشەیی", category: "sofas-armchairs", price: 1890000, rating: 5, reviews: 42, image: IMG.sofa2, gallery: [IMG.sofa2, IMG.sofa4, IMG.sofa1], descEn: "Modular corner sofa with chaise lounge. Build your perfect layout.", descAr: "كنبة زاوية وحدات مع شيزلونج. صمم ترتيبك المثالي.", materials: "Frame: pine + plywood. Fabric: linen blend.", dimensions: "W 300 × D 180 × H 83 cm", colors: ["Light beige", "Grey"], badge: "new", stock: 6, articleNo: "IB-1004" },
  { id: "p5", slug: "lack-tv-unit", nameEn: "LACK TV unit 160cm", nameAr: "وحدة تلفاز لاك 160 سم", nameKu: "یەکەی تەلەڤزیۆن لاک", category: "living-room", price: 385000, rating: 4, reviews: 210, image: IMG.living1, gallery: [IMG.living1, IMG.living2, IMG.living3], descEn: "Low TV bench with cable management and open shelves. Scandinavian white finish.", descAr: "وحدة تلفاز منخفضة مع إدارة كابلات وأرفف مفتوحة. تشطيب أبيض اسكندنافي.", materials: "Particleboard with foil finish. Legs: metal.", dimensions: "W 160 × D 40 × H 45 cm", colors: ["White", "Oak effect"], badge: "bestseller", stock: 30, articleNo: "IB-2001" },
  { id: "p6", slug: "kallax-shelf-4x4", nameEn: "KALLAX shelf unit 4×4", nameAr: "رف كالاكس 4×4", nameKu: "ڕەفەی کالاکس", category: "living-room", price: 295000, oldPrice: 340000, rating: 5, reviews: 340, image: IMG.living2, gallery: [IMG.living2, IMG.living1, IMG.living3], descEn: "Versatile shelving for books, boxes and decor. Can stand or lie horizontally.", descAr: "رف متعدد الاستخدامات للكتب والصناديق والديكور. يمكن وضعه أفقياً أو عمودياً.", materials: "Particleboard. Back panel: fibreboard.", dimensions: "W 147 × D 39 × H 147 cm", colors: ["White", "Black-brown"], badge: "offer", stock: 45, articleNo: "IB-2002" },
  { id: "p7", slug: "melltorp-coffee-table", nameEn: "MELLTORP coffee table", nameAr: "طاولة قهوة ميلتورب", nameKu: "مێزی قاوە", category: "living-room", price: 165000, rating: 4, reviews: 98, image: IMG.living3, gallery: [IMG.living3, IMG.living2, IMG.living1], descEn: "Round coffee table with lower shelf for magazines.", descAr: "طاولة قهوة دائرية مع رف سفلي للمجلات.", materials: "Top: ash veneer. Legs: steel.", dimensions: "Ø 90 × H 45 cm", colors: ["White", "Oak"], stock: 18, articleNo: "IB-2003" },
  { id: "p8", slug: "malm-bed-frame-160", nameEn: "MALM bed frame 160×200", nameAr: "هيكل سرير مالم 160×200", nameKu: "چوارچێوەی جێگا مالم", category: "bedroom", price: 985000, rating: 5, reviews: 176, image: IMG.bed1, gallery: [IMG.bed1, IMG.bed2, IMG.bed3], descEn: "Low-profile bed frame with headboard. Under-bed storage available.", descAr: "هيكل سرير منخفض مع لوح رأس. يتوفر تخزين تحت السرير.", materials: "Particleboard + fibreboard. Headboard: upholstered.", dimensions: "W 173 × L 213 × H 100 cm", colors: ["White", "Oak", "Black"], badge: "bestseller", stock: 12, articleNo: "IB-3001" },
  { id: "p9", slug: "pax-wardrobe-200", nameEn: "PAX wardrobe 200cm", nameAr: "خزانة باكس 200 سم", nameKu: "کابینەی باكس", category: "bedroom", price: 1450000, oldPrice: 1650000, rating: 5, reviews: 89, image: IMG.bed2, gallery: [IMG.bed2, IMG.bed3, IMG.bed4], descEn: "Sliding-door wardrobe with interior organisers, shelves and hanging rails.", descAr: "خزانة بأبواب منزلقة مع منظمات داخلية وأرفف وعلاقات.", materials: "Particleboard. Doors: mirrored glass.", dimensions: "W 200 × D 58 × H 236 cm", colors: ["White", "Grey"], badge: "offer", stock: 7, articleNo: "IB-3002" },
  { id: "p10", slug: "nordli-nightstand", nameEn: "NORDLI nightstand", nameAr: "كومودينو نوردلي", nameKu: "مێزی شەو نۆردلی", category: "bedroom", price: 185000, rating: 4, reviews: 54, image: IMG.bed3, gallery: [IMG.bed3, IMG.bed4, IMG.bed1], descEn: "Compact nightstand with drawer and cable hole.", descAr: "كومودينو مدمج مع درج وفتحة كابلات.", materials: "Particleboard. Drawer front: MDF.", dimensions: "W 40 × D 34 × H 50 cm", colors: ["White", "Oak"], stock: 25, articleNo: "IB-3003" },
  { id: "p11", slug: "tarendo-bed-140", nameEn: "TARENDO bed 140×200", nameAr: "سرير تاريندو 140×200", nameKu: "جێگای تارێندۆ", category: "bedroom", price: 765000, rating: 4, reviews: 67, image: IMG.bed4, gallery: [IMG.bed4, IMG.bed1, IMG.bed2], descEn: "Simple solid-pine bed frame, durable and timeless.", descAr: "هيكل سرير بسيط من خشب الصنوبر الصلب، متين وخالد.", materials: "Solid pine.", dimensions: "W 153 × L 213 × H 90 cm", colors: ["White", "Natural"], badge: "new", stock: 10, articleNo: "IB-3004" },
  { id: "p12", slug: "norden-dining-table", nameEn: "NORDEN dining table 120cm", nameAr: "طاولة طعام نوردن 120 سم", nameKu: "مێزی خواردن نۆردن", category: "dining-room", price: 685000, rating: 5, reviews: 112, image: IMG.dining1, gallery: [IMG.dining1, IMG.dining2, IMG.dining3], descEn: "Extendable pine table with drawers. Seats 4–8.", descAr: "طاولة صنوبر قابلة للتمديد مع أدراج. تتسع لـ 4-8 أشخاص.", materials: "Solid pine. Drawers: pine.", dimensions: "W 120–180 × D 80 × H 75 cm", colors: ["White", "Natural"], badge: "bestseller", stock: 8, articleNo: "IB-4001" },
  { id: "p13", slug: "ingolf-chair", nameEn: "INGOLF chair", nameAr: "كرسي إنجولف", nameKu: "کورسی ئینگۆلف", category: "dining-room", price: 215000, rating: 4, reviews: 203, image: IMG.dining2, gallery: [IMG.dining2, IMG.dining1, IMG.dining3], descEn: "Classic dining chair with curved backrest.", descAr: "كرسي طعام كلاسيكي بظهر منحني.", materials: "Solid pine. Seat: pine.", dimensions: "W 44 × D 52 × H 95 cm", colors: ["White", "Black"], stock: 40, articleNo: "IB-4002" },
  { id: "p14", slug: "bjorsta-table-200", nameEn: "BJÖRSTA table 200cm", nameAr: "طاولة بيورستا 200 سم", nameKu: "مێزی بیۆرستا", category: "dining-room", price: 895000, oldPrice: 1020000, rating: 5, reviews: 45, image: IMG.dining3, gallery: [IMG.dining3, IMG.dining1, IMG.dining2], descEn: "Large rectangular table for family gatherings and Iraqi hospitality.", descAr: "طاولة مستطيلة كبيرة للتجمعات العائلية والضيافة العراقية.", materials: "Ash veneer top. Legs: solid ash.", dimensions: "W 200 × D 100 × H 75 cm", colors: ["Oak", "Walnut"], badge: "offer", stock: 5, articleNo: "IB-4003" },
  { id: "p15", slug: "sektion-cabinet", nameEn: "SEKTION wall cabinet", nameAr: "خزانة حائط سيكشن", nameKu: "کابینەی دیواری", category: "kitchen", price: 425000, rating: 4, reviews: 78, image: IMG.kitchen1, gallery: [IMG.kitchen1, IMG.kitchen2, IMG.kitchen3], descEn: "Modular kitchen wall cabinet with soft-close doors.", descAr: "خزانة مطبخ حائط وحدات بأبواب إغلاق ناعم.", materials: "Particleboard. Doors: MDF.", dimensions: "W 80 × D 37 × H 80 cm", colors: ["White", "Grey"], stock: 16, articleNo: "IB-5001" },
  { id: "p16", slug: "bekvam-stool", nameEn: "BEKVÄM bar stool", nameAr: "مقعد بار بيكفام", nameKu: "کورسی بار", category: "kitchen", price: 145000, rating: 4, reviews: 156, image: IMG.kitchen2, gallery: [IMG.kitchen2, IMG.kitchen3, IMG.kitchen1], descEn: "Height-adjustable bar stool in beech.", descAr: "مقعد بار قابل لتعديل الارتفاع من خشب الزان.", materials: "Beech. Seat: beech.", dimensions: "Ø 35 × H 63–92 cm", colors: ["Beech", "Black"], stock: 28, articleNo: "IB-5002" },
  { id: "p17", slug: "raskog-cart", nameEn: "RÅSKOG kitchen cart", nameAr: "عربة مطبخ راسكوج", nameKu: "عەرەبانەی چێشتخانە", category: "kitchen", price: 125000, oldPrice: 150000, rating: 5, reviews: 289, image: IMG.kitchen3, gallery: [IMG.kitchen3, IMG.kitchen1, IMG.kitchen2], descEn: "Three-tier trolley for kitchen and dining storage.", descAr: "عربة بثلاثة أرفف لتخزين المطبخ وغرفة الطعام.", materials: "Steel. Powder-coated.", dimensions: "W 35 × D 45 × H 78 cm", colors: ["White", "Black", "Turquoise"], badge: "offer", stock: 35, articleNo: "IB-5003" },
  { id: "p18", slug: "alex-desk-120", nameEn: "ALEX desk 120cm", nameAr: "مكتب أليكس 120 سم", nameKu: "مێزی ئالێکس", category: "office", price: 345000, rating: 5, reviews: 234, image: IMG.office1, gallery: [IMG.office1, IMG.office2, IMG.office3], descEn: "Desk with drawers and cable management. Ideal for home office in Baghdad.", descAr: "مكتب مع أدراج وإدارة كابلات. مثالي للمكتب المنزلي في بغداد.", materials: "Particleboard. Top: ash veneer.", dimensions: "W 120 × D 60 × H 75 cm", colors: ["White", "Oak"], badge: "bestseller", stock: 20, articleNo: "IB-6001" },
  { id: "p19", slug: "markus-office-chair", nameEn: "MARKUS office chair", nameAr: "كرسي مكتب ماركوس", nameKu: "کورسی ئۆفیس مارکوس", category: "office", price: 195000, rating: 4, reviews: 412, image: IMG.office2, gallery: [IMG.office2, IMG.office1, IMG.office3], descEn: "Ergonomic mesh chair with adjustable height and armrests.", descAr: "كرسي شبكي مريح بارتفاع قابل للتعديل ومساند ذراعين.", materials: "Mesh fabric. Frame: steel.", dimensions: "W 62 × D 62 × H 110 cm", colors: ["Black", "Grey"], stock: 50, articleNo: "IB-6002" },
  { id: "p20", slug: "kallax-desk-combo", nameEn: "KALLAX desk + shelf combo", nameAr: "مكتب + رف كالاكس", nameKu: "کۆمبۆی مێز و ڕەفە", category: "office", price: 485000, rating: 4, reviews: 67, image: IMG.office3, gallery: [IMG.office3, IMG.office1, IMG.office2], descEn: "Space-saving desk integrated with shelving.", descAr: "مكتب موفر للمساحة مدمج مع أرفف.", materials: "Particleboard.", dimensions: "W 147 × D 60 × H 147 cm", colors: ["White"], badge: "new", stock: 11, articleNo: "IB-6003" },
  { id: "p21", slug: "solleron-sofa-set", nameEn: "SOLLERÖN outdoor sofa set", nameAr: "طقم كنب خارجي سوليروون", nameKu: "ستێتی سۆفای دەرەوە", category: "garden", price: 1650000, oldPrice: 1950000, rating: 5, reviews: 38, image: IMG.garden1, gallery: [IMG.garden1, IMG.garden2, IMG.garden3], descEn: "Weather-resistant outdoor sofa with cushions. Perfect for Baghdad terraces.", descAr: "كنبة خارجية مقاومة للعوامل الجوية مع وسائد. مثالية لشرفات بغداد.", materials: "Frame: aluminium. Fabric: polyester, water-repellent.", dimensions: "W 220 × D 90 × H 70 cm", colors: ["Light grey", "Beige"], badge: "offer", stock: 4, articleNo: "IB-7001" },
  { id: "p22", slug: "applaro-table-chairs", nameEn: "ÄPPLARÖ table + 4 chairs", nameAr: "طاولة + 4 كراسي أبلارو", nameKu: "مێز + ٤ کورسی", category: "garden", price: 1250000, rating: 5, reviews: 52, image: IMG.garden2, gallery: [IMG.garden2, IMG.garden3, IMG.garden1], descEn: "Solid acacia outdoor dining set for 4.", descAr: "طقم طعام خارجي من خشب الأكاسيا الصلب لـ 4 أشخاص.", materials: "Solid acacia, oiled.", dimensions: "Table W 140 × D 80 × H 72 cm", colors: ["Natural wood"], stock: 6, articleNo: "IB-7002" },
  { id: "p23", slug: "hammaro-sun-lounger", nameEn: "HAMMARÖ sun lounger", nameAr: "كرسي تشمس هامارو", nameKu: "کورسی خۆر", category: "garden", price: 385000, rating: 4, reviews: 29, image: IMG.garden3, gallery: [IMG.garden3, IMG.garden1, IMG.garden2], descEn: "Adjustable sun lounger with cushion.", descAr: "كرسي تشمس قابل للتعديل مع وسادة.", materials: "Frame: steel. Fabric: polyester.", dimensions: "W 60 × L 190 × H 35 cm", colors: ["White", "Grey"], badge: "new", stock: 9, articleNo: "IB-7003" },
  { id: "p24", slug: "hemnes-lamp", nameEn: "HEMNES table lamp", nameAr: "مصباح طاولة هيمنس", nameKu: "چرای مێز", category: "accessories", price: 85000, rating: 4, reviews: 145, image: IMG.acc2, gallery: [IMG.acc2, IMG.acc1, IMG.acc3], descEn: "Classic table lamp with fabric shade. Warm light for reading.", descAr: "مصباح طاولة كلاسيكي بغطاء قماش. إضاءة دافئة للقراءة.", materials: "Base: glass. Shade: polyester.", dimensions: "H 55 cm, Ø 30 cm", colors: ["White", "Beige"], stock: 60, articleNo: "IB-8001" },
  { id: "p25", slug: "gradvis-vase-set", nameEn: "GRADVIS vase set of 3", nameAr: "طقم مزهريات جرادفيس 3 قطع", nameKu: "ستێتی گوزە", category: "accessories", price: 65000, rating: 5, reviews: 98, image: IMG.acc1, gallery: [IMG.acc1, IMG.acc4, IMG.acc3], descEn: "Set of 3 ceramic vases in Scandinavian matte finish.", descAr: "طقم 3 مزهريات سيراميك بتشطيب مطفي اسكندنافي.", materials: "Stoneware ceramic.", dimensions: "H 12 / 18 / 24 cm", colors: ["White", "Beige", "Terracotta"], stock: 80, articleNo: "IB-8002" },
  { id: "p26", slug: "stockholm-mirror", nameEn: "STOCKHOLM mirror 80cm", nameAr: "مرآة ستوكهولم 80 سم", nameKu: "ئاوێنە", category: "accessories", price: 145000, oldPrice: 175000, rating: 4, reviews: 76, image: IMG.acc3, gallery: [IMG.acc3, IMG.acc1, IMG.acc2], descEn: "Round wall mirror with wooden frame.", descAr: "مرآة حائط دائرية بإطار خشبي.", materials: "Frame: ash veneer. Glass: mirror.", dimensions: "Ø 80 cm", colors: ["Oak", "Black"], badge: "offer", stock: 22, articleNo: "IB-8003" },
  { id: "p27", slug: "ludde-cushion", nameEn: "LUDDE cushion cover 45cm", nameAr: "غطاء وسادة لود 45 سم", nameKu: "بەرگی سەرین", category: "accessories", price: 35000, rating: 4, reviews: 320, image: IMG.acc4, gallery: [IMG.acc4, IMG.acc1, IMG.acc2], descEn: "Soft cushion cover in natural linen.", descAr: "غطاء وسادة ناعم من الكتان الطبيعي.", materials: "Linen blend.", dimensions: "45 × 45 cm", colors: ["Natural", "Grey", "Green"], stock: 120, articleNo: "IB-8004" },
  { id: "p28", slug: "fellingslo-bookcase", nameEn: "FELLINGSLÖ bookcase", nameAr: "مكتبة فيلينجسلو", nameKu: "کتێبخانە", category: "living-room", price: 525000, rating: 5, reviews: 44, image: IMG.living1, gallery: [IMG.living1, IMG.living3, IMG.living2], descEn: "Tall bookcase with glass doors for living room display.", descAr: "مكتبة طويلة بأبواب زجاجية لعرض غرفة المعيشة.", materials: "Particleboard. Doors: glass.", dimensions: "W 80 × D 30 × H 202 cm", colors: ["White"], badge: "limited", stock: 3, articleNo: "IB-2004" },
];

export const ROOMS = [
  { titleEn: "Small Living Room Ideas", titleAr: "أفكار لغرفة معيشة صغيرة", titleKu: "بیرۆکە بۆ ژووری بچووک", image: IMG.living2, category: "living-room", descEn: "Light colours, multifunctional furniture and smart storage for Baghdad apartments.", descAr: "ألوان فاتحة وأثاث متعدد الوظائف وتخزين ذكي لشقق بغداد.", descKu: "ڕەنگی سووک و مێبلی فرەکار و هەڵگرتنی زیرەک بۆ شوقەکانی بەغدا." },
  { titleEn: "Calm Bedroom Retreat", titleAr: "غرفة نوم هادئة", titleKu: "ژووری نوستنی ئارام", image: IMG.bed2, category: "bedroom", descEn: "Create a restful space with natural textures and soft lighting.", descAr: "اصنع مساحة مريحة بملمس طبيعي وإضاءة ناعمة.", descKu: "شوێنێکی ئارام دروست بکە بە دەقێکی سروشتی و ڕووناکی نەرم." },
  { titleEn: "Family Dining for Iraqi Hospitality", titleAr: "طعام عائلي للضيافة العراقية", titleKu: "خواردنی خێزانی", image: IMG.dining1, category: "dining-room", descEn: "Large tables and comfortable seating for gatherings.", descAr: "طاولات كبيرة ومقاعد مريحة للتجمعات.", descKu: "مێزی گەورە و کورسی ئارام بۆ کۆبوونەوەکان." },
  { titleEn: "Home Office in Small Spaces", titleAr: "مكتب منزلي في مساحات صغيرة", titleKu: "ئۆفیسی ماڵ لە شوێنی بچووک", image: IMG.office1, category: "office", descEn: "Compact desks and ergonomic chairs for work from home.", descAr: "مكاتب مدمجة وكراسي مريحة للعمل من المنزل.", descKu: "مێزی بچووک و کورسی ئارام بۆ کارکردن لە ماڵەوە." },
];

export function formatIQD(n: number) {
  return n.toLocaleString("en-US") + " IQD";
}

export const WHATSAPP_NUMBER = "9647740907063";
export const WHATSAPP_DISPLAY = "0774 090 7063";
export const PHONE_DISPLAY = "0774 090 7063";
export const PHONE_INTL = "+964 774 090 7063";
export const PHONE_TEL = "tel:+9647740907063";
export const WHATSAPP_URL = "https://wa.me/9647740907063";
export const INSTAGRAM_URL = "https://www.instagram.com/swedenekia";
export const INSTAGRAM_HANDLE = "@swedenekia";
export const STORE_ADDRESS_EN = "Al Rabee Street, Baghdad, Iraq";
export const STORE_ADDRESS_AR = "شارع الربيع، بغداد، العراق";
export const STORE_ADDRESS_KU = "شەقامی ئەلڕەبیع، بەغدا، عێراق";
export const STORE_MAP_QUERY = "Al+Rabee+Street+Baghdad+Iraq";
