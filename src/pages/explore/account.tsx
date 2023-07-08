import { AccountHeader } from "@/components/part/accountHeader"
import { AccountPageContainer } from "@/components/part/accountPageContainer"
import { SearchBar } from "@/components/part/searchbar"
import SimpleSidebar from "@/components/part/sidebar"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
	return (
		<ChakraProvider>
			<SimpleSidebar>
				<SearchBar />
				<AccountHeader />
				<AccountPageContainer />
			</SimpleSidebar>
		</ChakraProvider>
	)
}
