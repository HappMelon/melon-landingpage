import { Box, Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { BiEdit } from "react-icons/bi"

export const AccountHeader = () => {
	return (
		<>
			<Box className="h-11rem m-1rem relative">
				<Flex className="flex w-full flex-row items-center z-10 absolute pl-1.75rem pt-1.5rem">
					<Image
						src="https://bit.ly/dan-abramov"
						alt="pfp"
						className="w-12rem h-12rem rounded-1rem border-solid border-#fff shadow-lg object-cover"
					/>
					<Stack
						className="flex flex-col justify-start items-start self-start max-w-45% bg-white text-white p-1rem">
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
						className="flex flex-col justify-between items-end self-end max-w-40% w-40% h-11rem pr-2rem pb-3.5rem">
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
