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
      className={classNames(
        "relative z-60 inline-flex min-w-0 max-w-full overflow-hidden",
        className,
      )}>
      <div
        className={classNames(
          "min-w-0 flex items-center gap-0.5 select-none pointer-events-none sm:gap-1",
          inverted ? "text-warm-ivory" : "text-deep-night",
        )}>
        <div className="flex min-w-0 items-center font-black leading-none tracking-[0.08em] text-[8px] sm:text-[10px] md:text-sm lg:text-base">
          <span className="max-w-[4.25rem] truncate sm:max-w-none">
            {leftLabel}
          </span>
          <div className="mx-1 shrink-0 sm:mx-1.5">
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-current sm:h-8 sm:w-8">
              <div className="h-3 w-3 rounded-full border border-current bg-current/10 sm:h-4 sm:w-4" />
              <div className="absolute right-[38%] top-[38%] h-1 w-1 rounded-full bg-current sm:h-1.5 sm:w-1.5" />
            </div>
          </div>
          <span className="max-w-[6rem] truncate sm:max-w-none">
            {rightLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
