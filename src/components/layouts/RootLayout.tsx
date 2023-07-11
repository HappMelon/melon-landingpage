import { SearchBar } from "@/components/part/searchbar"
import SimpleSidebar from "@/components/part/sidebar"
import { ChakraProvider } from "@chakra-ui/react"

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<ChakraProvider>
			<SimpleSidebar>
				<SearchBar />
				{children}
			</SimpleSidebar>
		</ChakraProvider>
	)
}

export default Layout