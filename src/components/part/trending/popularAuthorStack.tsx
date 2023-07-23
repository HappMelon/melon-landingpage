import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { FiTrendingUp } from "react-icons/fi"
import { PopularAuthors } from "./popularAuthors"
export const PopularAuthorStack = () => {
	const popular = Array.from({ length: 1 })
	const TextColor = useColorModeValue("black", "white.800")
	const BgColor = useColorModeValue("#F8F8F8", "grey")
	return (
		<Box
			w="18vw"
			bg={BgColor}
			borderRadius="1rem"
			alignSelf="flex-start"
			mt="5vh"
		>
			<Stack
				direction="column"
				spacing="1.5rem"
				w="100%"
				p="1.75rem"
				overflowX="auto"
			>
				<Flex alignItems="center" gap="5px">
					<Text fontSize="1.5rem" fontWeight="bold" color={TextColor}>
						Popular Authors
					</Text>
					<FiTrendingUp />
				</Flex>

				{popular.map((_, index) => (
					<PopularAuthors key={index} />
				))}
			</Stack>
		</Box>
	)
}
