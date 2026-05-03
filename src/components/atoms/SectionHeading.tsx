import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/atoms/Icons";
import { Eyebrow } from "@/components/atoms/Eyebrow";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
  theme?: "light" | "dark";
  titleClassName?: string;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function SectionHeading({
  label,
  title,
  description,
  actionLabel,
  actionHref,
  theme = "light",
  titleClassName,
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={classNames(
        "grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:items-end lg:gap-12",
        className,
      )}>
      <div className="min-w-0 lg:col-span-7">
        <Eyebrow className="mb-8 text-lion-gold">{label}</Eyebrow>
        <h2
          className={classNames(
            "max-w-5xl text-[2.75rem] leading-[0.92] tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl",
            isDark ? "text-warm-ivory" : "text-deep-night",
            titleClassName,
          )}>
          {title}
        </h2>
      </div>

      {(description || actionLabel) && (
        <div className="min-w-0 flex flex-col items-start gap-6 lg:col-span-5 lg:pl-6">
          {description ? (
            <p
              className={classNames(
                "max-w-xl text-base font-medium leading-7 md:text-lg md:leading-8",
                isDark ? "text-warm-ivory/60" : "text-deep-night/60",
              )}>
              {description}
            </p>
          ) : null}

          {actionLabel && actionHref ? (
            <Link
              href={actionHref}
              className="group inline-flex max-w-full items-center gap-4 text-[10px] font-black uppercase tracking-widest text-lion-gold transition-all hover:gap-5">
              {actionLabel}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}
