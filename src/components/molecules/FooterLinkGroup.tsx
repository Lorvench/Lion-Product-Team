import { Eyebrow } from "@/components/atoms/Eyebrow";
import { NavItem } from "@/components/molecules/NavItem";

type FooterLinkGroupProps = {
  title: string;
  items: Array<{
    href: string;
    label: string;
  }>;
  className?: string;
  linkClassName?: string;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function FooterLinkGroup({
  title,
  items,
  className,
  linkClassName,
}: FooterLinkGroupProps) {
  return (
    <div className={classNames("min-w-0 space-y-5", className)}>
      <Eyebrow className="text-lion-gold/90">{title}</Eyebrow>
      <div className="flex flex-col items-start gap-4 sm:gap-5">
        {items.map((item) => (
          <NavItem
            key={`${item.href}-${item.label}`}
            href={item.href}
            label={item.label}
            inverted
            className={linkClassName}
          />
        ))}
      </div>
    </div>
  );
}