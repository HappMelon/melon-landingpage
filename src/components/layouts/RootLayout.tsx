import { SearchBar } from "@/components/part/searchbar"
import SimpleSidebar from "@/components/part/sidebar"
import { chakraCustomTheme } from "@/themes/theme"
import { ChakraProvider } from "@chakra-ui/react"

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<ChakraProvider theme={chakraCustomTheme} cssVarsRoot="body">
			<SimpleSidebar>
				<SearchBar />
				{children}
			</SimpleSidebar>
		</ChakraProvider>
	)
}

export default Layout
