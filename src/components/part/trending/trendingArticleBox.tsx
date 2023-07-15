/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAccount } from "@/state/Account"
import { useMostPopular } from "@/state/Character"
import { useStatus } from "@/state/Status"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import { Note } from "crossbell"
import { useEffect, useState } from "react"

const NoteWithAccount = ({ note }: { note: Note }) => {
	const cid = note.characterId
	const nid = note.noteId

	const { data: n } = useStatus(String(cid), String(nid))

	const { data: h } = useMostPopular(String(n?.characterId))

	console.log(h);

	const accountName = h?.metadata?.content?.name ? h.metadata.content.name : ""
	const { data: account } = useAccount(accountName)

	return (
		<div className="flex items-center gap-1rem overflow-hidden flex-nowrap">
			<CharacterAvatar
				className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
				size="4rem"
				character={account}
			/>
		</div>
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
