import { TrendingUserBox } from "@/components/part/trendingUserBox"
import { Stack } from "@chakra-ui/react"

export const TrendingUserStack = () => {
	return (
		<>
			<Stack spacing="1.5rem" direction="column" mt="5vh">
				<TrendingUserBox />
				<TrendingUserBox />
			</Stack>
		</>
	)
}