import {
	BettingAtom,
	EnableBettingAtom,
	ValueAtom,
} from "@/components/part/post/postPageEditor"
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
import {
	ConnectButton,
	useAccountCharacter,
	usePostNote,
} from "@flarezone/connect-kit"
import Web3 from "web3"
import { ethers, providers } from "ethers"
import { AbiItem } from "web3-utils"
import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"

const web3 = new Web3("https://exchaintestrpc.okex.org")

import contractABI from "@/contract/betting.json"

const contractAddress = "0xB43da67840856167a627b5bfcdaB4a86Ba686A24"

const contract = new web3.eth.Contract(
	contractABI as AbiItem[],
	contractAddress
)

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

export const PostPageHeader = () => {
	const [value] = useAtom(ValueAtom)
	const [betting] = useAtom(BettingAtom)
	const [enable] = useAtom(EnableBettingAtom)

	const navigate = useNavigate()
	const postNote = usePostNote()

	const Conctract = () => {
		const signer = Provider().getSigner()
		const Contract = new ethers.Contract(contractAddress, contractABI, signer)
		return Contract
	}

	// TODO 暂时无法显示换行
	function Post() {
		console.log(betting, enable)

		const cleanedData = value
			.replace(/<\/?[a-z]+[^>]*>/gi, "")
			.replace(/<[^>]+>/g, "\n")

		postNote.mutate(
			{
				metadata: {
					content: cleanedData,
					sources: ["Flare Dev"],
					external_urls: ["https://flare-dapp.io"],
					tags: ["post"],
				},
			},
			{
				// 掉对赌合约.
				onSuccess: () => {
					if (window.ethereum) {
						window.ethereum.on("chainChanged", (chainId: any) => {
							console.log("chainId:", chainId)
							const FlareContract = Conctract()
						})
					}
				},
			}
		)
	}

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
					<Button marginLeft="2rem" rounded="full" onClick={Post}>
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
