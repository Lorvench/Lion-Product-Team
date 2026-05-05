"use client";

import Link from "next/link";

type LogoProps = {
  href?: string;
  inverted?: boolean;
  onClick?: () => void;
  className?: string;
  leftLabel?: string;
  rightLabel?: string;
};

const cn = (...v: Array<string | undefined | false>) =>
  v.filter(Boolean).join(" ");

function OFace({ inverted }: { inverted: boolean }) {
  return (
    <span className="relative inline-flex items-center justify-center w-[1.05em] h-[1.05em] mx-[0.05em]">
      <span className="absolute inset-0 rounded-full bg-lion-gold" />
      <span
        className="absolute inset-[12%] rounded-full"
        style={{ backgroundColor: inverted ? "#FFF4D6" : "#0A1A2E" }}
      />
      <span
        className="absolute inset-[25%] rounded-full"
        style={{ backgroundColor: inverted ? "#0A1A2E" : "#FFF4D6" }}
      />
      <span
        className="absolute top-[36%] left-[30%] w-[11%] h-[11%] rounded-full"
        style={{ backgroundColor: inverted ? "#FFF4D6" : "#0A1A2E" }}
      />
      <span
        className="absolute top-[36%] right-[30%] w-[11%] h-[11%] rounded-full"
        style={{ backgroundColor: inverted ? "#FFF4D6" : "#0A1A2E" }}
      />
    </span>
  );
}

export function Logo({
  href = "/",
  inverted = false,
  onClick,
  className,
}: LogoProps) {
  const textColor = inverted ? "text-warm-ivory" : "text-deep-night";
  const groupColor = inverted ? "text-warm-ivory/50" : "text-deep-night/50";

  return (
    <Link
      href={href}
      onClick={() => onClick?.()}
      aria-label="Lion Group — home"
      className={cn(
        "relative z-60 inline-flex items-center select-none min-w-0 max-w-full",
        className,
      )}>
      <span
        className={cn(
          "flex items-center font-black leading-none tracking-tight",
          "text-lg sm:text-xl md:text-2xl",
          textColor,
        )}>
        <span>LI</span>
        <OFace inverted={inverted} />
        <span>N</span>
      </span>

      <span
        className={cn(
          "ml-2 font-black uppercase tracking-[0.22em] leading-none",
          "text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]",
          groupColor,
        )}>
        Group
      </span>
    </Link>
  );
}
