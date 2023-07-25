import { TrendingHotTopics } from "@/components/part/trending/trendingHotTopics"
import { ColorAtom, TpAtom } from "@/components/part/trending/trendingNav"
import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { useAtom } from "jotai"

export const HotTopicsStack = () => {
	const TextColor = useColorModeValue("black", "white.800")
	const BgColor = useColorModeValue("#FFF", "#524B6220")

	const [list] = useAtom(TpAtom)
	const [color] = useAtom(ColorAtom)

	return (
		<Box
			className="w-18vw rounded-1rem self-start mt-5vh lt-xl:display-none ml-1rem"
			bg={BgColor}
		>
			<Stack className="flex-col w-full p-1.75rem">
				<Flex alignItems="center" gap="5px">
					<Text
						className="text-1.5rem font-700 space-x-1.5rem"
						color={TextColor}
					>
						Hot Topics
					</Text>
					<div className="i-icon-park-outline-arrow-right-up"></div>
				</Flex>
				<TrendingHotTopics list={list} count={13} color={color} />
			</Stack>
		</Box>
	)
}
