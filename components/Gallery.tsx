import { GalleryClient } from "@/components/GalleryClient";
import { imageExists } from "@/lib/images";

const galleryImages = [
  { src: "/images/hero.jpg", alt: "AY Liman mekan görünümü" },
  { src: "/images/oturma.jpg", alt: "Oturma alanı" },
  { src: "/images/meze.jpg", alt: "Meze sofrası" },
  { src: "/images/ana-yemek.jpg", alt: "Ana yemek tabağı" },
  { src: "/images/detay.jpg", alt: "Mutfak detay" },
  { src: "/images/tatli.jpg", alt: "Tatlı tabağı" },
  { src: "/images/naturmort.jpg", alt: "AY Liman sofra natürmortu" },
  { src: "/images/masa-menu.jpg", alt: "Masa ve menü" },
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
