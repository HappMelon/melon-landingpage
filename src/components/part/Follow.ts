import type { Follow } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useFollowers(id: number) {
	return useSWR(["follows", id], () =>
		fetcher<Follow>(`/v1/characters/${id}/backlinks?limit=0&linkType=follow`)
	)
}

export function useFollowing(id: number) {
	return useSWR(["following", id], () =>
		fetcher<Follow>(`/v1/characters/${id}/links?limit=0&linkType=follow`)
	)
}
