import { PostPagePublicStack } from "@/components/part/postPagePublishedStack"
import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"

//TODO: Set different results for postNavBody
export const PostPageNav = () => {
	const [currentTap, setCurrentTap] = useState("Published")
	const postNavBody = () => {
		switch (currentTap) {
			case "Published":
				return <PostPagePublicStack />
			case "Unpublished":
				return <PostPagePublicStack />
			case "Draft":
				return <PostPagePublicStack />
			case "Sort By Interaction":
				return <PostPagePublicStack />
			default:
				return <PostPagePublicStack />
		}
	}
	return (
		<>
			<Stack className="mr-auto mt-2vh flex-col">
				<Box className="flex items-center w-full">
					<ButtonGroup>
						<Button
							color={currentTap === "Published" ? "black" : "grey"}
							bg="#F8F8F8"
							fontWeight="700"
							size="sm"
							onClick={() => {
								setCurrentTap("Published")
							}}
						>
							Published
						</Button>
						<Button
							color={currentTap === "Unpublished" ? "black" : "grey"}
							bg="#F8F8F8"
							fontWeight="700"
							size="sm"
							onClick={() => {
								setCurrentTap("Unpublished")
							}}
						>
							Unpublished
						</Button>
						<Button
							color={currentTap === "Draft" ? "black" : "grey"}
							bg="#F8F8F8"
							fontWeight="700"
							size="sm"
							onClick={() => {
								setCurrentTap("Draft")
							}}
						>
							Draft
						</Button>
						<Button
							color={currentTap === "Sort By Interaction" ? "black" : "grey"}
							bg="#F8F8F8"
							fontWeight="700"
							size="sm"
							onClick={() => {
								setCurrentTap("Sort By Interaction")
							}}
						>
							Sort By Interaction
						</Button>
					</ButtonGroup>
				</Box>
				{postNavBody()}
			</Stack>
		</>
	)
}
