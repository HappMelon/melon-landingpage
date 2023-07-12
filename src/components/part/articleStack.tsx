import { ArticleBox } from "@/components/part/articleBox"
import { useArticlesID } from "@/state/Article"

import { Stack, StackProps } from "@chakra-ui/react"

interface ArticleStackProps extends StackProps {
	userID?: number
}
export const ArticleStack = ({userID, ...props}:ArticleStackProps) => {
	// according to the id, fetch the result of article
	const { data: articles } = useArticlesID(10)
	if(!articles||articles.list.length === 0){
		return (
			<Stack className="gap-1.5rem flex !flex-col mt-5vh">
				<></>
			</Stack>
		)
	}
	return (
		<>
			<Stack className="gap-1.5rem flex !flex-col mt-5vh">
				{articles?.list.filter(article => !article.deleted).map((article,i) =><ArticleBox key={i} data={article}/>)}
			</Stack>
		</>
	)
}
