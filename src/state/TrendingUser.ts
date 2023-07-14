import { CharacterEntity } from "crossbell"
import useSWR from "swr"

const prefixUrl = "https://recommend.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<CharacterEntity[]>)

export function useTrendingUser(type: string, rand: boolean, limit: number) {
	return useSWR(["TrendingUser", type, rand, limit], () =>
		fetcher<CharacterEntity[]>(`/raw?type=${type}&rand=${rand}&limit=${limit}`)
	)
}
