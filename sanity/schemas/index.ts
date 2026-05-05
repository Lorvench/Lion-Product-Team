// sanity/schemas/index.ts
import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import property from "./documents/property";
import service from "./documents/service";
import inquiryType from "./documents/inquiryType";
import faq from "./documents/faq";
import {
  venuesPageContent,
  capabilitiesPageContent,
  growthPageContent,
  aboutPageContent,
} from "./documents/pageContents";

export const schemaTypes = [
  siteSettings,
  page,
  property,
  service,
  inquiryType,
  faq,
  venuesPageContent,
  capabilitiesPageContent,
  growthPageContent,
  aboutPageContent,
];
