/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import AppearanceSwitch from "@/components/part/appearance-switch"
import {
	Button,
	Divider,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Text,
} from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import { ConnectButton } from "@flarezone/connect-kit"
import { BiSearch } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { useDarkMode } from "usehooks-ts"

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

export const SearchBar = () => {
	const { isDarkMode, toggle } = useDarkMode()
	const bgColor = isDarkMode ? "black" : "white"
	const lgFrom = "#FFC700"
	const lgTo = "#F83600"
	const gradientButtonStyle = {
		color: "transparent",
		border: "3px solid",
		borderColor: "transparent",
		borderRadius: "full",
		background: `linear-gradient(${bgColor}, ${bgColor}) padding-box,
		linear-gradient(135deg, ${lgFrom}, ${lgTo}) border-box`,
		"> *": {
			background: `linear-gradient(135deg, ${lgFrom}, ${lgTo})`,
			backgroundClip: "text",
			textFillColor: "transparent",
		},
		_hover: {
			background: `linear-gradient(${bgColor}, ${bgColor}) padding-box,
		linear-gradient(315deg, ${lgFrom}, ${lgTo}) border-box`,
			"> *": {
				background: `linear-gradient(315deg, ${lgFrom}, ${lgTo})`,
				backgroundClip: "text",
			},
		},
	}

	return (
		<>
			<Stack spacing={4} h="3.125rem" direction="row" align="center" m="1rem">
				<InputGroup size="md">
					<InputLeftElement pointerEvents="none">
						<BiSearch color="gray" />
					</InputLeftElement>
					<Input
						w="40rem"
						maxW="50rem"
						variant="filled"
						borderRadius="full"
						type="text"
						placeholder="Search topics, news"
					/>
					<Button marginLeft="2rem" rounded="full" style={gradientButtonStyle}>
						<Text bgGradient="linear(to-r, #F9D423, #F83600)" bgClip="text">
							Chat with Flare AI
						</Text>
					</Button>
				</InputGroup>
				<div className="items-center flex flex-row mr-1rem gap-2.25rem box-content">
					<AppearanceSwitch />
					<div className="i-fa6-regular-bell w-24px h-24px" />
					<Avatar />
				</div>
			</Stack>
			<Divider />
		</>
	)
}
