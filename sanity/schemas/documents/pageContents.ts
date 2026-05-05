
import { defineType, defineField } from "sanity";

// ── Venues Page ──────────────────────────────────────────────────────────────
export const venuesPageContent = defineType({
  name: "venuesPageContent",
  title: "Venues Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow",     title: "Eyebrow Label",       type: "string" }),
    defineField({ name: "titleLead",   title: "Title — First Line",  type: "string" }),
    defineField({ name: "titleAccent", title: "Title — Accent Line", type: "string" }),
    defineField({ name: "filterLabel",          title: "Filter Label (e.g. Filter By:)",    type: "string" }),
    defineField({ name: "allFilterLabel",        title: "All Filter Label (e.g. All)",       type: "string" }),
    defineField({ name: "exploreLabel",          title: "Hover Explore Label",               type: "string" }),
    defineField({ name: "primaryActionLabel",    title: "Card Primary Action (e.g. View Venue)", type: "string" }),
    defineField({ name: "secondaryActionLabel",  title: "Card Secondary Action (e.g. Enquire)",  type: "string" }),
    defineField({
      name: "filterOptions", title: "Filter Options", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Filter Label", type: "string" }),
        defineField({
          name: "categories",
          title: "Categories (must match Property category exactly)",
          type: "array", of: [{ type: "string" }],
        }),
      ]}],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Venues Page" }),
  },
});

// ── Capabilities Page ─────────────────────────────────────────────────────────
export const capabilitiesPageContent = defineType({
  name: "capabilitiesPageContent",
  title: "Capabilities Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow",      title: "Eyebrow Label",         type: "string" }),
    defineField({ name: "titleLead",    title: "Title — First Line",    type: "string" }),
    defineField({ name: "titleAccent",  title: "Title — Accent Line",   type: "string" }),
    defineField({ name: "body",         title: "Intro Body Copy",       type: "text"   }),
    defineField({ name: "valueEyebrow", title: "Value Section Eyebrow", type: "string" }),
    defineField({ name: "valueHeading", title: "Value Section Heading", type: "string" }),
    defineField({ name: "valueBody",    title: "Value Section Body",    type: "text"   }),
    defineField({
      name: "valueSteps", title: "Value Steps (4 cards)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "step",        title: "Step Label (e.g. Step 01)", type: "string" }),
        defineField({ name: "title",       title: "Step Title",                type: "string" }),
        defineField({ name: "description", title: "Step Description",          type: "text"   }),
      ]}],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Capabilities Page" }),
  },
});

// ── Growth Page ───────────────────────────────────────────────────────────────
export const growthPageContent = defineType({
  name: "growthPageContent",
  title: "Growth Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow",     title: "Eyebrow Label",       type: "string" }),
    defineField({ name: "titleLead",   title: "Title — First Line",  type: "string" }),
    defineField({ name: "titleAccent", title: "Title — Accent Line", type: "string" }),
    defineField({ name: "body",        title: "Intro Body Copy",     type: "text"   }),

    defineField({ name: "playHeading", title: "Where We Play — Heading", type: "string" }),
    defineField({
      name: "playItems", title: "Where We Play — Items",
      type: "array", of: [{ type: "string" }],
    }),

    defineField({ name: "whyHeading", title: "Why Now — Heading", type: "string" }),
    defineField({
      name: "whyItems", title: "Why Now — Paragraphs",
      type: "array", of: [{ type: "string" }],
    }),

    defineField({ name: "featuredEyebrow",     title: "Featured Section Eyebrow", type: "string" }),
    defineField({ name: "featuredHeading",     title: "Featured Section Heading", type: "string" }),
    defineField({ name: "featuredBody",        title: "Featured Section Body",    type: "text"   }),
    defineField({ name: "featuredCardEyebrow", title: "Featured Card Eyebrow",    type: "string" }),
    defineField({ name: "featuredCardHeading", title: "Featured Card Heading",    type: "string" }),
    defineField({ name: "featuredCardCol2",    title: "Featured Card Column 2",   type: "text"   }),
    defineField({ name: "featuredCardCol3",    title: "Featured Card Column 3",   type: "text"   }),

    defineField({ name: "ctaLead",   title: "CTA — First Line",  type: "string" }),
    defineField({ name: "ctaAccent", title: "CTA — Accent Line", type: "string" }),
    defineField({ name: "ctaButton", title: "CTA Button Label",  type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "Growth Page" }),
  },
});

// ── Group / About Page ────────────────────────────────────────────────────────
export const aboutPageContent = defineType({
  name: "aboutPageContent",
  title: "Group / About Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow",     title: "Eyebrow Label",       type: "string" }),
    defineField({ name: "titleLead",   title: "Title — First Line",  type: "string" }),
    defineField({ name: "titleAccent", title: "Title — Accent Line", type: "string" }),
    defineField({ name: "body",        title: "Intro Body Copy",     type: "text"   }),

    defineField({ name: "whoHeading", title: "Who We Are — Heading",     type: "string" }),
    defineField({ name: "whoBody1",   title: "Who We Are — Paragraph 1", type: "text"   }),
    defineField({ name: "whoBody2",   title: "Who We Are — Paragraph 2", type: "text"   }),
    defineField({ name: "whoBody3",   title: "Who We Are — Paragraph 3", type: "text"   }),

    defineField({ name: "believeHeading", title: "What We Believe — Heading", type: "string" }),
    defineField({
      name: "beliefItems", title: "What We Believe — Items",
      type: "array", of: [{ type: "string" }],
    }),

    defineField({ name: "leadershipEyebrow", title: "Leadership — Eyebrow", type: "string" }),
    defineField({ name: "leadershipHeading", title: "Leadership — Heading", type: "string" }),
    defineField({ name: "leadershipBody",    title: "Leadership — Body",    type: "text"   }),
    defineField({
      name: "leadershipCards", title: "Leadership Cards", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "role", title: "Role / Title", type: "string" }),
        defineField({ name: "name", title: "Name",         type: "string" }),
        defineField({ name: "bio",  title: "Bio",          type: "text"   }),
      ]}],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Group / About Page" }),
  },
});