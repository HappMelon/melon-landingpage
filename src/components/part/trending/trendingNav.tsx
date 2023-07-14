import { TrendingArticleStack } from "@/components/part/trending/trendingArticleStack"
import { TrendingHotTopics } from "@/components/part/trending/trendingHotTopics"
import { TrendingUserStack } from "@/components/part/trending/trendingUserStack"
import { Box, ButtonGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"

export const TrendingNav = () => {
	const [showTopics, toggleShowTopics] = useState(false)
	const [currentTap, setCurrentTap] = useState("TrendingArticle")
	const trendingBody = () => {
		switch (currentTap) {
			case "TrendingArticle":
				return <TrendingArticleStack />
			case "Users":
				return <TrendingUserStack />
			default:
				return <TrendingArticleStack />
		}
	}
	return (
		<>
			<Stack className="mr-auto mt-5vh flex-col">
				<Box className="flex items-center w-full">
					<ButtonGroup className="gap-4">
						<button
							className="py-0.375rem px-0.625rem color-#9B9B9B bg-#f8f8f8 text-1rem font-700 hover:color-#000"
							onClick={() => {
								setCurrentTap("TrendingArticle")
							}}
						>
							Most Popular
						</button>
						<button
							className="py-0.375rem px-0.625rem color-#9B9B9B bg-#f8f8f8 text-1rem font-700 hover:color-#000"
							onClick={() => {
								toggleShowTopics(!showTopics)
							}}
						>
							Hot Topics
						</button>
						<button
							className="py-0.375rem px-0.625rem color-#9B9B9B bg-#f8f8f8 text-1rem font-700 hover:color-#000"
							onClick={() => {
								setCurrentTap("Users")
							}}
						>
							Users
						</button>
					</ButtonGroup>
				</Box>
				{showTopics && <TrendingHotTopics />}
				{trendingBody()}
			</Stack>
		</>
	)
}
