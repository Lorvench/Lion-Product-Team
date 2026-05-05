// src/lib/site-content.ts
import { cache } from "react";
import { createClient } from "@sanity/client";
import { homeData } from "@/data/home";
import {
  aboutPage,
  beliefItems,
  capabilitiesPage,
  capabilityCards,
  growthPage,
  growthPlayItems,
  growthWhyNowItems,
  leadershipCards,
  siteBrand,
  siteFooter,
  siteGroupLinks,
  siteHeaderExtras,
  siteNavigation,
  siteVenueLinks,
  valueSteps,
  venueItems,
  venuesPage,
} from "@/data/site";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-04";

const fallbackSiteContent = {
  siteBrand,
  siteNavigation,
  siteVenueLinks,
  siteGroupLinks,
  siteHeaderExtras,
  siteFooter,
  homeData,
  venuesPage,
  venueItems,
  capabilitiesPage,
  capabilityCards,
  valueSteps,
  growthPage,
  growthPlayItems,
  growthWhyNowItems,
  aboutPage,
  beliefItems,
  leadershipCards,
};

export type SiteContent = typeof fallbackSiteContent;

const isConfigured = Boolean(projectId && projectId !== "YOUR_PROJECT_ID");

const client = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;

function sanityImageUrl(source: unknown): string | undefined {
  if (!source || !projectId) return undefined;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pkg = require("@sanity/image-url");
    const builder = (pkg.default ?? pkg)({ projectId, dataset });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return builder
      .image(source as any)
      .auto("format")
      .width(1200)
      .url();
  } catch {
    return undefined;
  }
}

function str(val: unknown): string | undefined {
  if (typeof val === "string" && val.trim()) return val.trim();
  return undefined;
}

function arr<T>(val: unknown): T[] | undefined {
  if (Array.isArray(val) && val.length > 0) return val as T[];
  return undefined;
}

function mapLinks(
  val: unknown,
): Array<{ href: string; label: string }> | undefined {
  return arr<Record<string, unknown>>(val)
    ?.map((i) => ({ href: str(i.href) ?? "#", label: str(i.label) ?? "" }))
    .filter((l) => l.label !== "");
}

function mapTitleLinks(
  val: unknown,
): Array<{ href: string; title: string }> | undefined {
  return arr<Record<string, unknown>>(val)
    ?.map((i) => ({ href: str(i.href) ?? "#", title: str(i.title) ?? "" }))
    .filter((l) => l.title !== "");
}

// Merges every non-empty string/array field from a raw Sanity object onto a fallback
function mergeObj<T extends Record<string, unknown>>(
  fallback: T,
  raw: unknown,
): T {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return fallback;
  const src = raw as Record<string, unknown>;
  const result = { ...fallback };
  for (const k of Object.keys(fallback)) {
    const v = src[k];
    if (typeof v === "string" && v.trim()) {
      (result as Record<string, unknown>)[k] = v.trim();
    } else if (Array.isArray(v) && v.length > 0) {
      (result as Record<string, unknown>)[k] = v;
    }
  }
  return result;
}

