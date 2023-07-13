import {
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	Image,
	Spacer,
} from "@chakra-ui/react"
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

export const PostPageHeader = () => {
	const navigate = useNavigate()
	return (
		<>
			<Flex minWidth="max-content" alignItems="center" gap="2">
				<HStack p="2">
					<Image src="/logo.png" alt="Logo" />
					<Heading
						size="md"
						bgGradient="linear(to-r, #FFC700, #F5740F)"
						bgClip="text"
					>
						Creator Studio
					</Heading>
				</HStack>
				<Spacer />
				<HStack spacing="-1.5">
					<Button
						onClick={() => {
							navigate("/explore")
						}}
					>
						Back
					</Button>
					<Button
						bgColor="#F8F8F8"
						border="2px solid D9D9D9"
						borderRadius="40px"
						marginLeft="2rem"
						rounded="full"
					>
						Save as Draft
					</Button>
					<Button marginLeft="2rem" rounded="full">
						Publish
					</Button>
					<Button marginLeft="2rem" rounded="full">
						<Avatar />
					</Button>
				</HStack>
			</Flex>
			<Divider color="red" />
		</>
	)
}
