import { TrendingHotTopics } from "@/components/part/trendingHotTopics"
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { FiTrendingUp } from "react-icons/fi"
export const HotTopicsStack = () => {
	return (
		<Box
			w="18vw"
			bg="#F8F8F8"
			borderRadius="1rem"
			alignSelf="flex-start"
			mt="5vh"
		>
			<Stack direction="column" spacing="1.5rem" w="100%" p="1.75rem">
				<Flex alignItems="center" gap="5px">
					<Text fontSize="1.5rem" fontWeight="bold" color="#000">
						Hot Topics
					</Text>
					<FiTrendingUp />
				</Flex>

				<TrendingHotTopics />
			</Stack>
		</Box>
	)
}
