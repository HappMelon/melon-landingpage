import { Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { FaComments } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { PiNumberCircleOneFill } from "react-icons/pi"

export const FollowingMill = () => {
	return (
		<>
			<Flex className="w-full justify-between gap-0.25rem">
				<Stack className="flex !flex-row gap-0.5rem items-center">
					<PiNumberCircleOneFill className="color-#000 text-0.75rem" />
					<Image
						className="h-1.5rem w-1.5rem rounded-full border-0.125rem border-#fff"
						src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0"
					/>
					<Text className="text-1rem color-#000 font-700">CoinBase</Text>
				</Stack>
				<Spacer />
				<Stack className="flex !flex-row items-center">
					<Button
						className="text-0.75rem"
						leftIcon={<FaComments style={{ marginRight: "-0.25rem" }} />}
						bg="none"
						_hover={{ bg: "none" }}
					>
						1k participations
					</Button>
					{/* FIXME 这里不知道为什么一样有这么大的间距 */}
					<Button
						className="color-#000 text-0.75rem  bg-background-none ml--1.75rem"
						color="#000000"
						leftIcon={<IoIosPeople style={{ marginRight: "-0.25rem" }} />}
						bg="none"
						_hover={{ bg: "none" }}
					>
						211
					</Button>
				</Stack>
			</Flex>
		</>
	)
}
