import type { ArticleResult } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useCommitCount(cid: number, nid: number) {
	return useSWR(["NoteCommitCount", cid, nid], () =>
		fetcher<ArticleResult>(
			`/v1/notes?toCharacterId=${cid}&toNoteId=${nid}&limit=0`
		)
	)
}
