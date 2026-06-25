import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  exists: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SiteImage({
  src,
  alt,
  exists,
  fill,
  width,
  height,
  className = "",
  priority,
  sizes,
}: Props) {
  if (!exists) {
    return (
      <div
        className={`flex items-center justify-center border border-terracotta/20 bg-cream-soft ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center text-xs uppercase tracking-widest text-ink/35">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
