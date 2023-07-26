import { ipfsLinkToHttpLink } from "@/share/ipfs"
import { useAccount } from "@/state/Account"
import { useMostPopular } from "@/state/Character"
import { useStatus } from "@/state/Status"
import { useTrendingNote, useTrendingNoteSlide } from "@/state/TrendingNote"
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { Note } from "crossbell"
import { useEffect, useRef, useState } from "react"
import { FiArrowUp } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import { useNavigate } from "react-router-dom"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

export const NoteWithAccount = ({ note }: { note: Note }) => {
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
	const [cursor, setCursor] = useState(503)
	const Ref = useRef<HTMLDivElement>(null)

	const { data: nd } = useTrendingNote("note", false, 10)
	const { data: slide, isLoading } = useTrendingNoteSlide(
		"note",
		false,
		20,
		cursor
	)

	useEffect(() => {
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
						console.log(slide, slide?.note, cursor)

						if (slide && slide.note) {
							setNote([...note, ...slide.note])
							setCursor(cursor - 20)
							console.log(cursor)
						}
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
		return Array.from({ length: 6 }).map((_, index) => (
			<Box className="flex mt-2rem w-50rem" key={index}>
				<SkeletonCircle size="3rem" />
				<Box className="flex flex-col ml-1rem w-full">
					<Box className="flex mt-1rem">
						<Skeleton className="h-1rem w-4rem" />
						<Skeleton className="h-1rem w-4rem ml-1rem" />
					</Box>
					<SkeletonText
						width={"full"}
						mt="4"
						noOfLines={3}
						spacing="3"
						skeletonHeight="3"
					/>
				</Box>
			</Box>
		))
	}

	return (
		<div>
			{note
				? (note ?? []).slice(0, note.length)?.map((item: Note, i: number) => (
						<div key={i} className="flex" ref={Ref}>
							<NoteWithAccount key={i} note={item} />
						</div>
				))
				: !isLoading && (
						<Box className="flex w-50rem">
							<SkeletonCircle size="3rem" />
							<Box className="flex flex-col ml-1rem w-full">
								<Box className="flex mt-1rem">
									<Skeleton className="h-1rem w-4rem" />
									<Skeleton className="h-1rem w-4rem ml-1rem" />
								</Box>
								<SkeletonText
									width={"full"}
									mt="4"
									noOfLines={3}
									spacing="3"
									skeletonHeight="3"
								/>
							</Box>
						</Box>
				)}
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
