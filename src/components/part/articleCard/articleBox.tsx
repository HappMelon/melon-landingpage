import { ArticleTag } from "@/components/part/articleCard/articleTag"
import { Article, Character } from "@/type"
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"

import {
	useAccountCharacter,
	useIsNoteLiked,
	useNoteLikeCount,
	useToggleLikeNote,
} from "@flarezone/connect-kit"

import ABI from "@/contract/betting.json"
import { CalculateDate } from "@/lib/utils"
import { ipfsLinkToHttpLink } from "@/share/ipfs"
import { useNoteIndex } from "@/state/Note"
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { ethers } from "ethers"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { Remarkable } from "remarkable"

const address = "0xB43da67840856167a627b5bfcdaB4a86Ba686A24"

let Conctract: any

let provider: ethers.providers.Web3Provider

const transformLinkUri = (uri: string) => {
	return ipfsLinkToHttpLink(uri, { origin: "https://ipfs.io" })
}

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

interface ArticleBoxProps extends BoxProps {
	data: Article
	account: Character
}

interface Props {
	noteId: number
	characterId: number
}

function NoteLikeCount({ noteId, characterId }: Props) {
	const { data: likeCount } = useNoteLikeCount({
		noteId: noteId,
		characterId: characterId,
	})
	return <div>{likeCount}</div>
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

export const ArticleBox = ({ data, account }: ArticleBoxProps) => {
	const md = new Remarkable()
	function renderMarkdownToHTML(markdown: string) {
		// This is ONLY safe because the output HTML
		// is shown to the same user, and because you
		// trust this Markdown parser to not have bugs.
		const renderedHTML = md.render(markdown)
		return { __html: renderedHTML }
	}

	const character = useAccountCharacter()
	const { data: note } = useNoteIndex(character?.characterId as number)

	return (
		<>
			<Box className="flex w-full py-3 px-3 border-b border-gray/20 bg-hover cursor-pointer flex-row">
				<Stack className="flex !flex-row w-50rem cursor-pointer hover-transition-opacity hover:bg-#9ca3af10 rounded-xl">
					<CharacterAvatar
						className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
						size="4rem"
						character={account}
					/>
					<div>
						<Stack className="flex !flex-row !flex-wrap items-center">
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
						<Text className="color-#000 text-1.125rem font-700 my-2 break-words leading-1.25rem">
							{data ? data?.metadata?.content?.title : ""}
						</Text>
						<ReactMarkdown
							components={ChakraUIRenderer()}
							rehypePlugins={[rehypeHighlight, remarkGfm]}
							transformImageUri={transformLinkUri}
							skipHtml={true}
						>
							{data.metadata.content.content}
						</ReactMarkdown>
						<Stack direction="row" align="center" spacing="1rem">
							{data.metadata.content.sources ? (
								data.metadata.content.sources.map((tag, i) => (
									<ArticleTag num={i} key={i} content={tag} />
								))
							) : (
								<></>
							)}
						</Stack>
						<div className="flex gap-2 pt !items-center">
							<IsNoteLiked
								noteId={data.noteId}
								characterId={data.characterId}
							/>
							<NoteLikeCount
								noteId={data.noteId}
								characterId={data.characterId}
							/>
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
									<></>
								)}
							</div>
						</div>
					</div>
				</Stack>
			</Box>
		</>
	)
}
