import { Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { FaComments } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { PiNumberCircleOneFill } from "react-icons/pi"

export const FollowingMill = () => {
	return (
		<>
			<Flex w="100%" justify="space-between">
				<Stack direction="row" spacing="0.5rem" alignItems="center">
					<PiNumberCircleOneFill color="#000" fontSize="0.75rem" />
					<Image
						src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0"
						alt="coinbase"
						h="1.5rem"
						w="1.5rem"
						borderRadius="full"
						borderWidth="0.125rem"
						borderColor="rgba(255, 255, 255, 0.80)"
					/>
					<Text size="1rem" color="#000" fontWeight="semibold">
						CoinBase
					</Text>
				</Stack>
				<Spacer />
				<Stack
					direction="row"
					justify="left"
					justifyItems="left"
					align="center"
					spacing="1rem"
				>
					<Button
						fontSize="0.75rem"
						leftIcon={<FaComments style={{ marginRight: "-0.25rem" }} />}
						p="0"
						bg="none"
						_hover={{ bg: "none" }}
					>
						1k participations
					</Button>
					<Button
						color="#000000"
						fontSize="0.75rem"
						leftIcon={<IoIosPeople style={{ marginRight: "-0.25rem" }} />}
						p="0"
						bg="none"
						_hover={{ bg: "none" }}
					>
						329
					</Button>
				</Stack>
			</Flex>
		</>
	)
}
