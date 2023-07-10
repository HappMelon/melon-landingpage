import { ArticleBox } from "@/components/part/articleBox"
import { Stack } from "@chakra-ui/react"

export const ArticleStack = () => {
	return (
		<>
			<Stack className="gap-1.5rem flex !flex-col mt-5vh">
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
			</Stack>
		</>
	)
}
