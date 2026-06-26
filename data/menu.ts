export type MenuItem = {
  id: string;
  name: string;
  name_en?: string;
  description: string;
  price: number;
  calories: number;
  allergens: string[];
  image: string;
  tags?: string[];
};

export const menu: { category: string; items: MenuItem[] }[] = [
  {
    category: "Başlangıçlar",
    items: [
      {
        id: "zeytinyagli-enginar",
        name: "Zeytinyağlı Enginar",
        name_en: "Artichoke in Olive Oil",
        description:
          "Taze enginar, havuç, bezelye ve dereotu ile soğukta demlenmiş zeytinyağında.",
        price: 220,
        calories: 180,
        allergens: [],
        image: "/images/meze-enginar.jpg",
        tags: ["vejetaryen", "glutensiz"],
      },
      {
        id: "humus-kibris-otlari",
        name: "Humus & Kıbrıs Otları",
        name_en: "Hummus with Wild Herbs",
        description:
          "Nohut, susam ve limonla çekilmiş humus, mevsim otları ve közlenmiş ekmek ile.",
        price: 180,
        calories: 310,
        allergens: ["susam", "gluten"],
        image: "/images/meze-humus.jpg",
        tags: ["vejetaryen"],
      },
      {
        id: "midye-dolma",
        name: "Midye Dolma",
        name_en: "Stuffed Mussels",
        description: "Baharatlı pilav ile doldurulmuş, limonla servis edilen midye dolma.",
        price: 260,
        calories: 340,
        allergens: ["kabuklu deniz ürünleri", "gluten"],
        image: "/images/meze-midye.jpg",
      },
      {
        id: "kozlenmis-patlican",
        name: "Közlenmiş Patlıcan Salatası",
        name_en: "Smoked Eggplant Salad",
        description: "Ateşte közlenmiş patlıcan, süzme yoğurt ve sarımsakla.",
        price: 190,
        calories: 210,
        allergens: ["süt"],
        image: "/images/meze-patlican.jpg",
        tags: ["vejetaryen"],
      },
    ],
  },
  {
    category: "Ana Yemekler",
    items: [
      {
        id: "tas-firinda-levrek",
        name: "Taş Fırında Levrek",
        name_en: "Stone-Baked Sea Bass",
        description:
          "Taş fırında, zeytinyağı ve taze otlarla pişirilmiş bütün levrek, mevsim sebzeleriyle.",
        price: 520,
        calories: 480,
        allergens: ["balık"],
        image: "/images/ana-levrek.jpg",
        tags: ["şefin önerisi", "glutensiz"],
      },
      {
        id: "ahtapot-izgara",
        name: "Ahtapot Izgara",
        name_en: "Grilled Octopus",
        description: "Kömürde ızgara ahtapot, zeytinyağı, kekik ve közlenmiş limon.",
        price: 480,
        calories: 390,
        allergens: ["yumuşakça"],
        image: "/images/ana-ahtapot.jpg",
      },
      {
        id: "enginarli-kuzu",
        name: "Zeytinyağlı Enginarlı Kuzu",
        name_en: "Lamb with Artichokes",
        description: "Ağır ateşte pişmiş kuzu but, enginar ve taze bakla ile.",
        price: 560,
        calories: 610,
        allergens: [],
        image: "/images/ana-kuzu.jpg",
        tags: ["glutensiz"],
      },
      {
        id: "mantarli-risotto",
        name: "Mantarlı Risotto",
        name_en: "Wild Mushroom Risotto",
        description: "Mevsim mantarları, tereyağı ve közlenmiş parmesan ile risotto.",
        price: 340,
        calories: 520,
        allergens: ["süt"],
        image: "/images/ana-risotto.jpg",
        tags: ["vejetaryen"],
      },
    ],
  },
  {
    category: "Tatlılar",
    items: [
      {
        id: "seftalili-yogurt",
        name: "Şeftalili Yoğurt Tatlısı",
        name_en: "Peach & Yogurt Sorbet",
        description: "Mevsim şeftalisi, ev yapımı yoğurt dondurması ve bal.",
        price: 160,
        calories: 280,
        allergens: ["süt"],
        image: "/images/tatli-seftali.jpg",
        tags: ["vejetaryen"],
      },
      {
        id: "bal-cevizli-kadayif",
        name: "Bal-Cevizli Kadayıf",
        name_en: "Kadayif with Honey & Walnut",
        description: "Tel kadayıf, ceviz, tereyağı ve günlük bal şerbeti ile.",
        price: 190,
        calories: 540,
        allergens: ["gluten", "süt", "kuruyemiş"],
        image: "/images/tatli-kadayif.jpg",
      },
      {
        id: "karpuzlu-lokum-dondurma",
        name: "Karpuzlu Lokum Dondurma",
        name_en: "Watermelon & Turkish Delight Ice Cream",
        description: "Ev yapımı karpuz dondurması, gül lokumu ve nane.",
        price: 170,
        calories: 260,
        allergens: ["süt"],
        image: "/images/tatli-dondurma.jpg",
        tags: ["vejetaryen", "glutensiz"],
      },
    ],
  },
  {
    category: "İçecekler",
    items: [
      {
        id: "ev-yapimi-limonata",
        name: "Ev Yapımı Limonata",
        name_en: "Homemade Lemonade",
        description: "Taze sıkılmış limon, nane ve soda ile.",
        price: 90,
        calories: 110,
        allergens: [],
        image: "/images/icecek-limonata.jpg",
        tags: ["vejetaryen", "glutensiz"],
      },
      {
        id: "adacayi",
        name: "Adaçayı",
        name_en: "Sage Tea",
        description: "Taze toplanmış ada çayından demlenmiş, bal ile.",
        price: 70,
        calories: 20,
        allergens: [],
        image: "/images/icecek-adacayi.jpg",
        tags: ["vejetaryen", "glutensiz"],
      },
      {
        id: "turk-kahvesi",
        name: "Türk Kahvesi",
        name_en: "Turkish Coffee",
        description: "Közde demlenmiş geleneksel Türk kahvesi, lokum ile.",
        price: 100,
        calories: 30,
        allergens: [],
        image: "/images/icecek-kahve.jpg",
      },
      {
        id: "taze-portakal-suyu",
        name: "Taze Sıkılmış Portakal Suyu",
        name_en: "Fresh Orange Juice",
        description: "Günlük sıkılan mevsim portakalından, katkısız.",
        price: 110,
        calories: 140,
        allergens: [],
        image: "/images/icecek-portakal.jpg",
        tags: ["vejetaryen", "glutensiz"],
      },
    ],
  },
];
