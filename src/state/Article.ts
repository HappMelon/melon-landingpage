import type { ArticleResult, Follow } from "@/type"
import useSWR from "swr"

//get articles by characterID
const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

//here we set the limie as 20 to reduce the size of metadata
export function useArticlesID(id: number) {
	return useSWR(["notes", id], () =>
		fetcher<ArticleResult>(`/v1/characters/${id}/notes?limit=20`)
	)
}
export function useFollowers(id: number, noteId: number) {
	return useSWR(["follows", id], () =>
		fetcher<Follow>(`/v1/notes/${id}/${noteId}/backlinks?limit=0&linkType=follow`)
	)
}
