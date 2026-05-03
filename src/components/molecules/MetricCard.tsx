import {
  GlobeIcon,
  SmartphoneIcon,
  TerminalIcon,
} from "@/components/atoms/Icons";

type MetricCardProps = {
  icon: "terminal" | "globe" | "smartphone";
  title: string;
  description: string;
  metric: string;
  caption: string;
  accentClassName: string;
  borderClassName: string;
};

function MetricIcon({
  icon,
  className,
}: {
  icon: MetricCardProps["icon"];
  className: string;
}) {
  switch (icon) {
    case "terminal":
      return <TerminalIcon className={className} />;
    case "globe":
      return <GlobeIcon className={className} />;
    default:
      return <SmartphoneIcon className={className} />;
  }
}

export function MetricCard({
  icon,
  title,
  description,
  metric,
  caption,
  accentClassName,
  borderClassName,
}: MetricCardProps) {
  return (
    <div
      className={`group min-w-0 rounded-4xl border border-white/10 bg-white/5 p-8 transition-all sm:p-10 xl:rounded-[2.5rem] xl:p-12 ${borderClassName}`}>
      <MetricIcon
        icon={icon}
        className={`mb-6 h-10 w-10 transition-transform group-hover:scale-110 sm:mb-8 sm:h-12 sm:w-12 ${accentClassName}`}
      />
      <h4 className="mb-5 text-2xl text-warm-ivory sm:mb-6 sm:text-3xl">
        {title}
      </h4>
      <p className="mb-8 max-w-md text-sm leading-7 text-warm-ivory/40">
        {description}
      </p>
      <div className={`text-3xl sm:text-4xl ${accentClassName}`}>{metric}</div>
      <div className="mt-2 text-[10px] font-black uppercase tracking-widest opacity-20">
        {caption}
      </div>
    </div>
  );
}
