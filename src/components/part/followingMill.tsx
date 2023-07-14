import { GenerateRandomNumber } from "@/lib/utils"
import { Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { FaComments } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

export const FollowingMill = ({ index }: { index: number }) => {
	return (
		<>
			<Flex className="w-full justify-between gap-0.25rem">
				<Stack className="flex !flex-row gap-0.5rem items-center">
					<Text className="text-1rem font-serif">{index}</Text>
					<Image
						className="h-1.5rem w-1.5rem rounded-full border-0.125rem border-#fff"
						src="/images/pages/mill/avatar_coinbase.png"
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
						{GenerateRandomNumber(1, 800)}
					</Button>
				</Stack>
			</Flex>
		</>
	)
}
