import { SiteImage } from "@/components/SiteImage";
import { site } from "@/data/site";
import { imageExists } from "@/lib/images";

export function Story() {
  const exists = imageExists("/images/mekan-kose.jpg");

  return (
    <section className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <SiteImage
            src="/images/mekan-kose.jpg"
            alt="AY Liman'da iki kişilik köşe masa"
            exists={exists}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">Hikâyemiz</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">{site.story}</p>
        </div>
      </div>
    </section>
  );
}
