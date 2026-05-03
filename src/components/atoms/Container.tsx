import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={classNames(
        "mx-auto min-w-0 w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12",
        className,
      )}>
      {children}
    </div>
  );
}