/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArticleBox } from "@/components/part/articleCard/articleBox"
import { useArticlesID } from "@/state/Article"
import type { Article, ArticleResult, Character } from "@/type"

import { Stack, StackProps } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

interface ArticleStackProps extends StackProps {
	userID?: number
	account?: Character
}

export const ArticleStack = ({
	userID,
	account,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	...Props
}: ArticleStackProps) => {
	// according to the id, fetch the result of article
	const { data: articles } = useArticlesID(userID as number)
	const [isLoading, setIsLoading] = useState(true)
	const [article, setArticle] = useState<Article[]>([])
	const [cursor, setCursor] = useState(articles?.count as number)
	const Ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (articles) {
			setCursor(articles?.count)
			setArticle(articles.list as unknown as Article[])
		}
	}, [articles])

	useEffect(() => {
		const currentRef = Ref?.current
		if (Ref?.current) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[entries.length - 1].isIntersecting) {
						fetch(
							`https://indexer.crossbell.io/v1/notes?characterId=${
								account?.characterId as number
							}&cursor=${account?.characterId as number}_${cursor}&limit=10`
						)
							.then((res) => res.json())
							.then(
								(result: { list: ArticleResult }) => {
									setIsLoading(false)
									setArticle([
										...article,
										...(result.list as unknown as Article[]),
									])
									setCursor(cursor - 10)
								},
								(error) => {
									setIsLoading(false)
									console.log("fetch character note data failed, error:", error)
								}
							)
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
	}, [cursor, Ref, article, articles, account?.characterId])

	if (!articles) {
		return <Stack className="gap-1.5rem flex !flex-col"></Stack>
	}

	return (
		<>
			<Stack className="gap-1.5rem flex !flex-col mt-5vh w-full">
				{article
					.filter((article) => !article.deleted)
					.map((article, i) => (
						<div key={i} ref={articles?.count > 20 ? Ref : null}>
							<ArticleBox
								index={i}
								key={i}
								data={article}
								account={account as Character}
							></ArticleBox>
						</div>
					))}
			</Stack>
		</>
	)
}
