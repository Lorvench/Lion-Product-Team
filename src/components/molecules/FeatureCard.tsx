import { IconFrame } from "@/components/atoms/IconFrame";
import {
  BuildingIcon,
  ChartLineIcon,
  SparklesIcon,
  StoreIcon,
} from "@/components/atoms/Icons";

type FeatureCardProps = {
  icon: "chart" | "building" | "sparkles" | "store";
  title: string;
  description: string;
};

function FeatureIcon({ icon }: Pick<FeatureCardProps, "icon">) {
  const className = "h-6 w-6";

  switch (icon) {
    case "chart":
      return <ChartLineIcon className={className} />;
    case "building":
      return <BuildingIcon className={className} />;
    case "sparkles":
      return <SparklesIcon className={className} />;
    default:
      return <StoreIcon className={className} />;
  }
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-[3rem] border border-deep-night/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl">
      <IconFrame className="mb-6 bg-lion-gold/10 text-lion-gold">
        <FeatureIcon icon={icon} />
      </IconFrame>
      <h3 className="mb-4 text-2xl text-deep-night">{title}</h3>
      <p className="text-sm leading-7 text-deep-night/60">{description}</p>
    </div>
  );
}
