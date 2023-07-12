import { Button, Grid, GridItem, Stack } from "@chakra-ui/react"

import { PostPageEditor } from "@/components/part/postPageEditor"
import { PostPageNav } from "@/components/part/postPageNav"
import { CharacterAvatar } from "@crossbell/ui"
import { ConnectButton } from "@flarezone/connect-kit"
import { useNavigate } from "react-router-dom"
function Avatar() {
	const navigate = useNavigate()

	const pushAccount = () => {
		navigate(`/account`)
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
					<Stack
						direction="row"
						className="items-center py-2.6875rem h-8.375rem border-b-2px border-b-#D9D9D9"
					>
						<div className="items-center flex flex-row mr-1rem gap-2.25rem box-content">
							<Button
								onClick={() => {
									navigate("/explore")
								}}
							>
								Back
							</Button>
							<Button>Save as Draft</Button>
							<Button>Publish</Button>
							<Avatar />
						</div>
					</Stack>
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
				<GridItem area={"main"} w="75%" ml="20%" h="100%">
					<PostPageEditor />
				</GridItem>
			</Grid>
		</>
	)
}
