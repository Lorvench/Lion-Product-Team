import { Container } from "@/components/atoms/Container";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { PortfolioCard } from "@/components/molecules/PortfolioCard";

type PortfolioSectionProps = {
  portfolio: {
    label: string;
    title: string;
    body: string;
    action: string;
    items: Array<{
      href: string;
      image: string;
      category: string;
      title: string;
      description: string;
      primaryAction: string;
      secondaryAction: string;
      badgeClassName: string;
    }>;
  };
};

export function PortfolioSection({ portfolio }: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 overflow-hidden bg-warm-ivory py-40 md:scroll-mt-28">
      <Container>
        <SectionHeading
          label={portfolio.label}
          title={portfolio.title}
          description={portfolio.body}
          actionLabel={portfolio.action}
          actionHref="#group"
          className="mb-20"
        />

        <div className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.items.map((item, index) => (
            <PortfolioCard
              key={`portfolio-item-${index}`}
              href={item.href}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
              primaryAction={item.primaryAction}
              secondaryAction={item.secondaryAction}
              badgeClassName={item.badgeClassName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
