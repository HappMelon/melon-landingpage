import { ipfsLinkToHttpLink } from "@/share/ipfs"
import { useAccount } from "@/state/Account"
import { useMostPopular } from "@/state/Character"
import { useStatus } from "@/state/Status"
import { useTrendingNote, useTrendingNoteSlide } from "@/state/TrendingNote"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { Note } from "crossbell"
import { useEffect, useRef, useState } from "react"
import { FiArrowUp } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import { useNavigate } from "react-router-dom"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

const NoteWithAccount = ({ note }: { note: Note }) => {
	const cid = note?.characterId
	const nid = note?.noteId

	const { data: n } = useStatus(String(cid), String(nid))

	const { data: h } = useMostPopular(
		String(n?.characterId) != "undefined" ? String(n?.characterId) : "0"
	)

	const accountName = h?.handle ? h.handle : ""

	const { data: account } = useAccount(accountName)

	const transformLinkUri = (uri: string) => {
		return ipfsLinkToHttpLink(uri, { origin: "https://ipfs.io" })
	}

	const content = n?.metadata?.content?.content as string

	const truncatedContent =
		content?.length > 300 ? content.slice(0, 300) + "..." : content

	const navigate = useNavigate()

	return (
		<button
			className="flex flex-col w-full py-3 px-3 border-b border-gray/20 bg-hover cursor-pointer hover:bg-#9ca3af10"
			onClick={() => {
				navigate(
					`/@${h?.handle as string}/status/${n?.characterId as number}-${
						n?.noteId as number
					}`
				)
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
				</div>
			</div>
			<ReactMarkdown
				className="overflow-hidden pt-1rem !text-left"
				components={ChakraUIRenderer()}
				rehypePlugins={[rehypeHighlight, remarkGfm]}
				transformImageUri={transformLinkUri}
				skipHtml={true}
			>
				{truncatedContent}
			</ReactMarkdown>
		</button>
	)
}

const handleScrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" })
}

export const TrendingArticleBox = () => {
	const [note, setNote] = useState<Note[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [cursor, setCursor] = useState(503)
	const Ref = useRef<HTMLDivElement>(null)

	const { data: nd } = useTrendingNote("note", false, 10)
	const { data: slide } = useTrendingNoteSlide("note", false, 20, cursor)

	useEffect(() => {
		setIsLoading(false)
		if (nd) {
			setNote(nd?.note)
		}
	}, [nd])

	useEffect(() => {
		const currentRef = Ref?.current
		if (Ref?.current) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[entries.length - 1].isIntersecting) {
						if (slide && slide.note) {
							setIsLoading(false)
							setNote([...note, ...slide.note])
							setCursor(cursor - 10)
						}
						console.log(slide)
					}
				},
				{ threshold: 0.5 }
			)
			if (Ref?.current) {
				observer?.observe(currentRef as Element)
				return () => {
					observer?.unobserve(currentRef as Element)
				}
			}
		}
	}, [slide, cursor, note])

	const [showScroll, setScroll] = useState(false)
	useEffect(() => {
		const handleScrollButtonVisible = () => {
			window.scrollY > 300 ? setScroll(true) : setScroll(false)
		}
		window.addEventListener("scroll", handleScrollButtonVisible)
		return () => {
			window.removeEventListener("scroll", handleScrollButtonVisible)
		}
	})

	if (isLoading) {
		return <Loading className="loading" />
	}

	return (
		<div>
			{note
				? (note ?? []).slice(0, note.length)?.map((item: Note, i: number) => (
						<div key={i} className="flex" ref={Ref}>
							<NoteWithAccount key={i} note={item} />
						</div>
				))
				: ""}
			{showScroll && (
				<div>
					<button
						className="fixed bottom-5 right-10% z-50 cursor-pointer p-5 b-rounded bg-yellow"
						onClick={handleScrollToTop}
					>
						<div className="flex justify-center gap-0.5rem ">
							<FiArrowUp />
							<span className="font-600">Scroll to top</span>
						</div>
					</button>
				</div>
			)}
		</div>
	)
}
