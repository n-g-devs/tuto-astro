import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://chipper-axolotl-7e3d58.netlify.app/",
  integrations: [preact()]
});