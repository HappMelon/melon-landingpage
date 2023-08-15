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
          <Text fontSize="1.25rem" fontWeight="bold" color={TextColor}>
            Hot Topics
          </Text>
          <img src="images/pages/explore/🦆 icon _arrow back_.svg" alt="" />
        </Flex>
        <TrendingHotTopics list={list} count={13} color={color} />
      </Stack>
    </Box>
  )
}
