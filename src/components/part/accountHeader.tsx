import { Box, Button, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { BiEdit } from "react-icons/bi"

export const AccountHeader = () => {
	return (
		<>
			<Box
				backgroundImage="src/assets/background.png"
				h="14vh"
				m="5vh"
				position="relative"
			>
				<Stack
					spacing={4}
					direction="row"
					align="center"
					zIndex="2"
					position="absolute"
					top="2.5vh"
					left="2.5vh"
				>
					<Image
						src="https://bit.ly/dan-abramov"
						alt="pfp"
						height="15vh"
						width="15vh"
						borderRadius="1vh"
						border="2px"
						borderColor="white"
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
						p="2"
					>
						<Text fontSize="24px" fontWeight="bold">
							Chalette Helmet
						</Text>
						<Text fontSize="16px" fontWeight="normal">
							@charlove520
						</Text>
						<Text fontSize="14px" fontWeight="normal" opacity="60%" mt="2">
							A web3 enthusiast. Crypto Investor. Tech Girl. Flare Premium.
							Invest for freedom. Multi-FIRE Advocate.
						</Text>
					</Stack>
					<Stack
						direction="column"
						justifySelf="right"
						alignSelf="end"
						maxW="50%"
						w="50%"
						h="15vh"
						p="2"
						pb="5vh"
					>
						<Button
							variant="outline"
							rounded="full"
							color="white"
							border="1px"
							borderColor="white"
							leftIcon={<BiEdit />}
							justifySelf="right"
							alignSelf="end"
							_hover={{ background: "none" }}
						>
							Edit Profie
						</Button>
						<Spacer />
						<Stack direction="row" color="white" justify="right" align="end">
							<Stack direction="row" alignItems="end">
								<Text fontSize="16px" fontWeight="semi-bold">
									Posts
								</Text>
								<Text fontSize="28px" fontWeight="bold">
									3
								</Text>
							</Stack>
							<Spacer />
							<Stack spacing="2" direction="row" alignItems="end">
								<Text fontSize="16px" fontWeight="semi-bold">
									Flare Vol
								</Text>
								<Text fontSize="28px" fontWeight="bold">
									62
								</Text>
							</Stack>
							<Spacer />
							<Stack spacing="2" direction="row" alignItems="end">
								<Text fontSize="16px" fontWeight="semi-bold">
									Subscribers
								</Text>
								<Text fontSize="28px" fontWeight="bold">
									10k
								</Text>
							</Stack>
							<Spacer />
							<Stack spacing="2" direction="row" alignItems="end">
								<Text fontSize="16px" fontWeight="semi-bold">
									Following
								</Text>
								<Text fontSize="28px" fontWeight="bold">
									208
								</Text>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</>
	)
}
