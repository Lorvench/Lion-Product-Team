/** Fallback placeholder data used until Sanity content is available. */

const placeholder = (count = 1) => {
  if (count <= 1) {
    return "Placeholder";
  }

  if (count <= 3) {
    return "Placeholder text";
  }

  if (count <= 8) {
    return "Placeholder copy";
  }

  return "Placeholder body copy";
};

export const siteBrand = {
  leftLabel: placeholder(1),
  rightLabel: placeholder(1),
};

export const siteNavigation = [
  { href: "/venues", label: placeholder(1) },
  { href: "/capabilities", label: placeholder(1) },
  { href: "/growth", label: placeholder(1) },
  { href: "/group/about", label: placeholder(1) },
];

export const siteVenueLinks = [
  { href: "/venues/wave-beach", title: placeholder(2) },
  { href: "/venues/athena", title: placeholder(2) },
  { href: "/venues/kyma", title: placeholder(2) },
  { href: "/venues/unda", title: placeholder(2) },
  { href: "/venues/lion-wonder-arena", title: placeholder(3) },
  { href: "/venues/doo-shima", title: placeholder(4) },
  { href: "/venues/tantalizers", title: placeholder(1) },
];

export const siteGroupLinks = [
  { href: "/group/about", label: placeholder(2) },
  { href: "/group/vision", label: placeholder(2) },
  { href: "/group/careers", label: placeholder(1) },
  { href: "/capabilities", label: placeholder(1) },
  { href: "/growth", label: placeholder(3) },
  { href: "/press", label: placeholder(1) },
  { href: "/contact", label: placeholder(1) },
];

export const siteHeaderExtras = {
  menuCta: placeholder(3),
  groupTitle: placeholder(2),
  overlayMainDirLabel: placeholder(2),
  overlayVenuesLabel: placeholder(2),
  overlayCrmHeading: placeholder(5),
  overlayCrmAction: placeholder(1),
  contact: {
    eyebrow: placeholder(3),
    primary: placeholder(2),
    secondary: placeholder(4),
  },
  footerLinks: [
    { label: placeholder(2), href: "#footer" },
    { label: placeholder(1), href: "#footer" },
  ],
  copyright: placeholder(8),
};

export const siteFooter = {
  tagline: placeholder(6),
  crmLabel: placeholder(2),
  crmHeading: placeholder(5),
  crmEmailPlaceholder: placeholder(2),
  directoriesTitle: placeholder(1),
  portfolioTitle: placeholder(3),
  socialLinks: [
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "linkedin", href: "#" },
  ],
  bottomLinks: [
    { label: placeholder(2), href: "#" },
    { label: placeholder(1), href: "#" },
  ],
  copyright: placeholder(8),
};

// ---------------------------------------------------------------------------
// Venues page
// ---------------------------------------------------------------------------

export type VenueCategory = string;

export const venuesPage = {
  eyebrow: placeholder(2),
  titleLead: placeholder(4),
  titleAccent: placeholder(4),
  filterLabel: "Filter By:",
  allFilterLabel: placeholder(1),
  filterOptions: [
    { label: placeholder(1), categories: ["Beach Club"] },
    { label: placeholder(1), categories: ["Entertainment"] },
    { label: placeholder(1), categories: ["Dining"] },
  ],
  exploreLabel: placeholder(1),
  primaryActionLabel: placeholder(2),
  secondaryActionLabel: placeholder(3),
};

