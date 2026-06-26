import { GalleryClient } from "@/components/GalleryClient";
import { imageExists } from "@/lib/images";

const galleryImages = [
  { src: "/images/hero.jpg", alt: "AY Liman mekan görünümü" },
  { src: "/images/meze-enginar.jpg", alt: "Zeytinyağlı enginar" },
  { src: "/images/ana-levrek.jpg", alt: "Taş fırında levrek" },
  { src: "/images/meze-midye.jpg", alt: "Midye dolma" },
  { src: "/images/tatli-kadayif.jpg", alt: "Bal-cevizli kadayıf" },
  { src: "/images/ana-ahtapot.jpg", alt: "Ahtapot ızgara" },
  { src: "/images/icecek-kahve.jpg", alt: "Türk kahvesi" },
  { src: "/images/tatli-seftali.jpg", alt: "Şeftalili yoğurt tatlısı" },
  { src: "/images/meze-patlican.jpg", alt: "Közlenmiş patlıcan salatası" },
];

export function Gallery() {
  const images = galleryImages.map((image) => ({
    ...image,
    exists: imageExists(image.src),
  }));

  return (
    <section className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl tracking-wide sm:text-4xl">
          Galeri
        </h2>
        <GalleryClient images={images} />
      </div>
    </section>
  );
}
