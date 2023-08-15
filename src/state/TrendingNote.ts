import type { TrendingNotes } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://recommend.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<TrendingNotes>)

export function useTrendingNote(type: string, rand: boolean, limit: number) {
	return useSWR(["TrendingNote", type, rand, limit], () =>
		fetcher<TrendingNotes>(`/raw?type=${type}&rand=${rand}&limit=${limit}`)
	)
}

export function useTrendingNoteSlide(
	type: string,
	rand: boolean,
	limit: number,
	cursor: number
) {
	return useSWR(["TrendingNoteSlide", type, rand, limit, cursor], () =>
		fetcher<TrendingNotes>(
			`/raw?type=${type}&rand=${rand}&limit=${limit}&cursor=${cursor}`
		)
	)
}
