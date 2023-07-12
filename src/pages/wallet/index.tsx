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
	const { isActive, show, hide } = useCsbDetailModal()

	if (!isConnected) return null

	return <button onClick={show}>CSB Detail</button>
}

export function TableDemo() {
	const character = useAccountCharacter()

	const { data: tx } = useTx(character ? character?.owner : "") as { data: Tx }

	const scan = `https://scan.crossbell.io/address/${character?.owner || ""}`

	return (
		<Table>
			<TableCaption>A list of your recent transactions.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Tx Hash</TableHead>
					<TableHead>Time</TableHead>
					<TableHead>Nonce</TableHead>
					<TableHead className="text-right">Value</TableHead>
					<TableHead className="text-right">
						<a href={scan} target="_blank" rel="noreferrer">
							See all &gt;{" "}
						</a>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tx?.result?.map((transaction: Result) => (
					<TableRow key={transaction.nonce}>
						<TableCell className="font-medium">{transaction.hash}</TableCell>
						<TableCell>{formatTimeStamp(transaction.timeStamp)}</TableCell>
						<TableCell>{transaction.nonce}</TableCell>
						<TableCell className="text-right">{transaction.value}</TableCell>
						<TableCell className="text-right"></TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default function App() {
	const balance = useAccountBalance()

	return (
		<Layout>
			<Tabs position="relative" variant="unstyled">
				<TabList className="gap-3rem">
					<Tab className="!text-center text-1.125rem font-700">Token</Tab>
					<Tab isDisabled className="text-1.125rem font-400">
						Cash
					</Tab>
				</TabList>
				<TabIndicator
					mt="-1px"
					height="6px"
					alignSelf="center"
					borderRadius="6px"
					bg="linear-gradient(90deg, #F9D423 0%, #FF6B00 96.88%)"
				/>
				<TabPanels>
					<TabPanel>
						<div className="w-full">
							<div className="flex flex-col rounded-20px bg-#F8F8F8 p-2rem w-24rem gap-2rem">
								<div className="flex justify-between">
									<div className="text-1rem font-700">On Chain</div>
									<CSBDetaiwlBtn />
								</div>
								<div className="text-1.125rem font-700">
									{balance
										? String(balance?.balance?.formatted) + " " + "CSB"
										: "No Balance Info"}
								</div>
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
