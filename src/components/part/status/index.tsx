/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NoteWithAccount } from "@/components/part/trending/trendingArticleBox"
import { ipfsLinkToHttpLink } from "@/share/ipfs"
import { useAccount } from "@/state/Account"
import { useCommitInfo } from "@/state/CommitInfo"
import { useStatus } from "@/state/Status"
import { Button, Textarea } from "@chakra-ui/react"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import { useAccountCharacter, usePostNoteForNote } from "@flarezone/connect-kit"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { useNavigate, useParams } from "react-router-dom"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

export default function App() {
	const { username, id } = useParams()

	const navigate = useNavigate()

	const [value, setValue] = useState("")

	const character = useAccountCharacter()

	const pushAccount = () => {
		navigate(`/@${account?.handle || ""}`)
	}

	const cid = id?.split("-")[0] as string
	const nid = id?.split("-")[1] as string

	// FIXME 每个组件都需要去引用 useAccount, 这样会导致每个组件都会去请求一次, 是否可能把抽离成一个全局的状态管理?

	const { data: account } = useAccount(
		username ? username.replace("@", "") : ""
	)

	const { data: note, isLoading } = useStatus(cid, nid)
	const { data: commmit, mutate } = useCommitInfo(Number(cid), Number(nid), 20)

	const co = { characterId: cid, noteId: nid }
	const postNoteForNote = usePostNoteForNote()

	const ipfsLink =
		note?.metadata?.content?.attachments !== undefined
			? note?.metadata?.content?.attachments[0]?.address
			: ""

	const ipfsRegex = /ipfs:\/\/(.*)/g
	const match = ipfsRegex.exec(ipfsLink as string)
	const ipfsHash = match ? match[1] : ""

	const imageUrl = `https://xfeed.app/ipfs/${ipfsHash}`

	const transformLinkUri = (uri: string) => {
		return ipfsLinkToHttpLink(uri, { origin: "https://ipfs.io" })
	}

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="pt-0.75rem">
			<div className="flex flex-row">
				<CharacterAvatar
					className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover cursor-pointer"
					size="4rem"
					character={account}
					onClick={pushAccount}
				/>
				<div className="pl-0.625rem">
					<div className="flex items-center">
						<div className="color-#2c2e33 text-1rem font-700">
							{account?.handle}
						</div>
						<div className="pl-0.125rem color-#868e96 text-0.875rem">
							@{account?.metadata?.content?.name}
						</div>
					</div>
					<ReactMarkdown
						className="overflow-hidden  !text-left pt-0.5rem w-60rem pb-8rem"
						components={ChakraUIRenderer()}
						rehypePlugins={[rehypeHighlight, remarkGfm]}
						transformImageUri={transformLinkUri}
						skipHtml
					>
						{note?.metadata?.content?.content as string}
					</ReactMarkdown>
					{ipfsLink ? (
						<img
							className="w-full h-auto"
							src={imageUrl}
							alt={note?.metadata?.content?.title}
						/>
					) : (
						""
					)}
					{/* 评论区 */}
					<div className="mt-1rem">
						<div className="flex gap-1rem">
							<CharacterAvatar
								className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
								size="4rem"
								character={character}
							/>
							<Textarea
								value={value}
								placeholder="Here is a sample placeholder"
								onChange={(e) => setValue(e.target.value)}
							/>
						</div>
						<div className="flex justify-end mt-1rem">
							<Button
								colorScheme="blue"
								onClick={() => {
									postNoteForNote.mutate(
										{
											note: {
												characterId: Number(co.characterId),
												noteId: Number(co.noteId),
											},
											metadata: {
												content: value,
												sources: ["FlareZone Dev"],
												external_urls: ["https://flare-zone.io"],
												tags: ["post"],
											},
										},
										{
											onSuccess: () => {
												mutate
												setValue("")
											},
										}
									)
								}}
							>
								Reply Note
							</Button>
						</div>
					</div>
					{/* 把评论展示出来 */}
					{commmit?.count != null &&
						commmit.list.map((c, index) => (
							<div key={index}>
								<NoteWithAccount note={c}></NoteWithAccount>
							</div>
						))}
					{/* https://indexer.crossbell.io/v1/notes?toCharacterId=47393&toNoteId=86&limit=20 */}
					{/* 获取某个人某个note的详细信息 */}
					{/* https://indexer.crossbell.io/v1/characters/49213/notes/22 */}
					{/* note 超过20 条之后加上 cursor 处理请求 */}
					{/* https://indexer.crossbell.io/v1/notes?toCharacterId=50854&toNoteId=54&cursor=50854_58&limit=20 */}
					{/* 发评论 */}
					{/*  */}
				</div>
			</div>
		</div>
	)
}
