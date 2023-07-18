import { useShowNotificationModal } from "@crossbell/notification"
import { CharacterAvatar } from "@crossbell/ui"
import { Button, Divider, Text, TextInput } from "@mantine/core"
import { useNavigate } from "react-router-dom"

import AppearanceSwitch from "@/components/common/appearance-switch"
import {
	ConnectButton,
	useAccountCharacter,
	useIsConnected,
} from "@flarezone/connect-kit"
import { useDarkMode } from "usehooks-ts"

export function NotificationBtn() {
	const isConnected = useIsConnected()
	const showNotificationModal = useShowNotificationModal()

	if (!isConnected) return null

	return (
		<button
			onClick={showNotificationModal}
			className="i-fa6-regular-bell w-3rem"
		/>
	)
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
		<div className="w-full h-10rem flex flex-row items-center justify-between">
			<div className="flex flex-row items-center">
				<TextInput
					icon={<Text className="i-flare:search" />}
					type="text"
					placeholder="Search topics, news"
					className="w-42rem mr-1.5rem"
					size="md"
				/>
				<Button style={gradientButtonStyle} className="rounded-50px">
					<div className="btn text-1.125rem font-700 text">
						Chat with Flare AI
					</div>
				</Button>
			</div>
			<div className="items-center flex flex-row mr-1rem gap-2.25rem box-content">
				<NotificationBtn />
				<AppearanceSwitch />
				<Avatar />
			</div>
			<Divider size="sm" />
		</div>
	)
}
