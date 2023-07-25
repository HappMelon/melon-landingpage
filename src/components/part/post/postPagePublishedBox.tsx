import { Box, Button, Flex, Spacer, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

export const PostPagePublishedBox = () => {
	const bgColor = useColorModeValue("#fff", "#181127")
	const TextColor = useColorModeValue("", "#9B9B9B")
	const ValueColor = useColorModeValue("#000", "#fff")

	return (
		<Box w="95%" h="25vh" ml="5px" mr="5px" bg={bgColor} borderRadius="1rem">
			<Stack direction="column" ml="5px" mt="20px" w="370px" h="80%">
				<Text color={TextColor} fontSize="sm">
					Published 2 days ago
				</Text>
				<Text
					color={ValueColor}
					fontSize="1rem"
					fontWeight="semibold"
					maxW="300px"
				>
					Backed by Wall Street consortium, what are the features of the EDX
					Markets?
				</Text>
				<Text color="#9B9B9B" fontSize="sm" maxW="350" h="50%" noOfLines={3}>
					Lorem ipsum dolor sit amet consectetur. Massa aliquet volutpat libero
					nunc facilisi laoreet velit iaculis. Quam volutpat ipsum tincidunt
					aliquet hendrerit proin facilisis ultrices odio. Gravida a ac eget
					posuere facilisis nunc. Magna rhoncus odio et integer at.posuere
					facilisis nunc. Magna rhoncus odio et integer at.facilisis nunc. Magna
					rhoncus odio et integer at.
				</Text>
				<Flex
					direction="row"
					justify="space-between"
					align="center"
					w="100%"
					mt="-5px"
				>
					<Stack
						direction="row"
						justify="left"
						justifyItems="left"
						align="center"
						spacing="1rem"
					>
						<Button
							color={ValueColor}
							fontSize="0.75rem"
							leftIcon={<AiOutlineEye />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							80k+
						</Button>
						<Button
							color={ValueColor}
							fontSize="0.75rem"
							leftIcon={<AiOutlineHeart />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							50k+
						</Button>
						<Button
							color={ValueColor}
							fontSize="0.75rem"
							leftIcon={<AiOutlineComment />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							88k+
						</Button>
						<Box w="185px">
							<Spacer />
						</Box>
						<BsThreeDotsVertical fontSize="1.5rem" color="#9B9B9B" />
					</Stack>
				</Flex>
			</Stack>
		</Box>
	)
}
