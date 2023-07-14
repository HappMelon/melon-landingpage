/* eslint-disable @typescript-eslint/restrict-plus-operands */
import Layout from "@/components/layouts/RootLayout"
import { useTx } from "@/state/tx"
import { Result, Tx } from "@/type"

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

import {
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react"

import { Tovalue } from "@/lib/utils"
import {
	useAccountBalance,
	useAccountCharacter,
	useCsbDetailModal,
	useIsConnected,
} from "@flarezone/connect-kit"

function formatTimeStamp(timeStamp: number) {
	const date = new Date(timeStamp * 1000)

	const year = date.getFullYear()
	const month = ("0" + (date.getMonth() + 1)).slice(-2)
	const day = ("0" + date.getDate()).slice(-2)
	const hours = ("0" + date.getHours()).slice(-2)
	const minutes = ("0" + date.getMinutes()).slice(-2)
	const seconds = ("0" + date.getSeconds()).slice(-2)

	const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
	return formattedTime
}

export function CSBDetaiwlBtn() {
	const isConnected = useIsConnected()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { isActive, show, hide } = useCsbDetailModal()

	if (!isConnected) return null

	return (
		<button
			className="color-#0f1419 font-600 flex gap-0.5rem items-center"
			onClick={show}
		>
			<div> CSB Detail</div>
			<div className="i-bi-info-circle w-0.75rem h-0.75rem"></div>
		</button>
	)
}

export function TableDemo() {
	const character = useAccountCharacter()

	const { data: tx } = useTx(character ? character?.owner : "") as { data: Tx }

	return (
		<Table className="font-serif">
			<TableCaption>A list of your recent transactions.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Tx Hash</TableHead>
					<TableHead>Time</TableHead>
					<TableHead>Nonce</TableHead>
					<TableHead>To</TableHead>
					<TableHead>Gas</TableHead>
					<TableHead>Value</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tx?.result?.map((transaction: Result) => (
					<TableRow key={transaction.nonce}>
						<TableCell className="font-medium">
							{transaction.hash.substring(0, 6) +
								"..." +
							transaction.hash.substring(transaction.hash.length - 6)}
						</TableCell>
						<TableCell>{formatTimeStamp(transaction.timeStamp)}</TableCell>
						<TableCell>{transaction.nonce}</TableCell>
						<TableCell>
							{transaction.to.substring(0, 6) +
								"..." +
							transaction.to.substring(transaction.to.length - 6)}
						</TableCell>
						<TableCell>{transaction.gas}</TableCell>
						<TableCell>{Tovalue(transaction.value)}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default function App() {
	const balance = useAccountBalance()
	const character = useAccountCharacter()

	const scan = `https://scan.crossbell.io/address/${character?.owner || ""}`

	return (
		<Layout>
			<Tabs className="relative" variant="unstyled">
				<TabList>
					<Tab className="text-1.125rem font-700">Token</Tab>
					<Tab isDisabled className="text-1.125rem font-400">
						Cash
					</Tab>
				</TabList>
				<TabIndicator
					height="2px"
					borderRadius="1px"
					bg="linear-gradient(90deg, #F9D423 0%, #FF6B00 96.88%)"
				/>
				<TabPanels>
					<TabPanel>
						<div className="w-full relative">
							<div className="flex !flex-col border border-solid border-[#E1E8F7] rounded-12px bg-[#FCFDFF] p-xy w-18rem gap-2rem">
								<div className="flex justify-between">
									<div className="text-1rem font-700">On Chain</div>
									<CSBDetaiwlBtn />
								</div>
								<div className="text-1rem font-600">
									{balance
										? String(balance?.balance?.formatted) + " " + "CSB"
										: "No Balance Info"}
								</div>
							</div>
							<div className="flex justify-between pt-1rem pb-1.5rem font-serif">
								<div className="text-1rem font-700">Transaction Detail</div>
								<a
									href={scan}
									target="_blank"
									rel="noreferrer"
									className="text-1rem font-400"
								>
									See all &gt;{" "}
								</a>
							</div>
							<TableDemo />
						</div>
					</TabPanel>
					<TabPanel>
						<p></p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Layout>
	)
}
