import Layout from "@/components/layouts/RootLayout"
import { useTx } from "@/state/tx"
import type { Result, Tx } from "@/type"

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
  Box,
  SkeletonText,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

import { FormatTimeStamp, Tovalue } from "@/lib/utils"
import {
  useAccountBalance,
  useAccountCharacter,
  useCsbDetailModal,
  useIsConnected,
} from "@crossbell/connect-kit"

export function CSBDetaiwlBtn() {
  const isConnected = useIsConnected()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isActive, show, hide } = useCsbDetailModal()

  if (!isConnected) return null

  return (
    <button className="font-600 flex gap-0.5rem items-center" onClick={show}>
      <div> CSB Detail</div>
      <div className="i-bi-info-circle w-0.75rem h-0.75rem"></div>
    </button>
  )
}

export function TxTable() {
  const character = useAccountCharacter()

  const { data: tx } = useTx(character ? character?.owner : "") as { data: Tx }

  if (!tx) {
    return (
      <Box padding="6" boxShadow="lg">
        <SkeletonText mt="3" noOfLines={32} spacing="5" skeletonHeight="2" />
      </Box>
    )
  }

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
            <TableCell>{FormatTimeStamp(transaction.timeStamp)}</TableCell>
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
          height="4px"
          borderRadius="1px"
          bg="linear-gradient(90deg, #F9D423 0%, #FF6B00 96.88%)"
        />
        <TabPanels>
          <TabPanel>
            <div className="w-full relative font-serif mt-1rem">
              <div className="flex !flex-col border border-solid border-[#E1E8F7] rounded-12px p-xy w-18rem gap-2rem">
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
                <div className="text-1rem font-700 pt-1rem">
                  Transaction Detail
                </div>
                <a
                  href={scan}
                  target="_blank"
                  rel="noreferrer"
                  className="text-1rem font-400"
                >
                  See all &gt;{" "}
                </a>
              </div>
              <TxTable />
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
