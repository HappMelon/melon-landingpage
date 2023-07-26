import type { CommitResult } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useCommitInfo(tcid: number, tnid: number, limit: number) {
	return useSWR(["NoteCommitCount", tcid, tnid], () =>
		fetcher<CommitResult>(
			`/v1/notes?toCharacterId=${tcid}&toNoteId=${tnid}&limit=${limit}`
		)
	)
}
