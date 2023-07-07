import { SearchBar } from "@/components/part/searchbar"
import SimpleSidebar from "@/components/part/sidebar"
import { TrendingPageContainer } from "@/components/part/trendingPageContainer"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
	return (
		<ChakraProvider>
			<SimpleSidebar>
				<SearchBar />
				{/* <AccountHeader />
				<AccountPageContainer /> */}
				<TrendingPageContainer />
			</SimpleSidebar>
		</ChakraProvider>
	)
}
