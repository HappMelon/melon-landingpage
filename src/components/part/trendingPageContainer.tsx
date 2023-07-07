import { HotTopicsStack } from "@/components/part/hotTopicsStack"
import { PopularAuthorStack } from "@/components/part/popularAuthorStack"
import { TrendingNav } from "@/components/part/trendingNav"
import { Flex, Spacer, VStack } from "@chakra-ui/react"
export const TrendingPageContainer = () => {
	return (
		<>
			<Flex direction="row" justifyContent="space-between" m="2vh">
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
