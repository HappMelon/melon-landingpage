// https://unocss.dev
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders"
import * as path from "path"
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss"
import { breakpoints } from "./breakpoints"

export default defineConfig({
	presets: [
		presetIcons({
			collections: {
				flare: FileSystemIconLoader(
					path.join(__dirname, "/public/icons/"),
					(svg) => svg
				),
				// Usage example: <Text className="i-flare:back" />
			},
		}),
		presetUno(),
		presetIcons({
			scale: 1.4,
		}),
	],
	rules: [
		["font-roboto", { "font-family": `"Roboto", sans-serif` }],
		["font-deca", { "font-family": `"Lexend Deca", sans-serif` }],
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
	shortcuts: [
		// you could still have object style
		{
			text: "bg-gradient-to-br bg-clip-text from-yellow-400 to-red-600 text-transparent",
		},
	],
	theme: {
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
		},

		borderRadius: {
			lg: `var(--radius)`,
			md: `calc(var(--radius) - 2px)`,
			sm: "calc(var(--radius) - 4px)",
		},
		breakpoints: {
			// https://mantine.dev/styles/responsive/#configure-breakpoints
			xs: `${breakpoints.xs}px`,
			sm: `${breakpoints.sm}px`,
			md: `${breakpoints.md}px`,
			lg: `${breakpoints.lg}px`,
			xl: `${breakpoints.xl}px`,
		},
	},
})
