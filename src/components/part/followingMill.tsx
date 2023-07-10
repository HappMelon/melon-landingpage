import { Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { FaComments } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { PiNumberCircleOneFill } from "react-icons/pi"

export const FollowingMill = () => {
	return (
		<>
			<Flex className="w-full justify-between">
				<Stack className="flex !flex-row gap-0.5rem items-center">
					<PiNumberCircleOneFill className="color-#000 text-0.75rem" />
					<Image
						className="h-1.5rem w-1.5rem rounded-full border-0.125rem border-#fff"
						src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0"
					/>
					<Text className="text-1rem color-#000 font-700">CoinBase</Text>
				</Stack>
				<Spacer />
				<Stack className="flex !flex-row justify-start justify-items-start items-center gap-1rem">
					<Button
						className="text-0.75rem p-0"
						leftIcon={<FaComments style={{ marginRight: "-0.25rem" }} />}
						bg="none"
						_hover={{ bg: "none" }}
					>
						1k participations
					</Button>
					<Button
						className="color-#000 text-0.75rem p-0 bg-background-none"
						color="#000000"
						leftIcon={<IoIosPeople style={{ marginRight: "-0.25rem" }} />}
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
