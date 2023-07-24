import { TrendingAuthors } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://recommend.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<TrendingAuthors>)

export function useTrendingUser(type: string, rand: boolean, limit: number) {
	return useSWR(["TrendingUser", type, rand, limit], () =>
		fetcher<TrendingAuthors>(`/raw?type=${type}&rand=${rand}&limit=${limit}`)
	)
}
