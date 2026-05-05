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

const navigation = [
  { href: "#portfolio", label: placeholder() },
  { href: "#capabilities", label: placeholder() },
  { href: "#technology", label: placeholder() },
  { href: "#group", label: placeholder() },
];

const groupSubLinks = [
  { href: "#group", label: placeholder(2) },
  { href: "#group", label: placeholder(2) },
  { href: "#group", label: placeholder() },
  { href: "#group", label: placeholder() },
  { href: "#group", label: placeholder(2) },
  { href: "#group", label: placeholder() },
  { href: "#group", label: placeholder() },
  { href: "#group", label: placeholder(2) },
  { href: "#group", label: placeholder() },
];

const capabilityCards: Array<{
  icon: "chart" | "building" | "sparkles" | "store";
  title: string;
  description: string;
}> = [
  { icon: "chart", title: placeholder(4), description: placeholder(15) },
  { icon: "building", title: placeholder(4), description: placeholder(16) },
  { icon: "sparkles", title: placeholder(5), description: placeholder(15) },
  { icon: "store", title: placeholder(3), description: placeholder(15) },
];

const technologyCards: Array<{
  icon: "terminal" | "globe" | "smartphone";
  title: string;
  description: string;
  metric: string;
  caption: string;
  accentClassName: string;
  borderClassName: string;
}> = [
  {
    icon: "terminal",
    title: placeholder(2),
    description: placeholder(11),
    metric: placeholder(),
    caption: placeholder(2),
    accentClassName: "text-lion-gold",
    borderClassName: "hover:border-lion-gold",
  },
  {
    icon: "globe",
    title: placeholder(2),
    description: placeholder(11),
    metric: placeholder(),
    caption: placeholder(2),
    accentClassName: "text-forest-green",
    borderClassName: "hover:border-forest-green",
  },
  {
    icon: "smartphone",
    title: placeholder(2),
    description: placeholder(11),
    metric: placeholder(),
    caption: placeholder(2),
    accentClassName: "text-teal-mint",
    borderClassName: "hover:border-teal-mint",
  },
];

const portfolioItems = [
  {
    href: "#portfolio",
    image: "/lion/wave-beach.jpg",
    category: placeholder(2),
    title: placeholder(2),
    description: placeholder(14),
    primaryAction: "View Venue",
    secondaryAction: "Enquire Now",
    badgeClassName: "bg-lion-gold text-white",
  },
  {
    href: "#portfolio",
    image: "/lion/athena-beach.jpg",
    category: placeholder(2),
    title: placeholder(2),
    description: placeholder(14),
    primaryAction: "View Venue",
    secondaryAction: "Enquire Now",
    badgeClassName: "bg-teal-mint text-deep-night",
  },
  {
    href: "#portfolio",
    image: "/lion/kyma-beach.jpg",
    category: placeholder(2),
    title: placeholder(2),
    description: placeholder(13),
    primaryAction: "View Venue",
    secondaryAction: "Enquire Now",
    badgeClassName: "bg-forest-green text-white",
  },
  {
    href: "#portfolio",
    image: "/lion/unda-lounge.jpg",
    category: placeholder(2),
    title: placeholder(2),
    description: placeholder(13),
    primaryAction: "View Venue",
    secondaryAction: "Enquire Now",
    badgeClassName: "bg-sky-600 text-white",
  },
  {
    href: "#portfolio",
    image: "/lion/lion-wonder-arena.jpg",
    category: placeholder(2),
    title: placeholder(3),
    description: placeholder(14),
    primaryAction: "View Venue",
    secondaryAction: "Enquire Now",
    badgeClassName: "bg-amber-warm text-deep-night",
  },
  {
    href: "#portfolio",
    image: "/lion/doo-shima-beach-house.jpg",
    category: placeholder(3),
    title: placeholder(3),
    description: placeholder(13),
    primaryAction: "View Venue",
    secondaryAction: "Enquire Now",
    badgeClassName: "bg-white text-deep-night",
  },
];

export const homeData = {
  brand: {
    leftLabel: placeholder(),
    rightLabel: placeholder(),
  },
  header: {
    cta: placeholder(2),
    groupTitle: placeholder(2),
    overlayCrmHeading: placeholder(3),
    overlayCrmAction: placeholder(3),
  },
  navigation,
  hero: {
    label: placeholder(2),
    titleLead: placeholder(4),
    titleAccent: placeholder(5),
    body: placeholder(24),
    primaryCta: placeholder(2),
    secondaryCta: placeholder(2),
    scrollLabel: placeholder(),
    image: "/lion/hero-lagos-lifestyle.jpg",
  },
  marketSignal: {
    badge: placeholder(5),
    title: placeholder(8),
    body: placeholder(12),
    chips: [placeholder(4), placeholder(3), placeholder(3), placeholder(3)],
  },
  capabilities: {
    label: placeholder(3),
    title: placeholder(6),
    body: placeholder(18),
    cards: capabilityCards,
  },
  portfolio: {
    label: placeholder(3),
    title: placeholder(8),
    body: placeholder(16),
    action: placeholder(2),
    items: portfolioItems,
  },
  marketThesis: {
    label: placeholder(2),
    title: placeholder(6),
    body: placeholder(24),
    thesisBullets: [
      placeholder(12),
      placeholder(9),
      placeholder(10),
      placeholder(9),
    ],
    featuredEyebrow: placeholder(3),
    featuredTitle: placeholder(2),
    featuredBody: placeholder(20),
    bullets: [placeholder(6), placeholder(7), placeholder(6)],
  },
  technology: {
    label: placeholder(3),
    titleLead: placeholder(2),
    titleAccent: placeholder(),
    body: placeholder(12),
    action: placeholder(3),
    cards: technologyCards,
  },
  groupStory: {
    label: placeholder(3),
    title: placeholder(6),
    action: placeholder(3),
    stats: [
      { value: placeholder(), label: placeholder(2) },
      { value: placeholder(), label: placeholder(2) },
      { value: placeholder(), label: placeholder(2) },
      { value: placeholder(), label: placeholder(2) },
    ],
  },
  closingCta: {
    titleLead: placeholder(4),
    titleAccent: placeholder(2),
    primaryCta: placeholder(3),
    secondaryCta: placeholder(),
  },
  footer: {
    tagline: placeholder(5),
    crmLabel: placeholder(2),
    crmHeading: placeholder(5),
    crmEmailPlaceholder: placeholder(2),
    directoriesTitle: placeholder(),
    portfolioTitle: placeholder(2),
    contact: {
      eyebrow: placeholder(3),
      primary: placeholder(2),
      secondary: placeholder(4),
    },
    bottomLinks: [placeholder(), placeholder()],
    copyright: placeholder(6),
  },
  groupLinks: groupSubLinks,
};
