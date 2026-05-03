type SignalChipProps = {
  children: string;
  theme?: "dark" | "light";
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function SignalChip({
  children,
  theme = "dark",
  className,
}: SignalChipProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={classNames(
        "rounded-2xl border p-4 text-sm leading-7",
        isDark
          ? "border-white/10 bg-white/5 text-warm-ivory/80"
          : "border-deep-night/10 bg-white/70 text-deep-night/70",
        className,
      )}>
      {children}
    </div>
  );
}
