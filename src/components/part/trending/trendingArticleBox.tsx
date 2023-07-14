import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Spacer,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react"
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

export const TrendingArticleBox = () => {
	return (
		<>
			<Box w="50vw" minH="25vh" bg="#F8F8F8" borderRadius="0.5rem">
				<Stack
					direction="row"
					w="100%"
					h="100%"
					overflow="auto"
					p="2vh"
					spacing="2rem"
				>
					<Image
						src="https://images.ctfassets.net/pdf29us7flmy/7MAfLagu0g3iappEl8QH3S/5ebac5a5115d2ecd3eb357b992d949ee/GettyImages-643897728_optimized.jpg"
						alt="image"
						h="200px"
						aspectRatio="1"
						borderRadius="1rem"
						fit="cover"
						boxShadow="xl"
						mt="0.1rem"
					/>
					<Stack
						direction="column"
						spacing="0.75rem"
						justify="left"
						align="start"
					>
						<Flex w="100%" justify="space-between">
							<Stack
								direction="row"
								spacing="1rem"
								alignItems="center"
								w="100%"
							>
								<Image
									src="https://i.pravatar.cc/300"
									h="3rem"
									w="3rem"
									borderRadius="full"
									borderWidth="0.125rem"
									borderColor="rgba(255, 255, 255, 0.80)"
								/>
								<VStack spacing="1px" align="stretch">
									<Grid templateColumns="repeat(3, 1fr)" gap={6}>
										<Text size="1rem" color="#000" fontWeight="semibold">
											AuthorName
										</Text>
										<Text
											color="#9B9B9B"
											fontSize="0.75rem"
											maxWidth="100%"
										></Text>
									</Grid>

									<HStack>
										<Text size="1rem" color="#000" fontWeight="semibold">
											@UserName
										</Text>
										<Text color="#9B9B9B" fontSize="0.75rem">
											2h ago
										</Text>
									</HStack>
								</VStack>
								<Box w="200%">
									<Spacer />
								</Box>
								<VStack spacing="1px" w="full">
									<Grid templateColumns="repeat(2, 1fr)" gap={1}>
										<GridItem>
											<Text
												size="1rem"
												color="#000"
												fontWeight="bold"
												fontSize="xl"
											>
												32222
											</Text>
										</GridItem>

										<GridItem gridRow={1} gridColumn={2}>
											<Text color="#9B9B9B" fontSize="xl" maxWidth="100%">
												FLR
											</Text>
										</GridItem>
									</Grid>
									<Text color="#9B9B9B" fontSize="0.75rem">
										= $65.2
									</Text>
								</VStack>
							</Stack>
						</Flex>

						<Text color="#000000" fontSize="1.125rem" fontWeight="semibold">
							Backed by Wall Street consortium, what are the features of the EDX
							Markets?
						</Text>
						<Text color="#9B9B9B" fontSize="1rem">
							Lorem ipsum dolor sit amet consectetur. Massa aliquet volutpat
							libero nunc facilisi laoreet velit iaculis. Quam volutpat ipsum
							tincidunt aliquet hendrerit proin facilisis ultrices odio. Gravida
							a ac eget posuere facilisis nunc. Magna rhoncus odio et integer
							at. Felis suspendisse sed pretium erat lacus.
						</Text>
						<Flex
							direction="row"
							justify="space-between"
							align="center"
							w="100%"
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
							</Stack>
							<Stack direction="row" align="center" spacing="1rem">
								<Button
									color="#BD97FF"
									bg="rgba(222, 166, 250, 0.20)"
									fontSize="0.75rem"
									borderRadius="0.25rem"
									h="1.5rem"
									p="0.25rem 0.625rem "
								>
									#breaking
								</Button>
								<Button
									color="#FF5925"
									bg="rgba(255, 134, 122, 0.20)"
									fontSize="0.75rem"
									borderRadius="0.25rem"
									h="1.5rem"
									p="0.25rem 0.625rem "
								>
									#celabrity
								</Button>
								<Button
									color="#F90"
									bg="rgba(254, 225, 64, 0.20)"
									fontSize="0.75rem"
									borderRadius="0.25rem"
									h="1.5rem"
									p="0.25rem 0.625rem "
								>
									#romance
								</Button>
								<Button
									color="#AC3EEF"
									bg="rgba(172, 62, 239, 0.20)"
									fontSize="0.75rem"
									borderRadius="0.25rem"
									h="1.5rem"
									p="0.25rem 0.625rem "
								>
									#crypto
								</Button>
							</Stack>
							<BsThreeDotsVertical fontSize="1.5rem" color="#9B9B9B" />
						</Flex>
					</Stack>
				</Stack>
			</Box>
		</>
	)
}
