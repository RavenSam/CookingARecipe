import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
	site: "https://cookingarecipee.netlify.app",
	integrations: [mdx(), sitemap(), tailwind(), svelte()],
	output: "hybrid",
	adapter: netlify(),
})
