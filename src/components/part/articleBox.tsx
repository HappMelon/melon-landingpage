import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

export const ArticleBox = () => {
	return (
		<>
			<Box className="w-50vw min-h-25vh bg-#F8F8F8 rounded-2rem">
				<Stack className="flex !flex-row w-full h-full overflow-auto p-2.5vh gap-2rem">
					<Image
						className="h-11.5rem rounded-1rem object-cover shadow-xl aspect-ratio-1"
						src="https://images.ctfassets.net/pdf29us7flmy/7MAfLagu0g3iappEl8QH3S/5ebac5a5115d2ecd3eb357b992d949ee/GettyImages-643897728_optimized.jpg"
						alt="Cover"
					/>
					<Stack className="flex flex-col gap-0.75rem justify-start items-start">
						<Text className="color-#9B9B9B text-0.75rem">
							Published 2 days ago
						</Text>
						<Text className="color-#000 text-1.125rem font-700">
							Backed by Wall Street consortium, what are the features of the EDX
							Markets?
						</Text>
						<Text className="color-#9B9B9B text-1rem">
							Lorem ipsum dolor sit amet consectetur. Massa aliquet volutpat
							libero nunc facilisi laoreet velit iaculis. Quam volutpat ipsum
							tincidunt aliquet hendrerit proin facilisis ultrices odio. Gravida
							a ac eget posuere facilisis nunc. Magna rhoncus odio et integer
							at. Felis suspendisse sed pretium erat lacus.
						</Text>
						<Flex className="flex flex-row justify-between items-center w-full">
							<Stack
								className="flex !flex-row justify-start justify-items-start items-center gap-1rem"
							>
								<Button
									className="color-#000 text-0.75rem p-0"
									leftIcon={<AiOutlineEye />}
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
