"use client";

import Link from "next/link";

type LogoProps = {
  leftLabel: string;
  rightLabel: string;
  href?: string;
  inverted?: boolean;
  onClick?: () => void;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Logo({
  leftLabel,
  rightLabel,
  href = "/",
  inverted = false,
  onClick,
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      onClick={() => onClick?.()}
      className={classNames("relative z-60 inline-flex max-w-full", className)}>
      <div
        className={classNames(
          "min-w-0 flex items-center gap-1 select-none pointer-events-none",
          inverted ? "text-warm-ivory" : "text-deep-night",
        )}>
        <div className="flex min-w-0 items-center font-black leading-none tracking-[0.12em] text-[9px] sm:text-[10px] md:text-sm lg:text-base">
          <span>{leftLabel}</span>
          <div className="mx-1.5 shrink-0">
            <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-current sm:h-8 sm:w-8">
              <div className="h-3.5 w-3.5 rounded-full border border-current bg-current/10 sm:h-4 sm:w-4" />
              <div className="absolute right-[38%] top-[38%] h-1.5 w-1.5 rounded-full bg-current" />
            </div>
          </div>
          <span>{rightLabel}</span>
        </div>
      </div>
    </Link>
  );
}
