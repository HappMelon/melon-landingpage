import { AccountHeader } from "@/components/part/accountHeader"
import { SearchBar } from "@/components/part/searchbar"
import { ChakraProvider } from "@chakra-ui/react"
import SimpleSidebar from "../components/part/sidebar"

export default function App() {
	return (
		<ChakraProvider>
			<SimpleSidebar>
				<SearchBar />
				<AccountHeader />
			</SimpleSidebar>
		</ChakraProvider>
	)
}
