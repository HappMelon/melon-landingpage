import { ArticleTag } from "@/components/part/articleTag"
import { Article, Character } from "@/type"
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import {
	useIsNoteLiked,
	useNoteLikeCount,
	useToggleLikeNote,
} from "@flarezone/connect-kit"
import { Remarkable } from "remarkable"

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

	return (
		<>
			<Box className="flex w-full py-3 px-3 border-b border-gray/20 bg-hover cursor-pointer flex-row">
				<Stack className="flex !flex-row">
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
						</div>
					</div>
				</Stack>
			</Box>
		</>
	)
}
