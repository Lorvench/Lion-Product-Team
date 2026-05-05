import Image from "next/image";
import Link from "next/link";

const imageShellClassName =
  "relative mb-8 aspect-3/2 overflow-hidden rounded-4xl";
const imageOverlayClassName =
  "absolute inset-0 bg-linear-to-t from-deep-night/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100";

type PortfolioCardProps = {
  href: string;
  image: string;
  category: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  badgeClassName: string;
};

export function PortfolioCard({
  href,
  image,
  category,
  title,
  description,
  primaryAction,
  secondaryAction,
  badgeClassName,
}: PortfolioCardProps) {
  return (
    <div className="group min-w-0">
      <Link href={href} className="block">
        <div className={imageShellClassName}>
          <Image
            src={image}
            alt="[PLACEHOLDER]"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className={imageOverlayClassName} />
          <div
            className={`absolute left-6 top-6 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-2xl ${badgeClassName}`}>
            {category}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="min-w-0 text-2xl tracking-tight text-deep-night transition-colors group-hover:text-lion-gold sm:text-3xl">
            {title}
          </h3>
        </div>

        <p className="mb-8 max-w-sm text-sm font-medium leading-7 text-deep-night/60">
          {description}
        </p>
      </Link>

      <div className="flex flex-wrap gap-x-4 gap-y-3">
        <Link
          href={href}
          className="text-[10px] font-black uppercase tracking-widest text-deep-night transition-colors hover:text-lion-gold">
          {primaryAction}
        </Link>
        <div className="h-4 w-px self-center bg-deep-night/10" />
        <Link
          href="#contact"
          className="text-[10px] font-black uppercase tracking-widest text-deep-night transition-colors hover:text-lion-gold">
          {secondaryAction}
        </Link>
      </div>
    </div>
  );
}
