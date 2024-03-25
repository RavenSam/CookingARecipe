/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--color-background))",
				primary: "hsl(var(--color-primary))",
				neutral: "hsl(var(--color-neutral))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
