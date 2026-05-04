import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "cta",
      title: "Main CTA",
      type: "object",
      fields: [
        defineField({ name: "text", type: "string" }),
        defineField({ name: "url", type: "string" }),
      ],
    }),

    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),

    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", type: "string" }),
            defineField({ name: "url", type: "url" }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: { title: "name" },
    prepare: ({ title }) => ({ title: title || "Site Settings" }),
  },
});