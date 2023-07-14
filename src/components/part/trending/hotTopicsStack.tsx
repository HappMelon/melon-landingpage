import { TrendingHotTopics } from "@/components/part/trending/trendingHotTopics"
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { FiTrendingUp } from "react-icons/fi"

export const HotTopicsStack = () => {
	return (
		<Box className="w-18vw bg-#F8F8F8 rounded-1rem self-start mt-5vh">
			<Stack className="flex-col w-full p-1.75rem">
				<Flex alignItems="center" gap="5px">
					<Text className="text-1.5rem font-700 color-#000 space-x-1.5rem">
						Hot Topics
					</Text>
					<FiTrendingUp />
				</Flex>
				<TrendingHotTopics />
			</Stack>
		</Box>
	)
}
