import type { Tx } from "@/type"
import useSWR from "swr"

const prefixUrl = "https://scan.crossbell.io"
const fetcher = <T>(url: string) =>
	fetch(prefixUrl + url).then((res) => res.json() as Promise<T>)

export function useTx(address: string) {
	return useSWR(["address", address], () =>
		fetcher<Tx>(`/api?module=account&action=txlist&address=${address}`)
	)
}
