import { PostPagePublicStack } from "@/components/part/postPagePublishedStack"
import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"

export const PostPageNav = () => {
	const [currentTap, setCurrentTap] = useState("PostPagePublicStack")
	const postNavBody = () => {
		switch (currentTap) {
			case "TrendingArticle":
				return <PostPagePublicStack />
			default:
				return <PostPagePublicStack />
		}
	}
	return (
		<>
			<Stack className="mr-auto mt-2vh flex-col">
				<Box className="flex items-center w-full">
					<ButtonGroup className="gap-4">
						<Button
							color="black"
							bg="#F8F8F8"
							onClick={() => {
								setCurrentTap("PostPagePublicStack")
							}}
						>
							Published
						</Button>
					</ButtonGroup>
				</Box>
				{postNavBody()}
			</Stack>
		</>
	)
}
