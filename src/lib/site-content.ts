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
    })
  : null;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const mergeWithFallback = <T>(fallback: T, value: unknown): T => {
  if (value === undefined || value === null) {
    return fallback;
  }

  if (Array.isArray(fallback)) {
    if (!Array.isArray(value)) {
      return fallback;
    }

    if (fallback.length === 0 || value.length === 0) {
      return (value.length === 0 ? fallback : value) as T;
    }

    const template = fallback[0];

    if (isPlainObject(template)) {
      return value.map((item, index) => {
        const itemFallback = (fallback[index] ?? template) as typeof template;

        return mergeWithFallback(itemFallback, item);
      }) as T;
    }

    return value as T;
  }

  if (isPlainObject(fallback)) {
    if (!isPlainObject(value)) {
      return fallback;
    }

    const merged: Record<string, unknown> = { ...fallback };

    for (const key of Object.keys(value)) {
      const fallbackRecord = fallback as Record<string, unknown>;

      merged[key] = Object.prototype.hasOwnProperty.call(fallbackRecord, key)
        ? mergeWithFallback(fallbackRecord[key], value[key])
        : value[key];
    }

    return merged as T;
  }

  return value as T;
};

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!client) {
    return fallbackSiteContent;
  }

  try {
    const siteContent = await client.fetch<Record<string, unknown> | null>(
      '*[_type == "siteSettings"][0]',
    );

    if (!siteContent) {
      return fallbackSiteContent;
    }

    return mergeWithFallback(fallbackSiteContent, siteContent);
  } catch {
    return fallbackSiteContent;
  }
});