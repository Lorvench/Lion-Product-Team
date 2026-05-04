// sanity/schemas/property.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: Rule => Rule.required() }),
    defineField({ 
      name: "slug", 
      title: "Slug", 
      type: "slug", 
      options: { source: "name" },
      validation: Rule => Rule.required()
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        { name: "text", type: "string" },
        { name: "url", type: "string" },
      ],
    }),
  ],
});