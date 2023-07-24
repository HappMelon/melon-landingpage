import { TrendingHotTopics } from "@/components/part/trending/trendingHotTopics"
import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { FiTrendingUp } from "react-icons/fi"

export const HotTopicsStack = () => {
	const TextColor = useColorModeValue("black", "white.800")
	const BgColor = useColorModeValue("#F8F8F8", "grey")
	return (
		<Box
			className="w-18vw rounded-1rem self-start mt-5vh lt-xl:display-none"
			bg={BgColor}
		>
			<Stack className="flex-col w-full p-1.75rem">
				<Flex alignItems="center" gap="5px">
					<Text
						className="text-1.5rem font-700 space-x-1.5rem"
						color={TextColor}
					>
						Hot Topics
					</Text>
					<FiTrendingUp />
				</Flex>
				<TrendingHotTopics />
			</Stack>
		</Box>
	)
}
