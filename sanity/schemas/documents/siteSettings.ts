// sanity/schemas/documents/siteSettings.ts
import { defineType, defineField } from "sanity";

const linkFields = [
  defineField({ name: "href", title: "URL / Path", type: "string" }),
  defineField({ name: "label", title: "Label", type: "string" }),
];

const hrefTitleFields = [
  defineField({ name: "href", title: "URL / Path", type: "string" }),
  defineField({ name: "title", title: "Title", type: "string" }),
];

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  groups: [
    { name: "brand", title: "Brand & Navigation" },
    { name: "header", title: "Header / Overlay" },
    { name: "footer", title: "Footer" },
    { name: "home", title: "Home Page" },
  ],

  fields: [
    // ── Brand ──────────────────────────────────────────────────────────────
    defineField({
      name: "siteBrand",
      title: "Logo Labels",
      type: "object",
      group: "brand",
      fields: [
        defineField({ name: "leftLabel", title: "Left Word", type: "string" }),
        defineField({
          name: "rightLabel",
          title: "Right Word",
          type: "string",
        }),
      ],
    }),

    // ── Navigation ─────────────────────────────────────────────────────────
    defineField({
      name: "siteNavigation",
      title: "Main Navigation",
      type: "array",
      group: "brand",
      of: [{ type: "object", fields: linkFields }],
    }),

    defineField({
      name: "siteVenueLinks",
      title: "Venue Quick Links",
      type: "array",
      group: "brand",
      of: [{ type: "object", fields: hrefTitleFields }],
    }),

    defineField({
      name: "siteGroupLinks",
      title: "Group Navigation Links",
      type: "array",
      group: "brand",
      of: [{ type: "object", fields: linkFields }],
    }),

    // ── Header extras ──────────────────────────────────────────────────────
    defineField({
      name: "siteHeaderExtras",
      title: "Header & Overlay Content",
      type: "object",
      group: "header",
      fields: [
        defineField({
          name: "menuCta",
          title: "Menu CTA Label",
          type: "string",
        }),
        defineField({
          name: "groupTitle",
          title: "Group Section Title",
          type: "string",
        }),
        defineField({
          name: "overlayMainDirLabel",
          title: "Overlay — Directories Label",
          type: "string",
        }),
        defineField({
          name: "overlayVenuesLabel",
          title: "Overlay — Venues Label",
          type: "string",
        }),
        defineField({
          name: "overlayCrmHeading",
          title: "Overlay — CRM Heading",
          type: "string",
        }),
        defineField({
          name: "overlayCrmAction",
          title: "Overlay — CRM Button Label",
          type: "string",
        }),
        defineField({
          name: "contact",
          title: "Contact Info",
          type: "object",
          fields: [
            defineField({
              name: "eyebrow",
              title: "Eyebrow / Label",
              type: "string",
            }),
            defineField({
              name: "primary",
              title: "Primary Contact (Phone)",
              type: "string",
            }),
            defineField({
              name: "secondary",
              title: "Secondary Contact (Email)",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "footerLinks",
          title: "Overlay Footer Links",
          type: "array",
          of: [{ type: "object", fields: linkFields }],
        }),
        defineField({
          name: "copyright",
          title: "Copyright Line",
          type: "string",
        }),
      ],
    }),

    // ── Footer ─────────────────────────────────────────────────────────────
    defineField({
      name: "siteFooter",
      title: "Footer Content",
      type: "object",
      group: "footer",
      fields: [
        defineField({ name: "tagline", title: "Tagline", type: "string" }),
        defineField({
          name: "crmLabel",
          title: "Newsletter Label",
          type: "string",
        }),
        defineField({
          name: "crmHeading",
          title: "Newsletter Heading",
          type: "string",
        }),
        defineField({
          name: "crmEmailPlaceholder",
          title: "Email Input Placeholder",
          type: "string",
        }),
        defineField({
          name: "directoriesTitle",
          title: "Directories Column Title",
          type: "string",
        }),
        defineField({
          name: "portfolioTitle",
          title: "Portfolio Column Title",
          type: "string",
        }),
        defineField({
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "platform",
                  title: "Platform (instagram / twitter / linkedin)",
                  type: "string",
                }),
                defineField({ name: "href", title: "URL", type: "string" }),
              ],
            },
          ],
        }),
        defineField({
          name: "bottomLinks",
          title: "Bottom Bar Links",
          type: "array",
          of: [{ type: "object", fields: linkFields }],
        }),
        defineField({
          name: "copyright",
          title: "Copyright Line",
          type: "string",
        }),
      ],
    }),

    // ── Home Page ──────────────────────────────────────────────────────────
    defineField({
      name: "homeData",
      title: "Home Page",
      type: "object",
      group: "home",
      fields: [
        // Hero
        defineField({
          name: "hero",
          title: "Hero Section",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Eyebrow Label",
              type: "string",
            }),
            defineField({
              name: "titleLead",
              title: "Title — First Line",
              type: "string",
            }),
            defineField({
              name: "titleAccent",
              title: "Title — Accent Line",
              type: "string",
            }),
            defineField({ name: "body", title: "Body Copy", type: "text" }),
            defineField({
              name: "primaryCta",
              title: "Primary CTA Label",
              type: "string",
            }),
            defineField({
              name: "secondaryCta",
              title: "Secondary CTA Label",
              type: "string",
            }),
            defineField({
              name: "scrollLabel",
              title: "Scroll Indicator Label",
              type: "string",
            }),
          ],
        }),

        // Market Signal
        defineField({
          name: "marketSignal",
          title: "Market Signal Section",
          type: "object",
          fields: [
            defineField({ name: "badge", title: "Badge Text", type: "string" }),
            defineField({ name: "title", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Copy", type: "text" }),
            defineField({
              name: "chips",
              title: "Signal Chips",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),

        // Capabilities (heading only — cards come from Service docs)
        defineField({
          name: "capabilities",
          title: "Capabilities Section",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Eyebrow Label",
              type: "string",
            }),
            defineField({ name: "title", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Copy", type: "text" }),
          ],
        }),

        // Portfolio (heading only — cards come from Property docs)
        defineField({
          name: "portfolio",
          title: "Portfolio Section",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Eyebrow Label",
              type: "string",
            }),
            defineField({ name: "title", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Copy", type: "text" }),
            defineField({ name: "action", title: "CTA Label", type: "string" }),
          ],
        }),

        // Market Thesis
        defineField({
          name: "marketThesis",
          title: "Market Thesis Section",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Eyebrow Label",
              type: "string",
            }),
            defineField({ name: "title", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Copy", type: "text" }),
            defineField({
              name: "thesisBullets",
              title: "Thesis Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "featuredEyebrow",
              title: "Featured Card Eyebrow",
              type: "string",
            }),
            defineField({
              name: "featuredTitle",
              title: "Featured Card Title",
              type: "string",
            }),
            defineField({
              name: "featuredBody",
              title: "Featured Card Body",
              type: "text",
            }),
            defineField({
              name: "bullets",
              title: "Featured Card Bullets",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),

        // Technology — heading + 3 metric cards
        defineField({
          name: "technology",
          title: "Technology Section",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Eyebrow Label",
              type: "string",
            }),
            defineField({
              name: "titleLead",
              title: "Title — First Part",
              type: "string",
            }),
            defineField({
              name: "titleAccent",
              title: "Title — Accent Part",
              type: "string",
            }),
            defineField({ name: "body", title: "Body Copy", type: "text" }),
            defineField({ name: "action", title: "CTA Label", type: "string" }),
            defineField({
              name: "cards",
              title: "Technology Cards (3)",
              type: "array",
              validation: (Rule) => Rule.max(3),
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "string",
                      description: "Choose: terminal, globe, or smartphone",
                      options: {
                        list: [
                          { title: "Terminal (code)", value: "terminal" },
                          { title: "Globe (web)", value: "globe" },
                          { title: "Smartphone (app)", value: "smartphone" },
                        ],
                      },
                    }),
                    defineField({
                      name: "title",
                      title: "Card Title",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Card Description",
                      type: "text",
                    }),
                    defineField({
                      name: "metric",
                      title: "Big Metric (e.g. 99%)",
                      type: "string",
                    }),
                    defineField({
                      name: "caption",
                      title: "Metric Caption",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        }),

        // Group Story
        defineField({
          name: "groupStory",
          title: "Group Story Section",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Eyebrow Label",
              type: "string",
            }),
            defineField({ name: "title", title: "Heading", type: "string" }),
            defineField({ name: "action", title: "CTA Label", type: "string" }),
            defineField({
              name: "stats",
              title: "Stats",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "value",
                      title: "Value (e.g. 7+)",
                      type: "string",
                    }),
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        }),

        // Closing CTA
        defineField({
          name: "closingCta",
          title: "Closing CTA Section",
          type: "object",
          fields: [
            defineField({
              name: "titleLead",
              title: "Title — First Line",
              type: "string",
            }),
            defineField({
              name: "titleAccent",
              title: "Title — Accent Line",
              type: "string",
            }),
            defineField({
              name: "primaryCta",
              title: "Primary CTA Label",
              type: "string",
            }),
            defineField({
              name: "secondaryCta",
              title: "Secondary CTA Label",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: { title: "siteBrand.leftLabel" },
    prepare: ({ title }) => ({
      title: title ? `Site Settings — ${title}` : "Site Settings",
    }),
  },
});
