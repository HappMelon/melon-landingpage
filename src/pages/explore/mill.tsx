import { MillPageContainer } from "@/components/part/millPageContainer"
import { SearchBar } from "@/components/part/searchbar"
import SimpleSidebar from "@/components/part/sidebar"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
	return (
		<ChakraProvider>
			<SimpleSidebar>
				<SearchBar />
				<MillPageContainer />
			</SimpleSidebar>
		</ChakraProvider>
	)
}
