import { TrendingArticleStack } from "@/components/part/trending/trendingArticleStack"
import { TrendingHotTopics } from "@/components/part/trending/trendingHotTopics"
import { TrendingUserStack } from "@/components/part/trending/trendingUserStack"
import { RandomHexColor } from "@/lib/utils"
import { useHotTopics } from "@/state/HotTopics"
import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const TrendingNav = () => {
	const [showTopics, toggleShowTopics] = useState(false)
	const [currentTap, setCurrentTap] = useState("TrendingArticle")
	const [enableShow, setEnableShow] = useState(0)
	const [color, setColor] = useState<string[]>([])
	const [topic, setTopic] = useState<string[]>([])
	const { data: topics } = useHotTopics(10)

	useEffect(() => {
		if (topics?.list) {
			setTopic(topics.list)
			const newColors = topics?.list?.map(() => RandomHexColor()) || []
			setColor(newColors)
		}
	}, [])

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
				<Box className="flex items-center">
					<ButtonGroup className="gap-4">
						<Button
							className={`py-0.375rem px-0.625rem !bg-#f8f8f8 text-1rem font-700 !hover:color-#000 ${
								enableShow == 0 ? "!color-#000" : "!color-#9B9B9B"
							}`}
							onClick={() => {
								setCurrentTap("TrendingArticle")
								setEnableShow(0)
							}}
						>
							Most Popular
						</Button>
						<Button
							className={`py-0.375rem px-0.625rem !bg-#f8f8f8 text-1rem font-700 !hover:color-#000 ${
								enableShow == 1 ? "!color-#000" : "!color-#9B9B9B"
							}`}
							onClick={() => {
								toggleShowTopics(!showTopics)
								setEnableShow(1)
							}}
						>
							Hot Topics
						</Button>
						<Button
							className={`py-0.375rem px-0.625rem !bg-#f8f8f8 text-1rem font-700 !hover:color-#000 ${
								enableShow == 2 ? "!color-#000" : "!color-#9B9B9B"
							}`}
							onClick={() => {
								setCurrentTap("Users")
								setEnableShow(2)
							}}
						>
							Users
						</Button>
					</ButtonGroup>
				</Box>
				{topic && showTopics && (
					<TrendingHotTopics list={topic} count={13} color={color} />
				)}
				{trendingBody()}
			</Stack>
		</>
	)
}
