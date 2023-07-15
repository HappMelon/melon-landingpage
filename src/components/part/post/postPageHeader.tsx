import {
	BettingAtom,
	EnableBettingAtom,
	ValueAtom,
} from "@/components/part/post/postPageEditor"
import { useNoteIndex } from "@/state/Note"
import { ethers } from "ethers"

import {
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	Image,
	Spacer,
} from "@chakra-ui/react"

import ABI from "@/contract/betting.json"
import { CharacterAvatar } from "@crossbell/ui"
import {
	ConnectButton,
	useAccountCharacter,
	usePostNote,
} from "@flarezone/connect-kit"
import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"

const address = "0xB43da67840856167a627b5bfcdaB4a86Ba686A24"

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

const provider = new ethers.providers.Web3Provider(window.ethereum)

const Conctract = () => {
	const signer = provider.getSigner()
	const Contract = new ethers.Contract(address, ABI, signer)
	return Contract
}

async function sleep() {
	await new Promise((resolve) => setTimeout(resolve, 8000))
}

function NewPost({
	value,
	sources,
	externalUrls,
	tags,
	isChecked = false,
}: {
	value: string
	sources: string[]
	externalUrls: string[]
	tags: string[]
	isChecked?: boolean
}) {
	const postNote = usePostNote()
	const character = useAccountCharacter()

	const [enable] = useAtom(EnableBettingAtom)
	const [betting] = useAtom(BettingAtom)

	const { data: note } = useNoteIndex(character?.characterId as number)

	return (
		<button
			onClick={() => {
				const newSources = isChecked ? [...sources, "gambling"] : sources
				postNote.mutate(
					{
						metadata: {
							content: value,
							sources: newSources,
							external_urls: externalUrls,
							tags,
						},
					},
					{
						onSuccess: () => {
							if (enable) {
								if (betting) {
									// 发起对赌
									// 1. 切换到需要的链
									const chainId = 97
									const hexChainId = "0x" + chainId.toString(16)
									void (
										window.ethereum &&
										window.ethereum.request({
											method: "wallet_switchEthereumChain",
											params: [
												{
													chainId: hexChainId,
												},
											],
										})
									)
									// 2. 掉对赌合约
									let FlareContract: any
									window.ethereum &&
										window.ethereum.on("chainChanged", (chainId: string) => {
											FlareContract = Conctract()
										})
									sleep
									// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
									FlareContract?.publishPost(
										note?.noteId,
										enable,
										betting,
										86400
									)
								}
							}
						},
					}
				)
			}}
		>
			Publish
		</button>
	)
}

export const PostPageHeader = () => {
	const [value] = useAtom(ValueAtom)
	const [betting] = useAtom(BettingAtom)
	const [enable] = useAtom(EnableBettingAtom)

	const navigate = useNavigate()

	// TODO 暂时无法显示换行
	console.log(betting, enable)

	const cleanedData = value
		.replace(/<\/?[a-z]+[^>]*>/gi, "")
		.replace(/<[^>]+>/g, "\n")

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
					<NewPost
						value={cleanedData}
						sources={["FlareDapp Dev"]}
						externalUrls={["https://crossbell.io"]}
						tags={["post"]}
						isChecked={enable}
					/>
					<Button marginLeft="2rem" rounded="full">
						<Avatar />
					</Button>
				</HStack>
			</Flex>
			<Divider color="red" />
		</>
	)
}
