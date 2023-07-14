import { ArticleBox } from "@/components/part/articleCard/articleBox"
import { useArticlesID } from "@/state/Article"
import { Character } from "@/type"

import { Stack, StackProps } from "@chakra-ui/react"

interface ArticleStackProps extends StackProps {
	userID?: number
	account?: Character
}
export const ArticleStack = ({
	userID,
	account,
	...props
}: ArticleStackProps) => {
	// according to the id, fetch the result of article
	const { data: articles } = useArticlesID(userID as number)
	if (!articles || articles.list.length === 0) {
		return (
			<Stack className="gap-1.5rem flex !flex-col mt-5vh">
				<></>
			</Stack>
		)
	}
	return (
		<>
			<Stack className="gap-1.5rem flex !flex-col mt-5vh">
				{articles?.list
					.filter((article) => !article.deleted)
					.map((article, i) => (
						<ArticleBox key={i} data={article} account={account as Character} />
					))}
			</Stack>
		</>
	)
}
