import { ipfsLinkToHttpLink } from "@/share/ipfs"
import { useAccount } from "@/state/Account"
import { useMostPopular } from "@/state/Character"
import { useStatus } from "@/state/Status"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import { Note } from "crossbell"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

const NoteWithAccount = ({ note }: { note: Note }) => {
	const cid = note.characterId
	const nid = note.noteId

	const { data: n } = useStatus(String(cid), String(nid))

	const { data: h } = useMostPopular(String(n?.characterId))

	const accountName = h?.metadata?.content?.name ? h.metadata.content.name : ""
	const { data: account } = useAccount(accountName)

	const transformLinkUri = (uri: string) => {
		return ipfsLinkToHttpLink(uri, { origin: "https://ipfs.io" })
	}

	const content = n?.metadata?.content?.content as string
	const truncatedContent =
		content?.length > 160 ? content.slice(0, 160) + "..." : content

	return (
		<button
			className="flex flex-col w-full py-3 px-3 border-b border-gray/20 bg-hover cursor-pointer w-55rem hover:bg-#9ca3af10"
			onClick={() => {
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				window.location.href = `/@${h?.handle}/status/${n?.characterId}-${n?.noteId}`
			}}
		>
			<div className="flex">
				<CharacterAvatar
					className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
					size="4rem"
					character={account}
				/>
				<div className="pl-0.25rem">
					<div>{h?.handle}</div>
					<div>{h?.metadata?.content?.name}</div>
					<div></div>
				</div>
			</div>
			<ReactMarkdown
				className="overflow-hidden pt-1rem !text-left"
				transformImageUri={transformLinkUri}
			>
				{truncatedContent}
			</ReactMarkdown>
		</button>
	)
}

export const TrendingArticleBox = () => {
	const [note, setNote] = useState<Note[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`https://recommend.crossbell.io/raw?type=note&rand=false&limit=20`)
			.then((res) => res.json())
			.then(
				(result: { note: Note[] }) => {
					setIsLoading(false)
					setNote(result.note)
				},
				(error) => {
					setIsLoading(false)
					console.log("fetch character data failed, error:", error)
				}
			)
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			{note.slice(0, 20)?.map((item: Note, i: number) => (
				<div key={i} className="flex">
					<NoteWithAccount key={i} note={item} />
				</div>
			))}
		</>
	)
}
