// sanity/schemas/inquiryType.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "inquiryType",
  title: "Inquiry Type",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "routingEmail",
      title: "Routing Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "formCategory",
      title: "Form Category",
      type: "string",
    }),
  ],
});
