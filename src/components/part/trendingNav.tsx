import { TrendingArticleStack } from "@/components/part/trendingArticleStack"
import { TrendingHotTopics } from "@/components/part/trendingHotTopics"
import { TrendingUserStack } from "@/components/part/trendingUserStack"
import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react"
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
						<Button
							colorScheme="blackAlpha"
							onClick={() => {
								setCurrentTap("TrendingArticle")
							}}
						>
							Most Popular
						</Button>
						<Button
							colorScheme="blackAlpha"
							onClick={() => {
								toggleShowTopics(!showTopics)
							}}
						>
							Hot Topics
						</Button>
						<Button
							colorScheme="blackAlpha"
							onClick={() => {
								setCurrentTap("Users")
							}}
						>
							Users
						</Button>
					</ButtonGroup>
				</Box>
				{showTopics && <TrendingHotTopics />}
				{trendingBody()}
			</Stack>
		</>
	)
}
