import { HotTopicsStack } from "@/components/part/hotTopicsStack"
import { PopularAuthorStack } from "@/components/part/popularAuthorStack"
import { TrendingNav } from "@/components/part/trendingNav"
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
