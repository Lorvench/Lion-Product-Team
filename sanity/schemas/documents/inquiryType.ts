import { defineField, defineType } from "sanity";

export default defineType({
  name: "inquiryType",
  title: "Inquiry Type",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
  ],
});