const badgeClasses = [
  "bg-lion-gold text-white",
  "bg-teal-mint text-deep-night",
  "bg-forest-green text-white",
  "bg-sky-600 text-white",
  "bg-amber-warm text-deep-night",
  "bg-white text-deep-night",
];

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!client) {
    console.warn("⚠️  Sanity not configured — using fallback data.");
    return fallbackSiteContent;
  }

  try {
    // Fetch everything in parallel — siteSettings untouched, pages are separate docs
    const [
      settings,
      properties,
      services,
      venuesDoc,
      capabilitiesDoc,
      growthDoc,
      aboutDoc,
    ] = await Promise.all([
      client.fetch<Record<string, unknown> | null>(
        '*[_type == "siteSettings"][0]',
      ),
      client.fetch<Array<Record<string, unknown>>>(
        '*[_type == "property"] | order(_createdAt asc)',
      ),
      client.fetch<Array<Record<string, unknown>>>(
        '*[_type == "service"]  | order(_createdAt asc)',
      ),
      client.fetch<Record<string, unknown> | null>(
        '*[_type == "venuesPageContent"][0]',
      ),
      client.fetch<Record<string, unknown> | null>(
        '*[_type == "capabilitiesPageContent"][0]',
      ),
      client.fetch<Record<string, unknown> | null>(
        '*[_type == "growthPageContent"][0]',
      ),
      client.fetch<Record<string, unknown> | null>(
        '*[_type == "aboutPageContent"][0]',
      ),
    ]);

    console.log("📡 siteSettings fields:", Object.keys(settings ?? {}));
    console.log("🏖️  properties:", properties?.length ?? 0);
    console.log("⚙️  services:", services?.length ?? 0);
    console.log(
      "📄 page docs — venues:",
      !!venuesDoc,
      "caps:",
      !!capabilitiesDoc,
      "growth:",
      !!growthDoc,
      "about:",
      !!aboutDoc,
    );

    const s = settings ?? {};

    // ── siteBrand ─────────────────────────────────────────────────────────────
    const sb = s.siteBrand as Record<string, unknown> | undefined;
    const mergedBrand = {
      leftLabel: str(sb?.leftLabel) ?? siteBrand.leftLabel,
      rightLabel: str(sb?.rightLabel) ?? siteBrand.rightLabel,
    };

    // ── navigation ────────────────────────────────────────────────────────────
    const mergedNav = mapLinks(s.siteNavigation) ?? siteNavigation;
    const mergedVenueLinks = mapTitleLinks(s.siteVenueLinks) ?? siteVenueLinks;
    const mergedGroupLinks = mapLinks(s.siteGroupLinks) ?? siteGroupLinks;

    // ── header extras ─────────────────────────────────────────────────────────
    const he = s.siteHeaderExtras as Record<string, unknown> | undefined;
    const hc = he?.contact as Record<string, unknown> | undefined;
    const mergedHeaderExtras = {
      menuCta: str(he?.menuCta) ?? siteHeaderExtras.menuCta,
      groupTitle: str(he?.groupTitle) ?? siteHeaderExtras.groupTitle,
      overlayMainDirLabel:
        str(he?.overlayMainDirLabel) ?? siteHeaderExtras.overlayMainDirLabel,
      overlayVenuesLabel:
        str(he?.overlayVenuesLabel) ?? siteHeaderExtras.overlayVenuesLabel,
      overlayCrmHeading:
        str(he?.overlayCrmHeading) ?? siteHeaderExtras.overlayCrmHeading,
      overlayCrmAction:
        str(he?.overlayCrmAction) ?? siteHeaderExtras.overlayCrmAction,
      contact: {
        eyebrow: str(hc?.eyebrow) ?? siteHeaderExtras.contact.eyebrow,
        primary: str(hc?.primary) ?? siteHeaderExtras.contact.primary,
        secondary: str(hc?.secondary) ?? siteHeaderExtras.contact.secondary,
      },
      footerLinks: mapLinks(he?.footerLinks) ?? siteHeaderExtras.footerLinks,
      copyright: str(he?.copyright) ?? siteHeaderExtras.copyright,
    };

    // ── footer ────────────────────────────────────────────────────────────────
    const sf = s.siteFooter as Record<string, unknown> | undefined;
    const mergedFooter = {
      tagline: str(sf?.tagline) ?? siteFooter.tagline,
      crmLabel: str(sf?.crmLabel) ?? siteFooter.crmLabel,
      crmHeading: str(sf?.crmHeading) ?? siteFooter.crmHeading,
      crmEmailPlaceholder:
        str(sf?.crmEmailPlaceholder) ?? siteFooter.crmEmailPlaceholder,
      directoriesTitle:
        str(sf?.directoriesTitle) ?? siteFooter.directoriesTitle,
      portfolioTitle: str(sf?.portfolioTitle) ?? siteFooter.portfolioTitle,
      socialLinks:
        arr<Record<string, unknown>>(sf?.socialLinks)?.map((l) => ({
          platform: str(l.platform) ?? "",
          href: str(l.href) ?? "#",
        })) ?? siteFooter.socialLinks,
      bottomLinks:
        arr<Record<string, unknown>>(sf?.bottomLinks)?.map((l) => ({
          label: str(l.label) ?? "",
          href: str(l.href) ?? "#",
        })) ?? siteFooter.bottomLinks,
      copyright: str(sf?.copyright) ?? siteFooter.copyright,
    };

    // ── homeData ──────────────────────────────────────────────────────────────
    const hd = s.homeData as Record<string, unknown> | undefined;
    const icons = ["chart", "building", "sparkles", "store"] as const;

    const homeCapCards = services?.length
      ? services.slice(0, 4).map((sv, i) => {
          const fb =
            homeData.capabilities.cards[i] ?? homeData.capabilities.cards[0];
          return {
            icon: fb.icon ?? icons[i % 4],
            title: str(sv.title) ?? fb.title,
            description: str(sv.description) ?? fb.description,
          };
        })
      : homeData.capabilities.cards;

    const portfolioItems = properties?.length
      ? properties.map((p, i) => {
          const fb = homeData.portfolio.items[i] ?? homeData.portfolio.items[0];
          const img = sanityImageUrl(arr<unknown>(p.gallery)?.[0]) ?? fb.image;
          const slug =
            (p.slug as { current?: string } | undefined)?.current ??
            fb.href.replace("/venues/", "");
          return {
            href: `/venues/${slug}`,
            image: img,
            category: str(p.category) ?? fb.category,
            title: str(p.name) ?? fb.title,
            description: str(p.description) ?? fb.description,
            primaryAction: fb.primaryAction,
            secondaryAction: fb.secondaryAction,
            badgeClassName: badgeClasses[i % badgeClasses.length],
          };
        })
      : homeData.portfolio.items;

    const techSection = hd?.technology as Record<string, unknown> | undefined;
    const sanityTechCards = arr<Record<string, unknown>>(techSection?.cards);
    const technologyCards = sanityTechCards
      ? sanityTechCards.map((c, i) => {
          const fb =
            homeData.technology.cards[i] ?? homeData.technology.cards[0];
          return {
            icon:
              (str(c.icon) as "terminal" | "globe" | "smartphone") ?? fb.icon,
            title: str(c.title) ?? fb.title,
            description: str(c.description) ?? fb.description,
            metric: str(c.metric) ?? fb.metric,
            caption: str(c.caption) ?? fb.caption,
            accentClassName: fb.accentClassName,
            borderClassName: fb.borderClassName,
          };
        })
      : homeData.technology.cards;

    const mergedHomeData = {
      ...homeData,
      hero: mergeObj(homeData.hero, hd?.hero),
      marketSignal: mergeObj(homeData.marketSignal, hd?.marketSignal),
      capabilities: {
        ...mergeObj(homeData.capabilities, hd?.capabilities),
        cards: homeCapCards,
      },
      portfolio: {
        ...mergeObj(homeData.portfolio, hd?.portfolio),
        items: portfolioItems,
      },
      marketThesis: mergeObj(homeData.marketThesis, hd?.marketThesis),
      technology: {
        ...mergeObj(homeData.technology, hd?.technology),
        cards: technologyCards,
      },
      groupStory: mergeObj(homeData.groupStory, hd?.groupStory),
      closingCta: mergeObj(homeData.closingCta, hd?.closingCta),
    };

    // ── venueItems ────────────────────────────────────────────────────────────
    const mergedVenueItems = properties?.length
      ? properties.map((p, i) => {
          const fb = venueItems[i] ?? venueItems[0];
          const img = sanityImageUrl(arr<unknown>(p.gallery)?.[0]) ?? fb.image;
          return {
            slug:
              (p.slug as { current?: string } | undefined)?.current ?? fb.slug,
            title: str(p.name) ?? fb.title,
            category: str(p.category) ?? fb.category,
            description: str(p.description) ?? fb.description,
            location: str(p.location) ?? fb.location,
            image: img,
          };
        })
      : venueItems;

    // ── venuesPage — from its own document ────────────────────────────────────
    const vd = venuesDoc ?? {};
    const sanityFilterOptions = arr<Record<string, unknown>>(vd.filterOptions);
    const mergedVenuesPage = {
      eyebrow: str(vd.eyebrow) ?? venuesPage.eyebrow,
      titleLead: str(vd.titleLead) ?? venuesPage.titleLead,
      titleAccent: str(vd.titleAccent) ?? venuesPage.titleAccent,
      filterLabel: str(vd.filterLabel) ?? venuesPage.filterLabel,
      allFilterLabel: str(vd.allFilterLabel) ?? venuesPage.allFilterLabel,
      exploreLabel: str(vd.exploreLabel) ?? venuesPage.exploreLabel,
      primaryActionLabel:
        str(vd.primaryActionLabel) ?? venuesPage.primaryActionLabel,
      secondaryActionLabel:
        str(vd.secondaryActionLabel) ?? venuesPage.secondaryActionLabel,
      filterOptions: sanityFilterOptions
        ? sanityFilterOptions
            .map((f) => ({
              label: str(f.label) ?? "",
              categories: arr<string>(f.categories) ?? [],
            }))
            .filter((f) => f.label !== "")
        : venuesPage.filterOptions,
    };

    // ── capabilitiesPage — from its own document ──────────────────────────────
    const cd = capabilitiesDoc ?? {};
    const mergedCapabilitiesPage = mergeObj(capabilitiesPage, cd);
    const sanityValueSteps = arr<Record<string, unknown>>(cd.valueSteps);
    const mergedValueSteps = sanityValueSteps
      ? sanityValueSteps.map((vs, i) => {
          const fb = valueSteps[i] ?? valueSteps[0];
          return {
            step: str(vs.step) ?? fb.step,
            title: str(vs.title) ?? fb.title,
            description: str(vs.description) ?? fb.description,
          };
        })
      : valueSteps;

    // ── capabilityCards ───────────────────────────────────────────────────────
    const mergedCapabilityCards = services?.length
      ? services.map((sv, i) => {
          const fb = capabilityCards[i] ?? capabilityCards[0];
          return {
            title: str(sv.title) ?? fb.title,
            description: str(sv.description) ?? fb.description,
          };
        })
      : capabilityCards;

    // ── growthPage — from its own document ───────────────────────────────────
    const gd = growthDoc ?? {};
    const mergedGrowthPage = mergeObj(growthPage, gd);
    const mergedGrowthPlay = arr<string>(gd.playItems) ?? growthPlayItems;
    const mergedGrowthWhy = arr<string>(gd.whyItems) ?? growthWhyNowItems;

    // ── aboutPage — from its own document ────────────────────────────────────
    const ad = aboutDoc ?? {};
    const mergedAboutPage = mergeObj(aboutPage, ad);
    const mergedBeliefItems = arr<string>(ad.beliefItems) ?? beliefItems;
    const sanityLeadership = arr<Record<string, unknown>>(ad.leadershipCards);
    const mergedLeadership = sanityLeadership
      ? sanityLeadership.map((lc, i) => {
          const fb = leadershipCards[i] ?? leadershipCards[0];
          return {
            role: str(lc.role) ?? fb.role,
            name: str(lc.name) ?? fb.name,
            bio: str(lc.bio) ?? fb.bio,
          };
        })
      : leadershipCards;

    return {
      siteBrand: mergedBrand,
      siteNavigation: mergedNav,
      siteVenueLinks: mergedVenueLinks,
      siteGroupLinks: mergedGroupLinks,
      siteHeaderExtras: mergedHeaderExtras,
      siteFooter: mergedFooter,
      homeData: mergedHomeData,
      venuesPage: mergedVenuesPage,
      venueItems: mergedVenueItems,
      capabilitiesPage: mergedCapabilitiesPage,
      capabilityCards: mergedCapabilityCards,
      valueSteps: mergedValueSteps,
      growthPage: mergedGrowthPage,
      growthPlayItems: mergedGrowthPlay,
      growthWhyNowItems: mergedGrowthWhy,
      aboutPage: mergedAboutPage,
      beliefItems: mergedBeliefItems,
      leadershipCards: mergedLeadership,
    };
  } catch (err) {
    console.error("❌ Sanity fetch error:", err);
    return fallbackSiteContent;
  }
});
