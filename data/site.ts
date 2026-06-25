export type SiteData = {
  name: string;
  tagline: string;
  story: string;
  address: string;
  phone: string;
  hours: string;
  instagram: string;
  mapEmbedUrl: string;
  reservationEnabled: boolean;
};

export const site: SiteData = {
  name: "AY Liman",
  tagline:
    "Ege'nin sabah ışığını, taşını ve sofrasını bir araya getiren küçük bir liman.",
  story:
    "AY Liman, sabah ışığının taş duvarlara değdiği saatte açılır. Zeytinyağı, taze ot ve denizden gelen rüzgâr, sofradaki her tabağa kendi mevsiminde yansır. Burada telaş yok; misafir, yemeğin kendi zamanında gelmesini bekleyebilir.",
  address: "Liman Mahallesi, Sahil Caddesi No: 14, Bodrum, Muğla",
  phone: "+90 252 000 00 00",
  hours: "Her gün 09:00 – 23:00",
  instagram: "https://instagram.com/ayliman",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.000!2d27.430!3d37.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAyJzAyLjQiTiAyN8KwMjUnNDguMCJF!5e0!3m2!1str!2str!4v1700000000000",
  reservationEnabled: false,
};
