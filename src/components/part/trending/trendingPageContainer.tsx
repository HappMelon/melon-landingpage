import { HotTopicsStack } from "@/components/part/trending/hotTopicsStack"
import { PopularAuthorStack } from "@/components/part/trending/popularAuthorStack"
import { TrendingNav } from "@/components/part/trending/trendingNav"
import { Flex, Spacer, VStack } from "@chakra-ui/react"
export const TrendingPageContainer = () => {
	return (
		<>
			<Flex className="justify-between m-2vh flex-row">
				<TrendingNav />
				<Spacer />
				<VStack>
					<HotTopicsStack />
					<PopularAuthorStack />
				</VStack>
			</Flex>
		</>
	)
}
