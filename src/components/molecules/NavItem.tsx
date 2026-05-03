"use client";

import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  inverted?: boolean;
  onClick?: () => void;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function NavItem({
  href,
  label,
  inverted = false,
  onClick,
  className,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={() => onClick?.()}
      className={classNames(
        "inline-flex max-w-full items-center text-left text-[10px] font-black uppercase leading-[1.45] tracking-[0.22em] transition-colors duration-300",
        inverted
          ? "text-warm-ivory hover:text-lion-gold"
          : "text-deep-night hover:text-lion-gold",
        className,
      )}>
      {label}
    </Link>
  );
}
