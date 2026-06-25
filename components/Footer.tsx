import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-center text-cream-soft/70">
      <p className="font-serif text-lg text-cream-soft">{site.name}</p>
      <div className="mx-auto mt-3 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="h-px w-10 bg-cream-soft/30" />
        <span className="text-olive">⁂</span>
        <span className="h-px w-10 bg-cream-soft/30" />
      </div>
      <p className="mt-3 text-sm">
        © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
