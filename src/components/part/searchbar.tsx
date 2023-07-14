/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import AppearanceSwitch from "@/components/part/appearance-switch"
import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Text,
} from "@chakra-ui/react"

import { useShowNotificationModal } from "@crossbell/notification"
import { CharacterAvatar } from "@crossbell/ui"
import {
	ConnectButton,
	useAccountCharacter,
	useIsConnected,
} from "@flarezone/connect-kit"
import { BiSearch } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { useDarkMode } from "usehooks-ts"

export function NotificationBtn() {
	const isConnected = useIsConnected()
	const showNotificationModal = useShowNotificationModal()

	if (!isConnected) return null

	return <button onClick={showNotificationModal } className="i-fa6-regular-bell w-3rem" />
}

function Avatar() {
	const character = useAccountCharacter()

	const navigate = useNavigate()

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

export const SearchBar = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
			<Stack
				direction="row"
				className="items-center py-2.6875rem h-8.375rem border-b-2px border-b-#D9D9D9"
			>
				<InputGroup size="md">
					<InputLeftElement pointerEvents="none">
						<BiSearch color="gray" />
					</InputLeftElement>
					<Input
						variant="filled"
						type="text"
						placeholder="Search topics, news"
						className="w-40rem max-w-[50rem] !rounded-9999px"
					/>
					<Button
						rounded="full"
						style={gradientButtonStyle}
						className="mx-1rem !pt-1.0625rem !pr-1.75rem !pb-0.8125rem !pl-1.6875rem"
					>
						<Text
							bgGradient="linear(to-r, #F9D423, #F83600)"
							bgClip="text"
							className="text-0.875rem mx-1rem"
						>
							Chat with Flare AI
						</Text>
					</Button>
				</InputGroup>
				<div className="items-center flex flex-row mr-1rem gap-2.25rem box-content">
					<AppearanceSwitch />
					<NotificationBtn />
					<Avatar />
				</div>
			</Stack>
		</>
	)
}
