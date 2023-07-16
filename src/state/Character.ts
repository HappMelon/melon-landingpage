import type { Character } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useMostPopular(id: string) {
	return useSWR(["most_popular_character", id], () =>
		fetcher<Character>(`/v1/characters/${id}`)
	)
}
