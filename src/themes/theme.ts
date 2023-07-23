import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: true,
}

const theme = extendTheme({ config })

export const chakraCustomTheme = extendTheme({
	config,
})

export default theme
