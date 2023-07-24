import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "light",
	// OPTIMIZE 这里暂时先改成 false
	useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const chakraCustomTheme = extendTheme({
	config,
})

export default theme