export const venueItems: Array<{
  slug: string;
  title: string;
  category: VenueCategory;
  description: string;
  location: string;
  image: string;
}> = [
  {
    slug: "wave-beach",
    title: placeholder(2),
    category: "Beach Club",
    description: placeholder(14),
    location: placeholder(3),
    image: "/lion/wave-beach.jpg",
  },
  {
    slug: "athena",
    title: placeholder(2),
    category: "Beach Club",
    description: placeholder(14),
    location: placeholder(3),
    image: "/lion/athena-beach.jpg",
  },
  {
    slug: "kyma",
    title: placeholder(2),
    category: "Beach Club",
    description: placeholder(13),
    location: placeholder(3),
    image: "/lion/kyma-beach.jpg",
  },
  {
    slug: "unda",
    title: placeholder(2),
    category: "Entertainment",
    description: placeholder(13),
    location: placeholder(2),
    image: "/lion/unda-lounge.jpg",
  },
  {
    slug: "lion-wonder-arena",
    title: placeholder(3),
    category: "Entertainment",
    description: placeholder(14),
    location: placeholder(2),
    image: "/lion/lion-wonder-arena.jpg",
  },
  {
    slug: "doo-shima",
    title: placeholder(4),
    category: "Beach Club",
    description: placeholder(13),
    location: placeholder(2),
    image: "/lion/doo-shima-beach-house.jpg",
  },
  {
    slug: "tantalizers",
    title: placeholder(),
    category: "Dining",
    description: placeholder(14),
    location: placeholder(3),
    image: "",
  },
];

// ---------------------------------------------------------------------------
// Capabilities page
// ---------------------------------------------------------------------------

export const capabilitiesPage = {
  eyebrow: placeholder(1),
  titleLead: placeholder(5),
  titleAccent: placeholder(8),
  body: placeholder(22),
  valueEyebrow: placeholder(4),
  valueHeading: placeholder(6),
  valueBody: placeholder(20),
};

export const capabilityCards = [
  { title: placeholder(2), description: placeholder(20) },
  { title: placeholder(2), description: placeholder(18) },
  { title: placeholder(4), description: placeholder(18) },
  { title: placeholder(4), description: placeholder(20) },
  { title: placeholder(5), description: placeholder(18) },
  { title: placeholder(2), description: placeholder(16) },
];

export const valueSteps = [
  { step: placeholder(2), title: placeholder(5), description: placeholder(20) },
  { step: placeholder(2), title: placeholder(4), description: placeholder(16) },
  { step: placeholder(2), title: placeholder(3), description: placeholder(18) },
  { step: placeholder(2), title: placeholder(4), description: placeholder(18) },
];

// ---------------------------------------------------------------------------
// Growth page
// ---------------------------------------------------------------------------

export const growthPage = {
  eyebrow: placeholder(2),
  titleLead: placeholder(5),
  titleAccent: placeholder(5),
  body: placeholder(22),
  playHeading: placeholder(6),
  whyHeading: placeholder(2),
  featuredEyebrow: placeholder(2),
  featuredHeading: placeholder(8),
  featuredBody: placeholder(24),
  featuredCardEyebrow: placeholder(2),
  featuredCardHeading: placeholder(6),
  featuredCardCol2: placeholder(30),
  featuredCardCol3: placeholder(28),
  ctaLead: placeholder(4),
  ctaAccent: placeholder(2),
  ctaButton: placeholder(3),
};

export const growthPlayItems = [
  placeholder(5),
  placeholder(5),
  placeholder(6),
  placeholder(6),
  placeholder(6),
];

export const growthWhyNowItems = [
  placeholder(16),
  placeholder(16),
  placeholder(14),
];

// ---------------------------------------------------------------------------
// Group / About page
// ---------------------------------------------------------------------------

export const aboutPage = {
  eyebrow: placeholder(1),
  titleLead: placeholder(6),
  titleAccent: placeholder(7),
  body: placeholder(22),
  whoHeading: placeholder(3),
  whoBody1: placeholder(20),
  whoBody2: placeholder(22),
  whoBody3: placeholder(22),
  believeHeading: placeholder(3),
  leadershipEyebrow: placeholder(1),
  leadershipHeading: placeholder(14),
  leadershipBody: placeholder(16),
};

export const beliefItems = [
  placeholder(6),
  placeholder(7),
  placeholder(6),
  placeholder(8),
];

export const leadershipCards = [
  { role: placeholder(2), name: placeholder(2), bio: placeholder(18) },
  { role: placeholder(3), name: placeholder(2), bio: placeholder(16) },
  { role: placeholder(3), name: placeholder(2), bio: placeholder(16) },
];
