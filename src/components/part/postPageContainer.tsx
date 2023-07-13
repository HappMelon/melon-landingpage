import { Grid, GridItem } from "@chakra-ui/react"

import { PostPageEditor } from "@/components/part/postPageEditor"
import { PostPageHeader } from "@/components/part/postPageHeader"
import { PostPageNav } from "@/components/part/postPageNav"
import { CharacterAvatar } from "@crossbell/ui"
import { ConnectButton, useAccountCharacter } from "@flarezone/connect-kit"
import { useNavigate } from "react-router-dom"
function Avatar() {
	const navigate = useNavigate()
	const character = useAccountCharacter()

	const pushAccount = () => {
		navigate(`/@${character?.handle || ""}`)
	}

	return (
		<ConnectButton>
			{(status, { connect }) => {
				if (status.isConnected) {
					const { character } = status.account
					return (
						<CharacterAvatar
							onClick={() => pushAccount()}
							size="2.5vw"
							character={character}
							className="cursor-pointer"
						/>
					)
				} else {
					return <button onClick={connect}>Connect</button>
				}
			}}
		</ConnectButton>
	)
}

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
