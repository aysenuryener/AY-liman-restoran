import { GalleryClient } from "@/components/GalleryClient";
import { imageExists } from "@/lib/images";

const galleryImages = [
  { src: "/images/hero.jpg", alt: "AY Liman mekan görünümü" },
  { src: "/images/mekan-kose.jpg", alt: "İki kişilik köşe masa" },
  { src: "/images/yemek-meze.jpg", alt: "Meze sofrası" },
  { src: "/images/yemek-balik.jpg", alt: "Taş fırında levrek" },
  { src: "/images/yemek-yag.jpg", alt: "Zeytinyağı dökülürken yakın çekim" },
  { src: "/images/marka-natürmort.jpg", alt: "AY Liman sofra natürmortu" },
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
