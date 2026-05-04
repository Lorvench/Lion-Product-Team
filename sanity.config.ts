import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = "mq8jal6u";
const dataset = "production";

export default defineConfig({
  name: "lhp-studio",
  title: "Lion Hospitality Partners",

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
