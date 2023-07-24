import type { HotTopics } from "@/type"
import useSWR from "swr"

// https://indexer.crossbell.io/v1/characters/10/notes/tags
const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useHotTopics(num: number) {
	return useSWR(["HotTopics", num], () =>
		fetcher<HotTopics>(`/v1/characters/${num}/notes/tags`)
	)
}
