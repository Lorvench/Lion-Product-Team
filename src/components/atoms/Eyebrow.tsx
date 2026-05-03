import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={classNames(
        "block text-[10px] font-black uppercase tracking-[0.3em]",
        className,
      )}>
      {children}
    </span>
  );
}
