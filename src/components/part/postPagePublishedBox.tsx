import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
export const PostPagePublishedBox = () => {
	return (
		<Box w="95%" h="25vh" ml="5px" mr="5px" bg="#F8F8F8" borderRadius="1rem">
			<Stack direction="column" ml="10px" mt="10px" w="370px" h="80%">
				<Text color="#9B9B9B" fontSize="sm">
					Published 2 days ago
				</Text>
				<Text color="#000000" fontSize="1rem" fontWeight="semibold">
					Backed by Wall Street consortium, what are the features of the EDX
					Markets?
				</Text>
				<Text color="#9B9B9B" fontSize="sm" maxW="lg" h="50%">
					Lorem ipsum dolor sit amet consectetur. Massa aliquet volutpat libero
					nunc facilisi laoreet velit iaculis. Quam volutpat ipsum tincidunt
					aliquet hendrerit proin facilisis ultrices odio. Gravida a ac eget
					posuere facilisis nunc. Magna rhoncus odio et integer at.
				</Text>
				<Flex
					direction="row"
					justify="space-between"
					align="center"
					w="100%"
					ml="5px"
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
							color="#000000"
							fontSize="0.75rem"
							leftIcon={<AiOutlineEye />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							80k+
						</Button>
						<Button
							color="#000000"
							fontSize="0.75rem"
							leftIcon={<AiOutlineHeart />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							50k+
						</Button>
						<Button
							color="#000000"
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
