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

// ---------------------------------------------------------------------------
// Sanity image URL resolver — works with any version of @sanity/image-url
// by requiring it at runtime so import errors don't break the module graph.
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
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

const badgeClasses = [
  "bg-lion-gold text-white",
  "bg-teal-mint text-deep-night",
  "bg-forest-green text-white",
  "bg-sky-600 text-white",
  "bg-amber-warm text-deep-night",
  "bg-white text-deep-night",
];

// ---------------------------------------------------------------------------
// Main data fetcher
// ---------------------------------------------------------------------------
export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!client) {
    console.warn("⚠️  Sanity not configured — using fallback data.");
    return fallbackSiteContent;
  }

  try {
    const [settings, properties, services] = await Promise.all([
      client.fetch<Record<string, unknown> | null>(
        '*[_type == "siteSettings"][0]',
      ),
      client.fetch<Array<Record<string, unknown>>>(
        '*[_type == "property"] | order(_createdAt asc)',
      ),
      client.fetch<Array<Record<string, unknown>>>(
        '*[_type == "service"]  | order(_createdAt asc)',
      ),
    ]);

    console.log("📡 Sanity Project ID:", projectId);
    console.log("🏢 siteSettings fields:", Object.keys(settings ?? {}));
    console.log("🏖️  properties:", properties?.length ?? 0, "docs");
    console.log("⚙️  services:", services?.length ?? 0, "docs");

    const s = settings ?? {};

    // ── siteBrand ────────────────────────────────────────────────────────────
    const sb = s.siteBrand as Record<string, unknown> | undefined;
    const mergedBrand = {
      leftLabel: str(sb?.leftLabel) ?? siteBrand.leftLabel,
      rightLabel: str(sb?.rightLabel) ?? siteBrand.rightLabel,
    };

    // ── navigation ───────────────────────────────────────────────────────────
    const mergedNav = mapLinks(s.siteNavigation) ?? siteNavigation;
    const mergedVenueLinks = mapTitleLinks(s.siteVenueLinks) ?? siteVenueLinks;
    const mergedGroupLinks = mapLinks(s.siteGroupLinks) ?? siteGroupLinks;

    // ── header extras ────────────────────────────────────────────────────────
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

    // ── footer ───────────────────────────────────────────────────────────────
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

    // ── homeData helper ──────────────────────────────────────────────────────
    const hd = s.homeData as Record<string, unknown> | undefined;

    function homeSection<T extends Record<string, unknown>>(
      key: string,
      fallback: T,
    ): T {
      const section = hd?.[key] as Record<string, unknown> | undefined;
      if (!section) return fallback;
      const result = { ...fallback };
      for (const k of Object.keys(fallback)) {
        const v = section[k];
        if (typeof v === "string" && v.trim()) {
          (result as Record<string, unknown>)[k] = v.trim();
        } else if (Array.isArray(v) && v.length > 0) {
          (result as Record<string, unknown>)[k] = v;
        }
      }
      return result;
    }

    // ── properties → venueItems (venues page) ────────────────────────────────
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

    // ── properties → portfolio cards (home page) ─────────────────────────────
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

    // ── services → capability cards ──────────────────────────────────────────
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

    const mergedCapabilityCards = services?.length
      ? services.map((sv, i) => {
          const fb = capabilityCards[i] ?? capabilityCards[0];
          return {
            title: str(sv.title) ?? fb.title,
            description: str(sv.description) ?? fb.description,
          };
        })
      : capabilityCards;

    // ── technology cards ─────────────────────────────────────────────────────
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

    // ── assemble homeData ────────────────────────────────────────────────────
    const mergedHomeData = {
      ...homeData,
      hero: homeSection("hero", homeData.hero),
      marketSignal: homeSection("marketSignal", homeData.marketSignal),
      capabilities: {
        ...homeSection("capabilities", homeData.capabilities),
        cards: homeCapCards,
      },
      portfolio: {
        ...homeSection("portfolio", homeData.portfolio),
        items: portfolioItems,
      },
      marketThesis: homeSection("marketThesis", homeData.marketThesis),
      technology: {
        ...homeSection("technology", homeData.technology),
        cards: technologyCards,
      },
      groupStory: homeSection("groupStory", homeData.groupStory),
      closingCta: homeSection("closingCta", homeData.closingCta),
    };

    return {
      siteBrand: mergedBrand,
      siteNavigation: mergedNav,
      siteVenueLinks: mergedVenueLinks,
      siteGroupLinks: mergedGroupLinks,
      siteHeaderExtras: mergedHeaderExtras,
      siteFooter: mergedFooter,
      homeData: mergedHomeData,
      venuesPage,
      venueItems: mergedVenueItems,
      capabilitiesPage,
      capabilityCards: mergedCapabilityCards,
      valueSteps,
      growthPage,
      growthPlayItems,
      growthWhyNowItems,
      aboutPage,
      beliefItems,
      leadershipCards,
    };
  } catch (err) {
    console.error("❌ Sanity fetch error:", err);
    return fallbackSiteContent;
  }
});
