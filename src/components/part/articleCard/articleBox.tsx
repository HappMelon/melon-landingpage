/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ArticleTag } from "@/components/part/articleCard/articleTag"
import { Article, Character } from "@/type"
import { Box, BoxProps, Stack, Text, useToast } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"

import { ethers } from "ethers"
import remarkGfm from "remark-gfm"

import { CalculateDate } from "@/lib/utils"
import { ipfsLinkToHttpLink } from "@/share/ipfs"
import { useNoteIndex } from "@/state/Note"
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useNavigate } from "react-router-dom"
import rehypeHighlight from "rehype-highlight"

import ABI from "@/contract/betting.json"

import {
	useAccountCharacter,
	useIsNoteLiked,
	useNoteLikeCount,
	useToggleLikeNote,
} from "@flarezone/connect-kit"

const address = "0xB43da67840856167a627b5bfcdaB4a86Ba686A24"

let Conctract: any

let provider: ethers.providers.Web3Provider

const transformLinkUri = (uri: string) => {
	return ipfsLinkToHttpLink(uri, { origin: "https://ipfs.io" })
}

// Prevent errors when not installing Metamask
if (typeof window.ethereum !== "undefined") {
	provider = new ethers.providers.Web3Provider(
		window?.ethereum as ExternalProvider | JsonRpcFetchFunc
	)

	Conctract = () => {
		const signer = provider.getSigner()
		const Contract = new ethers.Contract(address, ABI, signer)
		return Contract
	}
}

interface Props {
	noteId: number
	characterId: number
}

interface ArticleBoxProps extends BoxProps {
	data: Article
	account: Character
	index: number
}

function NoteLikeCount({ noteId, characterId }: Props) {
	const { data: likeCount } = useNoteLikeCount({
		noteId: noteId,
		characterId: characterId,
	})
	return <div className="text-0.875rem">{likeCount}</div>
}

function IsNoteLiked({ noteId, characterId }: Props) {
	const note = { characterId: characterId, noteId: noteId }
	const toggleLikeNote = useToggleLikeNote()
	const [{ isLiked }] = useIsNoteLiked({
		noteId: noteId,
		characterId: characterId,
	})

	return (
		<button
			onClick={() => {
				toggleLikeNote.mutate(note)
			}}
		>
			{isLiked ? (
				<div className="i-ic-baseline-favorite !color-#F87171 w-1rem h-1rem" />
			) : (
				<div className="i-ic-baseline-favorite-border w-1rem h-1rem" />
			)}
		</button>
	)
}

export const ArticleBox = ({ index, data, account }: ArticleBoxProps) => {
	const navigate = useNavigate()
	const character = useAccountCharacter()
	const toast = useToast()

	const { data: note } = useNoteIndex(account.characterId)

	const ipfsLink =
		data?.metadata?.content?.attachments !== undefined
			? data?.metadata?.content?.attachments[0]?.address
			: ""

	const ipfsRegex = /ipfs:\/\/(.*)/g
	const match = ipfsRegex.exec(ipfsLink as string)
	const ipfsHash = match ? match[1] : ""

	const imageUrl = `https://xfeed.app/ipfs/${ipfsHash}`

	const handleClick = async (text: string) => {
		toast({
			title: "Share Flare",
			description: "Copied to clipboard",
			status: "success",
			duration: 9000,
			isClosable: true,
		})
		await navigator.clipboard.writeText(text)
	}

	return (
		<Box className="py-2 px-4 w-full border-b border-gray/20 cursor-pointer hover-transition-opacity hover:bg-#9ca3af10 rounded-1">
			<Stack className="flex !flex-row w-full">
				<CharacterAvatar
					className="!w-3rem !h-3rem !rounded-50% shadow-lg"
					size="3rem"
					character={account}
					onClick={() => {
						window.open(`/@${account?.handle}`)
					}}
				/>
				<Stack className="w-full h-full">
					<Stack
						className="flex !flex-row items-center"
						onClick={() => {
							window.open(`/@${account?.handle}`)
						}}
					>
						<Text className="text-1rem font-bold">
							{account ? account?.handle : ""}
						</Text>
						<Text className="text-0.875rem color-#868e96">
							{account ? account?.metadata?.content?.name : ""}
						</Text>
						<Text className="color-#868e96">·</Text>
						<Text className="color-#868e96">
							{CalculateDate(data?.createdAt)}
						</Text>
					</Stack>
					<Stack
						className="flex items-start"
						onClick={() => {
							navigate(
								`/@${account?.handle}/status/${
									note?.list[index].characterId as bigint
								}-${note?.list[index].noteId as bigint}`
							)
						}}
					>
						{data?.metadata?.content?.title ? (
							<Text className="color-#000 text-1.125rem font-700 my-2 break-words leading-1.25rem">
								{data ? data?.metadata?.content?.title : ""}
							</Text>
						) : (
							""
						)}
						<ReactMarkdown
							components={ChakraUIRenderer()}
							rehypePlugins={[rehypeHighlight, remarkGfm]}
							transformImageUri={transformLinkUri}
							skipHtml={true}
						>
							{data?.metadata?.content?.content}
						</ReactMarkdown>
						{ipfsLink ? (
							<img className="w-full h-auto" src={imageUrl} alt={data?.metadata?.content?.title} />
						) : (
							""
						)}
						<Stack direction="row" align="center" spacing="1rem">
							{data.metadata.content.sources ? (
								data.metadata.content.sources.map((tag, i) => (
									<ArticleTag num={i} key={i} content={tag} />
								))
							) : (
								<></>
							)}
						</Stack>
					</Stack>
					<div className="grid grid-cols-4 w-full">
						<div className="flex gap-0.25rem">
							<IsNoteLiked
								noteId={data.noteId}
								characterId={data.characterId}
							/>
							<NoteLikeCount
								noteId={data.noteId}
								characterId={data.characterId}
							/>
						</div>
						<div className="i-mdi-comment-text-outline w-1rem h-1rem"></div>
						<div>
							{data.metadata.content.sources &&
							data.metadata.content.sources.includes("gambling") ? (
								<div className="flex flex-row items-center">
									<button
										className="i-carbon-currency-dollar w-1rem h-1rem"
										onClick={() => {
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
											let FlareContract: any
											window.ethereum &&
												window.ethereum.on(
													"chainChanged",
													(chainId: string) => {
														console.log("chainId:", chainId)
														// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
														FlareContract = Conctract()
														const postId = `${note?.count as number}${
															character?.characterId as number
														}}`
														if (FlareContract) {
															// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
															FlareContract?.Participate(postId, {
																// a fixed value, value == 0.01 BSC
																value: String(10000000000000000),
															})
														} else {
															console.log("Contract Is Not Ready")
														}
													}
												)
										}}
									></button>
									<div>GM</div>
								</div>
							) : (
								<>GM</>
							)}
						</div>
						<button
							className="i-mdi-share-variant-outline w-1rem h-1rem"
							onClick={() => {
								void handleClick(
									`${window.location.href}/status/${
										note?.list[index].characterId as bigint
									}-${note?.list[index].noteId as bigint}`
								)
							}}
						></button>
					</div>
				</Stack>
			</Stack>
		</Box>
	)
}
