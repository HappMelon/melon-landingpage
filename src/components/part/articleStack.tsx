import { ArticleBox } from "@/components/part/articleBox"
import { Stack } from "@chakra-ui/react"

export const ArticleStack = () => {
	return (
		<>
			<Stack spacing="1.5rem" direction="column" mt="5vh">
				<ArticleBox />
				<ArticleBox />
				<ArticleBox />
			</Stack>
		</>
	)
}
