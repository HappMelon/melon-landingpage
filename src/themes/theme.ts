import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "light",
	// OPTIMIZE 这里暂时先改成 false
	useSystemColorMode: false,
}

const breakpoints = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1440,
}

const theme = extendTheme({ breakpoints, config })

export const chakraCustomTheme = extendTheme({
	config,
})

export default theme
