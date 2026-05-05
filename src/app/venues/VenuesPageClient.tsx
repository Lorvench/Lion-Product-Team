"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { MapPinIcon, MartiniIcon } from "@/components/atoms/Icons";
import type { SiteContent } from "@/lib/site-content";

type VenuesPageClientProps = {
  siteContent: SiteContent;
};

export function VenuesPageClient({ siteContent }: VenuesPageClientProps) {
  const { venuesPage, venueItems } = siteContent;

  const heroEyebrow = venuesPage.eyebrow?.trim() || "The Portfolio";
  const heroTitleLead = venuesPage.titleLead?.trim() || "Seven spaces.";
  const heroTitleAccent = venuesPage.titleAccent?.trim() || "Every occasion.";
  const heroBody =
    "Whether you're planning a night out, a celebration, a meeting, or a weekend afternoon - there's a Lion venue for it.";
  const closingCtaLead = "Ready to experience";
  const closingCtaAccent = "the Lion standard?";
  const closingCtaBody =
    "Integrated directly into the Lion ecosystem. No intermediaries. Just the table you want.";

  const allCategoryLabel = venuesPage.allFilterLabel.trim() || "All";
  const filterLabel = venuesPage.filterLabel?.trim() || "Filter By:";

  const heroPanels = useMemo(() => {
    const images = venueItems
      .map((item) => item.image?.trim())
      .filter((image): image is string => Boolean(image));

    if (images.length === 0) {
      return [];
    }

    return Array.from(
      { length: 4 },
      (_, index) => images[index % images.length],
    );
  }, [venueItems]);

  const configuredFilters = useMemo(() => {
    const filters = venuesPage.filterOptions
      ?.map((filter, index) => {
        const label = filter.label?.trim();

        if (!label) {
          return null;
        }

        return {
          id: `configured-${index}`,
          label,
          categories:
            filter.categories
              ?.map((category) => category?.trim())
              .filter((category): category is string => Boolean(category)) ??
            [],
        };
      })
      .filter(
        (
          filter,
        ): filter is { id: string; label: string; categories: string[] } =>
          Boolean(filter),
      );

    return filters?.length ? filters : [];
  }, [venuesPage.filterOptions]);

  const derivedFilters = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        venueItems
          .map((item) => item.category?.trim())
          .filter((category): category is string => Boolean(category)),
      ),
    );

    return uniqueCategories.map((category, index) => ({
      id: `derived-${index}`,
      label: category,
      categories: [category],
    }));
  }, [allCategoryLabel, venueItems]);

  const filters = useMemo(
    () => [
      { id: "all", label: allCategoryLabel, categories: [] },
      ...(configuredFilters.length ? configuredFilters : derivedFilters),
    ],
    [allCategoryLabel, configuredFilters, derivedFilters],
  );

  const [activeFilterId, setActiveFilterId] = useState("all");

  const activeFilter =
    filters.find((filter) => filter.id === activeFilterId) ?? filters[0];

  const filtered =
    activeFilterId === "all"
      ? venueItems
      : activeFilter.categories.length === 0
        ? venueItems
        : venueItems.filter((item) => {
            const category = item.category?.trim();

            return category
              ? activeFilter.categories.includes(category)
              : false;
          });

  return (
    <main className="flex-1 bg-warm-ivory text-deep-night">
      <section className="relative overflow-hidden bg-deep-night text-warm-ivory">
        <div className="absolute inset-0">
          {heroPanels.length > 0 ? (
            <div className="grid h-full grid-cols-2 md:grid-cols-4">
              {heroPanels.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative border-r border-white/6 last:border-r-0">
                  <Image
                    src={image}
                    alt="Venue collage"
                    fill
                    priority={index === 0}
                    sizes="25vw"
                    className="object-cover opacity-40"
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,46,0.72)_0%,rgba(10,26,46,0.84)_55%,rgba(10,26,46,0.94)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,244,214,0.04),transparent_48%)]" />
        </div>

        <Container className="relative z-10 flex min-h-144 flex-col items-center justify-end pb-14 pt-32 text-center md:min-h-168 md:pb-18 md:pt-36 lg:min-h-184 lg:pt-40">
          <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold md:mb-8">
            {heroEyebrow}
          </span>

          <h1 className="max-w-5xl text-[3.1rem] leading-[0.9] tracking-tighter text-balance sm:text-6xl md:text-[5rem] lg:text-[6.7rem]">
            <span className="block">{heroTitleLead}</span>
            <span className="block italic text-warm-ivory/38">
              {heroTitleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-warm-ivory/72 sm:text-lg md:mt-8 md:text-[1.35rem] md:leading-10">
            {heroBody}
          </p>
        </Container>
      </section>

      <section className="bg-warm-ivory py-12 md:py-16">
        <Container>
          <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-6">
            <span className="shrink-0 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.24em] text-deep-night/40 md:text-[11px]">
              {filterLabel}
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilterId(filter.id)}
                  className={
                    activeFilterId === filter.id
                      ? "h-11 whitespace-nowrap rounded-full bg-lion-gold px-6 text-[9px] font-black uppercase tracking-[0.18em] text-deep-night shadow-[0_20px_32px_-24px_rgba(208,139,16,0.9)] transition-all md:px-8 md:text-[10px]"
                      : "h-11 whitespace-nowrap rounded-full border border-deep-night/8 bg-white/72 px-6 text-[9px] font-black uppercase tracking-[0.18em] text-deep-night/40 transition-all hover:bg-white hover:text-deep-night md:px-8 md:text-[10px]"
                  }>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-warm-ivory pb-28 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((venue) => (
              <div key={venue.slug}>
                <a href={`/venues/${venue.slug}`} className="group block">
                  <div className="relative mb-8 aspect-3/2 overflow-hidden rounded-4xl bg-deep-night">
                    {venue.image && (
                      <Image
                        src={venue.image}
                        alt={venue.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-warm-ivory">
                        {venuesPage.exploreLabel}
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 max-w-sm text-sm font-medium leading-relaxed text-deep-night/60">
                    {venue.description}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a
                    href={`/venues/${venue.slug}`}
                    className="text-[10px] font-black uppercase tracking-widest text-deep-night transition-colors hover:text-lion-gold">
                    {venuesPage.primaryActionLabel}
                  </a>
                  <div className="h-4 w-px self-center bg-deep-night/10" />
                  <a
                    href="/contact"
                    className="text-[10px] font-black uppercase tracking-widest text-deep-night transition-colors hover:text-lion-gold">
                    {venuesPage.secondaryActionLabel}
                  </a>
                </div>
                {venue.location && (
                  <div className="mt-4 flex items-center gap-2">
                    <MapPinIcon className="h-3.5 w-3.5 text-deep-night/40" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-deep-night/40">
                      {venue.location}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/6 bg-deep-night py-24 text-center text-warm-ivory md:py-32">
        <MartiniIcon className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 text-warm-ivory/4 md:size-128" />

        <Container className="relative z-10 max-w-4xl">
          <h2 className="text-[2.5rem] leading-[0.95] tracking-tighter text-balance sm:text-5xl md:text-[4.5rem]">
            {closingCtaLead}
            <br />
            <span className="italic text-lion-gold">{closingCtaAccent}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-warm-ivory/60 md:mt-8 md:text-base md:leading-8">
            {closingCtaBody}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-12">
            <Button
              href="#footer"
              variant="gold"
              size="md"
              className="min-w-52 w-full sm:w-auto">
              Book a table now
            </Button>
            <Button
              href="#footer"
              variant="outline-light"
              size="md"
              className="min-w-52 w-full sm:w-auto">
              Corporate enquiry
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
