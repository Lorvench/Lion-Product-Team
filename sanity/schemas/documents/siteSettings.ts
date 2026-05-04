import { defineField, defineType } from "sanity";

const stringField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "string",
  });

const textField = (name: string, title: string, rows = 3) =>
  defineField({
    name,
    title,
    type: "text",
    rows,
  });

const stringListField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [{ type: "string" }],
  });

const objectField = (
  name: string,
  title: string,
  fields: ReturnType<typeof defineField>[],
) =>
  defineField({
    name,
    title,
    type: "object",
    fields,
  });

const labelHrefListField = (
  name: string,
  title: string,
  labelTitle = "Label",
) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      {
        type: "object",
        fields: [stringField("label", labelTitle), stringField("href", "Href")],
      },
    ],
  });

const titleHrefListField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      {
        type: "object",
        fields: [stringField("title", "Title"), stringField("href", "Href")],
      },
    ],
  });

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    stringField("siteTitle", "Site Title"),
    textField("siteDescription", "Site Description"),
    objectField("siteBrand", "Site Brand", [
      stringField("leftLabel", "Left Label"),
      stringField("rightLabel", "Right Label"),
    ]),
    labelHrefListField("siteNavigation", "Site Navigation"),
    titleHrefListField("siteVenueLinks", "Site Venue Links"),
    labelHrefListField("siteGroupLinks", "Site Group Links"),
    objectField("siteHeaderExtras", "Site Header Extras", [
      stringField("menuCta", "Menu CTA"),
      stringField("groupTitle", "Group Title"),
      stringField("overlayMainDirLabel", "Overlay Main Directory Label"),
      stringField("overlayVenuesLabel", "Overlay Venues Label"),
      stringField("overlayCrmHeading", "Overlay CRM Heading"),
      stringField("overlayCrmAction", "Overlay CRM Action"),
      objectField("contact", "Contact", [
        stringField("eyebrow", "Eyebrow"),
        stringField("primary", "Primary"),
        stringField("secondary", "Secondary"),
      ]),
      labelHrefListField("footerLinks", "Header Footer Links"),
      stringField("copyright", "Copyright"),
    ]),
    objectField("siteFooter", "Site Footer", [
      textField("tagline", "Tagline", 4),
      stringField("crmLabel", "CRM Label"),
      stringField("crmHeading", "CRM Heading"),
      stringField("crmEmailPlaceholder", "CRM Email Placeholder"),
      stringField("directoriesTitle", "Directories Title"),
      stringField("portfolioTitle", "Portfolio Title"),
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
                title: "Platform",
                type: "string",
                options: {
                  list: ["instagram", "twitter", "linkedin"],
                  layout: "dropdown",
                },
              }),
              stringField("href", "Href"),
            ],
          },
        ],
      }),
      labelHrefListField("bottomLinks", "Bottom Links"),
      stringField("copyright", "Copyright"),
    ]),
    objectField("homeData", "Home Page Data", [
      objectField("hero", "Hero", [
        stringField("label", "Label"),
        stringField("titleLead", "Title Lead"),
        stringField("titleAccent", "Title Accent"),
        textField("body", "Body", 6),
        stringField("primaryCta", "Primary CTA"),
        stringField("secondaryCta", "Secondary CTA"),
        stringField("scrollLabel", "Scroll Label"),
        stringField("image", "Image URL / Path"),
      ]),
      objectField("marketSignal", "Market Signal", [
        stringField("badge", "Badge"),
        stringField("title", "Title"),
        textField("body", "Body", 5),
        stringListField("chips", "Chips"),
      ]),
      objectField("capabilities", "Home Capabilities", [
        stringField("label", "Label"),
        stringField("title", "Title"),
        textField("body", "Body", 5),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                stringField("title", "Title"),
                textField("description", "Description", 4),
              ],
            },
          ],
        }),
      ]),
      objectField("portfolio", "Home Portfolio", [
        stringField("label", "Label"),
        stringField("title", "Title"),
        textField("body", "Body", 5),
        stringField("action", "Action"),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                stringField("href", "Href"),
                stringField("image", "Image URL / Path"),
                stringField("category", "Category"),
                stringField("title", "Title"),
                textField("description", "Description", 4),
                stringField("primaryAction", "Primary Action"),
                stringField("secondaryAction", "Secondary Action"),
              ],
            },
          ],
        }),
      ]),
      objectField("marketThesis", "Market Thesis", [
        stringField("label", "Label"),
        stringField("title", "Title"),
        textField("body", "Body", 6),
        stringListField("thesisBullets", "Thesis Bullets"),
        stringField("featuredEyebrow", "Featured Eyebrow"),
        stringField("featuredTitle", "Featured Title"),
        textField("featuredBody", "Featured Body", 5),
        stringListField("bullets", "Featured Bullets"),
      ]),
      objectField("technology", "Technology", [
        stringField("label", "Label"),
        stringField("titleLead", "Title Lead"),
        stringField("titleAccent", "Title Accent"),
        textField("body", "Body", 5),
        stringField("action", "Action"),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                stringField("title", "Title"),
                textField("description", "Description", 4),
                stringField("metric", "Metric"),
                stringField("caption", "Caption"),
              ],
            },
          ],
        }),
      ]),
      objectField("groupStory", "Group Story", [
        stringField("label", "Label"),
        stringField("title", "Title"),
        stringField("action", "Action"),
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                stringField("value", "Value"),
                stringField("label", "Label"),
              ],
            },
          ],
        }),
      ]),
      objectField("closingCta", "Closing CTA", [
        stringField("titleLead", "Title Lead"),
        stringField("titleAccent", "Title Accent"),
        stringField("primaryCta", "Primary CTA"),
        stringField("secondaryCta", "Secondary CTA"),
      ]),
    ]),
    objectField("venuesPage", "Venues Page", [
      stringField("eyebrow", "Eyebrow"),
      stringField("titleLead", "Title Lead"),
      stringField("titleAccent", "Title Accent"),
      stringField("filterLabel", "Filter Label"),
      stringField("allFilterLabel", "All Filter Label"),
      defineField({
        name: "filterOptions",
        title: "Filter Options",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              stringField("label", "Label"),
              stringListField("categories", "Matching Categories"),
            ],
          },
        ],
      }),
      stringField("exploreLabel", "Explore Label"),
      stringField("primaryActionLabel", "Primary Action Label"),
      stringField("secondaryActionLabel", "Secondary Action Label"),
    ]),
    defineField({
      name: "venueItems",
      title: "Venue Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            stringField("slug", "Slug"),
            stringField("title", "Title"),
            stringField("category", "Category"),
            textField("description", "Description", 4),
            stringField("location", "Location"),
            stringField("image", "Image URL / Path"),
          ],
        },
      ],
    }),
    objectField("capabilitiesPage", "Capabilities Page", [
      stringField("eyebrow", "Eyebrow"),
      stringField("titleLead", "Title Lead"),
      stringField("titleAccent", "Title Accent"),
      textField("body", "Body", 5),
      stringField("valueEyebrow", "Value Eyebrow"),
      stringField("valueHeading", "Value Heading"),
      textField("valueBody", "Value Body", 5),
    ]),
    defineField({
      name: "capabilityCards",
      title: "Capability Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            stringField("title", "Title"),
            textField("description", "Description", 4),
          ],
        },
      ],
    }),
    defineField({
      name: "valueSteps",
      title: "Value Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            stringField("step", "Step"),
            stringField("title", "Title"),
            textField("description", "Description", 4),
          ],
        },
      ],
    }),
    objectField("growthPage", "Growth Page", [
      stringField("eyebrow", "Eyebrow"),
      stringField("titleLead", "Title Lead"),
      stringField("titleAccent", "Title Accent"),
      textField("body", "Body", 5),
      stringField("playHeading", "Play Heading"),
      stringField("whyHeading", "Why Heading"),
      stringField("featuredEyebrow", "Featured Eyebrow"),
      stringField("featuredHeading", "Featured Heading"),
      textField("featuredBody", "Featured Body", 5),
      stringField("featuredCardEyebrow", "Featured Card Eyebrow"),
      stringField("featuredCardHeading", "Featured Card Heading"),
      textField("featuredCardCol2", "Featured Card Column 2", 5),
      textField("featuredCardCol3", "Featured Card Column 3", 5),
      stringField("ctaLead", "CTA Lead"),
      stringField("ctaAccent", "CTA Accent"),
      stringField("ctaButton", "CTA Button"),
    ]),
    stringListField("growthPlayItems", "Growth Play Items"),
    stringListField("growthWhyNowItems", "Growth Why Now Items"),
    objectField("aboutPage", "About Page", [
      stringField("eyebrow", "Eyebrow"),
      stringField("titleLead", "Title Lead"),
      stringField("titleAccent", "Title Accent"),
      textField("body", "Body", 5),
      stringField("whoHeading", "Who Heading"),
      textField("whoBody1", "Who Body 1", 4),
      textField("whoBody2", "Who Body 2", 4),
      textField("whoBody3", "Who Body 3", 4),
      stringField("believeHeading", "Believe Heading"),
      stringField("leadershipEyebrow", "Leadership Eyebrow"),
      stringField("leadershipHeading", "Leadership Heading"),
      textField("leadershipBody", "Leadership Body", 5),
    ]),
    stringListField("beliefItems", "Belief Items"),
    defineField({
      name: "leadershipCards",
      title: "Leadership Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            stringField("role", "Role"),
            stringField("name", "Name"),
            textField("bio", "Bio", 4),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
      subtitle: "siteBrand.rightLabel",
    },
    prepare({ title, subtitle }) {
      return {
        title: title ?? "Site Settings",
        subtitle: subtitle ?? "Global placeholder and page content",
      };
    },
  },
});
