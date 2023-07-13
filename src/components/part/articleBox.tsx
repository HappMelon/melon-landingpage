import { Box, BoxProps, Button, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { CharacterAvatar } from "@crossbell/ui"
import { BsThreeDotsVertical } from "react-icons/bs"
import {ArticleTag} from "./articleTag"
import {Article} from "@/type"
import { Remarkable } from "remarkable"


interface ArticleBoxProps extends BoxProps{
	data: Article
}
export const ArticleBox = ({data,...props}:ArticleBoxProps) => {
	const md = new Remarkable()
	function renderMarkdownToHTML(markdown: string) {
		// This is ONLY safe because the output HTML
		// is shown to the same user, and because you
		// trust this Markdown parser to not have bugs.
		const renderedHTML = md.render(markdown)
		return { __html: renderedHTML }
	}
	function calculateDate(time: string) {
		const date1 = new Date(time)
		const date2 = new Date()
		const difference = date2.getTime() - date1.getTime()
		return Math.ceil(difference / (1000 * 3600 * 24))
	}
	return (
		<>
			<Box className="w-50vw min-h-25vh bg-#F8F8F8 rounded-2rem">
				<Stack className="flex !flex-row w-full h-full overflow-auto p-2.5vh gap-2rem">
					{/* <CharacterAvatar
						className="h-11.5rem rounded-1rem object-cover shadow-xl aspect-ratio-1"
						size="11.5rem"
						character={data.characterId}
					/> */}
					<Image
						className="h-11.5rem rounded-1rem object-cover shadow-xl aspect-ratio-1"
						src="https://images.ctfassets.net/pdf29us7flmy/7MAfLagu0g3iappEl8QH3S/5ebac5a5115d2ecd3eb357b992d949ee/GettyImages-643897728_optimized.jpg"
						alt="Cover"
					/>
					<Stack className="flex flex-col gap-0.75rem justify-start items-start">
						<Text className="color-#9B9B9B text-0.75rem">
							Published{" "}
							{calculateDate(
								data.metadata.content.date_published || data.createdAt
							)}{" "}
							days ago
						</Text>
						<Text className="color-#000 text-1.125rem font-700">
							{data.metadata.content.title}
						</Text>
						<Text
							className="color-#9B9B9B text-1rem"
							dangerouslySetInnerHTML={renderMarkdownToHTML(data.metadata.content.content)
							}
						>
							{}
						</Text>
						<Flex className="flex flex-row justify-between items-center w-full">
							<Stack className="flex !flex-row justify-start justify-items-start items-center gap-1rem">
								<Button
									className="color-#000 text-0.75rem p-0"
									leftIcon={<AiOutlineEye />}
									bg="none"
									_hover={{ bg: "none" }}
								>
									80k+
								</Button>
								<Button
									color="#000000"
									fontSize="0.75rem"
									leftIcon={<AiOutlineHeart />}
									p="0"
									bg="none"
									_hover={{ bg: "none" }}
								>
									50k+
								</Button>
								<Button
									color="#000000"
									fontSize="0.75rem"
									leftIcon={<AiOutlineComment />}
									p="0"
									bg="none"
									_hover={{ bg: "none" }}
								>
									88k+
								</Button>
							</Stack>
							<Stack direction="row" align="center" spacing="1rem">
								{data.metadata.content.tags ? (
									data.metadata.content.tags.map((tag, i) => (
										<ArticleTag num={i} key={i} content={tag} />
									))
								) : (
									<></>
								)}
							</Stack>
							<BsThreeDotsVertical fontSize="1.5rem" color="#9B9B9B" />
						</Flex>
					</Stack>
				</Stack>
			</Box>
		</>
	)
}
