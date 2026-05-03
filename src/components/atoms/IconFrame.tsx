import type { ReactNode } from "react";

type IconFrameProps = {
  children: ReactNode;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function IconFrame({ children, className }: IconFrameProps) {
  return (
    <div className={classNames("inline-flex rounded-2xl p-4", className)}>
      {children}
    </div>
  );
}
