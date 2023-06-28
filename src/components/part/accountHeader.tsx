import { Box, Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { BiEdit } from "react-icons/bi"
export const AccountHeader = () => {
	return (
		<>
			<Box
				backgroundImage="src/assets/background.png"
				h="11rem"
				m="1rem"
				position="relative"
			>
				<Flex
					w="100%"
					direction="row"
					align="center"
					zIndex="2"
					position="absolute"
					pl="1.75rem"
					pt="1.5rem"
				>
					<Image
						src="https://bit.ly/dan-abramov"
						alt="pfp"
						height="12rem"
						width="12rem"
						borderRadius="1rem"
						border="solid"
						borderColor="white"
						boxShadow="lg"
						fit="cover"
					/>
					<Stack
						spacing="0"
						direction="column"
						justify="left"
						align="start"
						alignSelf="start"
						maxW="45%"
						color="white"
						p="1rem"
					>
						<Text fontSize="1.5rem" fontWeight="bold">
							Chalette Helmet
						</Text>
						<Text fontSize="1rem" fontWeight="normal">
							@charlove520
						</Text>
						<Text
							fontSize="0.875rem"
							fontWeight="normal"
							opacity="60%"
							mt="1rem"
						>
							A web3 enthusiast. Crypto Investor. Tech Girl. Flare Premium.
							Invest for freedom. Multi-FIRE Advocate.
						</Text>
					</Stack>
					<Spacer />
					<Flex
						direction="column"
						justify="space-between"
						justifySelf="right"
						alignSelf="flex-end"
						maxW="40%"
						w="40%"
						h="11rem"
						pr="2rem"
						pb="3.5rem"
					>
						<Button
							variant="outline"
							rounded="full"
							color="white"
							border="solid"
							borderColor="white"
							leftIcon={<BiEdit />}
							justifySelf="right"
							alignSelf="end"
							_hover={{ background: "none" }}
						>
							Edit Profile
						</Button>
						<Spacer />
						<Stack direction="row" color="white" justify="right" align="end">
							<Stack direction="row" alignItems="end">
								<Text fontSize="1rem" fontWeight="semi-bold">
									Posts
								</Text>
								<Text fontSize="1.75rem" fontWeight="bold">
									3
								</Text>
							</Stack>
							<Spacer />
							<Stack spacing="2" direction="row" alignItems="end">
								<Text fontSize="1rem" fontWeight="semi-bold">
									Flare Vol
								</Text>
								<Text fontSize="1.75rem" fontWeight="bold">
									62
								</Text>
							</Stack>
							<Spacer />
							<Stack spacing="2" direction="row" alignItems="end">
								<Text fontSize="1rem" fontWeight="semi-bold">
									Subscribers
								</Text>
								<Text fontSize="1.75rem" fontWeight="bold">
									10k
								</Text>
							</Stack>
							<Spacer />
							<Stack spacing="2" direction="row" alignItems="end">
								<Text fontSize="1rem" fontWeight="semi-bold">
									Following
								</Text>
								<Text fontSize="1.75rem" fontWeight="bold">
									208
								</Text>
							</Stack>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
