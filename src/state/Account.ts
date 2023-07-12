import type { Character } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useAccount(handle: string) {
	return useSWR(["character", handle], () =>
		fetcher<Character>(`/v1/handles/${handle}/character`)
	)
}
