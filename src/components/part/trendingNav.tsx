import { TrendingArticleStack } from "@/components/part/trendingArticleStack"
import { TrendingHotTopics } from "@/components/part/trendingHotTopics"
import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"
export const TrendingNav = () => {
	const [showTopics, toggleShowTopics] = useState(false)
	return (
		<>
			<Stack direction="column" mt="5vh" mr="auto">
				<Box display="flex" alignItems="center" width="100%">
					<ButtonGroup gap="4">
						<Button colorScheme="blackAlpha">Most Popular</Button>
						<Button
							colorScheme="blackAlpha"
							onClick={() => {
								toggleShowTopics(!showTopics)
							}}
						>
							Hot Topics
						</Button>
						<Button colorScheme="blackAlpha">Users</Button>
					</ButtonGroup>
				</Box>
				{showTopics && <TrendingHotTopics />}
				<TrendingArticleStack />
			</Stack>
		</>
	)
}
