import { SearchBar } from "@/components/part/searchbar"
import SimpleSidebar from "@/components/part/sidebar"
import theme from "@/themes/theme"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<SimpleSidebar>
				<SearchBar />
				{children}
			</SimpleSidebar>
		</ChakraProvider>
	)
}

export default Layout
