import { ChevronDownIcon } from "@/components/atoms/Icons";

type ScrollIndicatorButtonProps = {
  label: string;
  targetId: string;
  className?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function ScrollIndicatorButton({
  label,
  targetId,
  className,
}: ScrollIndicatorButtonProps) {
  return (
    <a
      href={`#${targetId}`}
      aria-label="Scroll to next section"
      className={classNames(
        "group flex flex-col items-center gap-2 text-warm-ivory/45 transition-[color,transform] duration-300 hover:text-warm-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lion-gold/60 motion-reduce:transition-none",
        className,
      )}>
      <span className="text-[10px] font-black uppercase tracking-widest">
        {label}
      </span>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/25 transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transition-none">
        <ChevronDownIcon className="h-4 w-4" />
      </span>
    </a>
  );
}