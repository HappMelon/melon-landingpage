import type { Note, NoteEntity } from "crossbell"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useStatus(cid: string, nid: string) {
	return useSWR(["note", cid, nid], () =>
		// https://indexer.crossbell.io/v1/characters/10/notes/101
		fetcher<NoteEntity>(`/v1/characters/${cid}/notes/${nid}`)
	)
}
