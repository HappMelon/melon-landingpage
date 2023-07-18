import { ArticleTag } from "@/components/part/articleCard/articleTag"
import { useStatus } from "@/state/Status"
import { Article, Character } from "@/type"
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import {
	useAccountCharacter,
	useIsNoteLiked,
	useNoteLikeCount,
	useToggleLikeNote,
} from "@flarezone/connect-kit"
import { Remarkable } from "remarkable"

import ABI from "@/contract/betting.json"
import { useNoteIndex } from "@/state/Note"
import { ethers } from "ethers"

const address = "0xB43da67840856167a627b5bfcdaB4a86Ba686A24"

let Conctract: any

if (typeof window.ethereum !== 'undefined') {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const provider = new ethers.providers.Web3Provider(window?.ethereum)

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ArticleBox = ({ data, account, ...Props }: ArticleBoxProps) => {
	const md = new Remarkable()
	function renderMarkdownToHTML(markdown: string) {
		// This is ONLY safe because the output HTML
		// is shown to the same user, and because you
		// trust this Markdown parser to not have bugs.
		const renderedHTML = md.render(markdown)
		return { __html: renderedHTML }
	}

	function calculateDate(date: string) {
		const now = new Date()
		const diff = Number(now) - Number(new Date(date))

		const seconds = Math.floor(diff / 1000)
		const minutes = Math.floor(seconds / 60)
		const hours = Math.floor(minutes / 60)
		const days = Math.floor(hours / 24)
		const weeks = Math.floor(days / 7)
		const months = Math.floor(days / 30)
		const years = Math.floor(days / 365)

		if (seconds < 60) {
			return `${seconds} seconds ago`
		} else if (minutes < 60) {
			return `${minutes} minute ago`
		} else if (hours < 24) {
			return `${hours} hour ago`
		} else if (days < 7) {
			return `${days} days ago`
		} else if (weeks < 4) {
			return `${weeks} weeks ago`
		} else if (months < 12) {
			return `${months} moons ago`
		} else {
			return `${years} years ago`
		}
	}

	const character = useAccountCharacter()
	const { data: bet } = useStatus(String(data.characterId), String(data.noteId))
	const { data: note } = useNoteIndex(character?.characterId as number)

	return (
		<>
			<Box className="flex w-full py-3 px-3 border-b border-gray/20 bg-hover cursor-pointer flex-row">
				<Stack
					className="flex !flex-row w-50rem cursor-pointer hover-transition-opacity hover:bg-#9ca3af10 rounded-xl"
					// OPTIMIZE 这里先这么写, 之后按照统一的方式 open page
					// onClick={() => {
					// 	window.location.href = `/@${account?.handle}/status/${data?.characterId}-${data?.noteId}`
					// }}
				>
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
								{calculateDate(data.createdAt)}
							</Text>
						</Stack>
						<Text className="color-#000 text-1.125rem font-700 my-2 break-words leading-1.25rem">
							{data ? data?.metadata?.content?.title : ""}
						</Text>
						<Text
							className="color-#9B9B9B text-1rem my-2 break-words leading-1.25rem "
							dangerouslySetInnerHTML={renderMarkdownToHTML(
								data.metadata.content.content
							)}
						>
							{}
						</Text>
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
													// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
													window.ethereum.request({
														method: "wallet_switchEthereumChain",
														params: [
															{
																chainId: hexChainId,
															},
														],
													})
												)
												// eslint-disable-next-line @typescript-eslint/no-unused-vars
												let FlareContract: any
												window.ethereum &&
													// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
													window.ethereum.on(
														"chainChanged",
														(chainId: string) => {
															console.log("chainId:", chainId)
															// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
															FlareContract = Conctract()
															// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions
															const postId = `${note?.count}${character?.characterId}`
															// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
															if (FlareContract) {
																// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
																FlareContract?.Participate(postId, {value: String(10000000000000000)})
															} else {
																console.log("contract is not ready")
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
