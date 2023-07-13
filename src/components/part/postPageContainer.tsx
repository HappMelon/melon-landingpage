import { Grid, GridItem } from "@chakra-ui/react"

import { PostPageEditor } from "@/components/part/postPageEditor"
import { PostPageHeader } from "@/components/part/postPageHeader"
import { PostPageNav } from "@/components/part/postPageNav"
import { useNavigate } from "react-router-dom"

export const PostPageContainer = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const navigate = useNavigate()
	return (
		<>
			<Grid
				templateAreas={`"header header"
				"nav main"`}
				gridTemplateRows={"100px 1fr 30px"}
				gridTemplateColumns={"300px 1fr"}
				gap="0"
				h="full"
				color="blackAlpha.700"
				fontWeight="bold"
				overflow="hidden"
			>
				<GridItem pl="3" area={"header"} ml="5%" mr="50px" h="100%">
					<PostPageHeader />
				</GridItem>
				<GridItem
					pl="2"
					area={"nav"}
					ml="25%"
					w="400px"
					maxHeight="100%"
					overflowY="auto"
					overflowX="hidden"
				>
					<PostPageNav />
				</GridItem>
				<GridItem area={"main"} w="75%" ml="15%" h="100%">
					<PostPageEditor />
				</GridItem>
			</Grid>
		</>
	)
}
