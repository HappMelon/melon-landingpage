import { TrendingArticleBox } from "@/components/part/trending/trendingArticleBox"
import { Stack } from "@chakra-ui/react"

export const TrendingArticleStack = () => {
	return (
		<>
			<Stack spacing="1.5rem" direction="column" mt="5vh">
				<TrendingArticleBox />
				<TrendingArticleBox />
				<TrendingArticleBox />
			</Stack>
		</>
	)
}
