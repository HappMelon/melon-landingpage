import { BettingNote } from "@/type"
import { Note, NoteEntity, NoteMetadata, NoteStatEntity } from "crossbell"
import useSWR from "swr"

const prefixUrl = "https://indexer.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useNoteIndex(id: number) {
	return useSWR(["NoteIndex", id], () =>
		fetcher<BettingNote>(`/v1/notes?characterId=${id}`)
	)
}
