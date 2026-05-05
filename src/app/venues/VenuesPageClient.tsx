"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MapPinIcon } from "@/components/atoms/Icons";
import type { SiteContent } from "@/lib/site-content";

type VenuesPageClientProps = {
  siteContent: SiteContent;
};

export function VenuesPageClient({ siteContent }: VenuesPageClientProps) {
  const {
    venuesPage,
    venueItems,
  } = siteContent;

  const allCategoryLabel = venuesPage.allFilterLabel.trim() || "All";
  const filterLabel = venuesPage.filterLabel?.trim() || "Filter By:";

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
      <main className="flex-1 min-h-screen bg-warm-ivory pt-40 text-deep-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-8 block text-lion-gold">
              {venuesPage.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter text-deep-night">
              {venuesPage.titleLead}
              <br />
              <span className="italic opacity-40">
                {venuesPage.titleAccent}
              </span>
            </h1>
          </div>

          <div className="mx-auto mb-28 mt-20 max-w-[50%] md:mb-32 md:mt-28">
            <div className="flex flex-row flex-nowrap items-center justify-center gap-4 md:gap-6">
              <span className="shrink-0 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.24em] text-deep-night/40 md:text-[11px]">
                {filterLabel}
              </span>
              <div className="flex flex-nowrap justify-center gap-2 md:gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilterId(filter.id)}
                    className={
                      activeFilterId === filter.id
                        ? "h-9 whitespace-nowrap rounded-full bg-lion-gold px-4 text-[8px] font-black uppercase tracking-[0.18em] text-deep-night shadow-[0_20px_32px_-24px_rgba(208,139,16,0.9)] transition-all md:h-10 md:px-5 md:text-[9px]"
                        : "h-9 whitespace-nowrap rounded-full border border-deep-night/8 bg-white/70 px-4 text-[8px] font-black uppercase tracking-[0.18em] text-deep-night/40 transition-all hover:bg-white hover:text-deep-night md:h-10 md:px-5 md:text-[9px]"
                    }>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24 mb-40">
            {filtered.map((venue) => (
              <div key={venue.slug}>
                <a href={`/venues/${venue.slug}`} className="group block">
                  <div className="relative aspect-3/2 overflow-hidden rounded-4xl mb-8 bg-deep-night">
                    {venue.image && (
                      <Image
                        src={venue.image}
                        alt={venue.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                      <span className="text-warm-ivory text-[10px] font-black tracking-widest uppercase">
                        {venuesPage.exploreLabel}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-deep-night/60 font-sans font-medium leading-relaxed mb-8 max-w-sm">
                    {venue.description}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a
                    href={`/venues/${venue.slug}`}
                    className="text-[10px] font-black tracking-widest uppercase text-deep-night hover:text-lion-gold transition-colors">
                    {venuesPage.primaryActionLabel}
                  </a>
                  <div className="w-px h-4 bg-deep-night/10 self-center" />
                  <a
                    href="/contact"
                    className="text-[10px] font-black tracking-widest uppercase text-deep-night hover:text-lion-gold transition-colors">
                    {venuesPage.secondaryActionLabel}
                  </a>
                </div>
                {venue.location && (
                  <div className="mt-4 flex items-center gap-2">
                    <MapPinIcon className="h-3.5 w-3.5 text-deep-night/40" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-deep-night/40">
                      {venue.location}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}
