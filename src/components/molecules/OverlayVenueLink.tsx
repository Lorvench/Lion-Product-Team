"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@/components/atoms/Icons";

type OverlayVenueLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export function OverlayVenueLink({
  href,
  label,
  onClick,
}: OverlayVenueLinkProps) {
  return (
    <Link href={href} onClick={() => onClick?.()} className="group block">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 transition-colors group-hover:border-lion-gold">
        <span className="text-xl transition-colors group-hover:text-lion-gold">
          {label}
        </span>
        <ChevronRightIcon className="h-4 w-4 opacity-20 transition-all group-hover:text-lion-gold group-hover:opacity-100" />
      </div>
    </Link>
  );
}
