import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Spacer,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react"
import { AiOutlinePlus } from "react-icons/ai"
export const TrendingUserBox = () => {
	return (
		<>
			<Box w="50vw" minH="10vh" bg="#F8F8F8" borderRadius="0.5rem">
				<Stack
					direction="row"
					w="100%"
					h="100%"
					overflow="auto"
					p="2vh"
					spacing="1rem"
				>
					<Image
						src="https://i.pravatar.cc/300"
						h="5rem"
						w="5rem"
						borderRadius="full"
						borderWidth="0.125rem"
						borderColor="rgba(255, 255, 255, 0.80)"
					/>
					<Flex w="100%" justify="space-between">
						<Stack direction="row" spacing="1rem" alignItems="center" w="100%">
							<VStack spacing="1px" align="stretch">
								<Text color="#000" fontSize="lg">
									AuthorName
								</Text>
								<Text fontSize="sm" color="#000" as="em">
									@UserName
								</Text>
							</VStack>
							<Box w="8%">
								<Spacer />
							</Box>
							<HStack>
								<Text fontSize="md" fontWeight="hairline">
									Posts
								</Text>
								<Text fontSize="2xl" fontWeight="bold">
									6
								</Text>
							</HStack>
							<Box w="4%">
								<Spacer />
							</Box>
							<HStack>
								<Text fontSize="md" fontWeight="hairline">
									Flare Vol
								</Text>
								<Text fontSize="2xl" fontWeight="bold">
									1000
								</Text>
							</HStack>
							<Box w="4%">
								<Spacer />
							</Box>
							<HStack>
								<Text fontSize="md" fontWeight="hairline">
									Subscribers
								</Text>
								<Text fontSize="2xl" fontWeight="bold">
									189
								</Text>
							</HStack>
							<Box w="2%">
								<Spacer />
							</Box>
							<Button
								leftIcon={<AiOutlinePlus />}
								colorScheme="orange"
								borderRadius="2rem"
							>
								<Text>Follow</Text>
							</Button>
						</Stack>
					</Flex>
				</Stack>
			</Box>
		</>
	)
}
