import { GenerateRandomNumber } from "@/lib/utils"
import { Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { FaComments } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

const followingMills = [
	"Coinbase",
	"Binance",
	"Blur",
	"OpenSea",
	"FTX",
	"Bloomberg",
	"Fast Company",
	"Hurun",
	"Economist",
	"Yahoo Finance",
	"Taylor Swift",
]

const avatarArray = [
	"Coinbase.png",
	"Binance.png",
	"Blur.png",
	"OpenSea.png",
	"FTX.png",
	"Bloomberg.png",
	"Fast Company.png",
	"Hurun.png",
	"Economist.png",
	"Yahoo Finance.png",
	"Taylor Swift.png",
]

export const FollowingMill = ({ index }: { index: number }) => {
	return (
		<>
			<Flex className="w-full grid grid-cols-3 gap-xs">
				<Stack className="flex !flex-row gap-0.5rem items-center">
					<Text className="text-1rem font-serif">{index + 1}</Text>
					<Image
						className="h-1.5rem w-1.5rem rounded-full border-0.125rem border-#fff"
						src={`/images/pages/mill/${avatarArray[index]}`}
					/>
					<Text className="text-1rem font-700 w-full !whitespace-nowrap">
						{followingMills[index]}
					</Text>
				</Stack>
				<Spacer />
				<Button
					className="text-0.6875rem !font-350"
					leftIcon={<FaComments style={{ marginRight: "-0.25rem" }} />}
					bg="none"
					_hover={{ bg: "none" }}
				>
					1k participation
				</Button>
				<Button
					className="text-0.6875rem !font-350"
					leftIcon={<IoIosPeople style={{ marginRight: "-0.25rem" }} />}
					bg="none"
					_hover={{ bg: "none" }}
				>
					{GenerateRandomNumber(100, 800)}
				</Button>
			</Flex>
		</>
	)
}
