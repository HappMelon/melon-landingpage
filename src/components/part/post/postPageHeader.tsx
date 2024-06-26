import {
  BettingAtom,
  EnableBettingAtom,
  IpfshashAtom,
  ValueAtom,
} from "@/components/part/post/postPageEditor"
import { useNoteIndex } from "@/state/Note"
import { ethers } from "ethers"

import {
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react"

import AppearanceSwitch from "@/components/part/appearance-switch"
import ABI from "@/contract/betting.json"
import {
  ConnectButton,
  useAccountCharacter,
  usePostNote,
} from "@crossbell/connect-kit"
import { CharacterAvatar } from "@crossbell/ui"
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers"
import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import Web3 from "web3"

const web3 = new Web3("https://data-seed-prebsc-2-s2.bnbchain.org:8545")
const address = "0xB43da67840856167a627b5bfcdaB4a86Ba686A24"

function Avatar() {
  const navigate = useNavigate()
  const character = useAccountCharacter()

  const pushAccount = () => {
    navigate(`/@${character?.handle || ""}`)
  }

  return (
    <ConnectButton>
      {(status, { connect }) => {
        if (status.isConnected) {
          const { character } = status.account
          return (
            <CharacterAvatar
              onClick={() => pushAccount()}
              size="2.5vw"
              character={character}
              className="cursor-pointer"
            />
          )
        } else {
          return <button onClick={connect}>Connect</button>
        }
      }}
    </ConnectButton>
  )
}

let Conctract: any
if (typeof window.ethereum !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const provider = new ethers.providers.Web3Provider(
    window?.ethereum as ExternalProvider | JsonRpcFetchFunc
  )

  Conctract = () => {
    const signer = provider.getSigner()
    const Contract = new ethers.Contract(address, ABI, signer)
    return Contract
  }
}

function NewPost({
  value,
  sources,
  externalUrls,
  tags,
  isChecked = false,
  attachments,
}: {
  value: string
  sources: string[]
  externalUrls: string[]
  tags: string[]
  isChecked?: boolean
  attachments?: {
    address: string
    alt: string
    name: string
  }
}) {
  const postNote = usePostNote()
  const character = useAccountCharacter()

  const [enable] = useAtom(EnableBettingAtom)
  const [betting] = useAtom(BettingAtom)

  const { data: note } = useNoteIndex(character?.characterId as number)

  return (
    <Button
      onClick={() => {
        const newSources = isChecked ? [...sources, "gambling"] : sources
        postNote.mutate(
          {
            metadata: {
              content: value,
              sources: newSources,
              external_urls: externalUrls,
              attachments: [
                {
                  address: attachments?.address,
                  alt: "test.png",
                  name: "test.png",
                },
              ],
              tags,
            },
          },
          {
            onSuccess: () => {
              if (enable) {
                // 发起对赌
                // 1. 切换到需要的链
                const chainId = 97
                const hexChainId = "0x" + chainId.toString(16)
                void (
                  window.ethereum &&
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                  window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                      {
                        chainId: hexChainId,
                      },
                    ],
                  })
                )
                // 2. 掉对赌合约
                // 2. 掉对赌合约
                let FlareContract: any
                window.ethereum &&
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                  window.ethereum.on("chainChanged", (chainId: string) => {
                    console.log("chainId:", chainId)
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
                    FlareContract = Conctract()
                    const _betAmount = web3.utils.toWei(
                      betting.toString(),
                      "ether"
                    )
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    if (FlareContract) {
                      const noteId = (Number(note?.count) || 0) + 1
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions
                      const postId = `${noteId}${character?.characterId}`
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                      FlareContract?.publishPost(
                        postId,
                        enable,
                        _betAmount,
                        3600
                      )
                    } else {
                      console.log("contract is not ready")
                    }
                  })
              }
            },
          }
        )
      }}
    >
      Publish
    </Button>
  )
}

export const PostPageHeader = () => {
  const [value] = useAtom(ValueAtom)
  const [enable] = useAtom(EnableBettingAtom)
  const [ipfsHash] = useAtom(IpfshashAtom)

  console.log("ipfsHash:", ipfsHash)

  const navigate = useNavigate()

  const cleanedData = value
    .replace(/<\/?[a-z]+[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "\n")

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <HStack
          p="2"
          className="cursor-pointer"
          onClick={() => {
            navigate("/explore")
          }}
        >
          <Image src="/logo.png" alt="Logo" />
          <Heading
            size="md"
            bgGradient="linear(to-r, #FFC700, #F5740F)"
            bgClip="text"
          >
            Creator Studio
          </Heading>
        </HStack>
        <Spacer />
        <HStack spacing="-1.5">
          <Button
            onClick={() => {
              navigate("/explore")
            }}
          >
            Back
          </Button>
          <Button
            border="2px solid D9D9D9"
            borderRadius="40px"
            marginLeft="2rem"
            rounded="full"
          >
            Save as Draft
          </Button>
          <NewPost
            value={cleanedData}
            sources={["FlareDapp Dev"]}
            externalUrls={["https://crossbell.io"]}
            tags={["post"]}
            isChecked={enable}
            attachments={{
              address: ipfsHash,
              alt: "test.png",
              name: "test.png",
            }}
          />
          <AppearanceSwitch />
          <Button marginLeft="2rem" rounded="full">
            <Avatar />
          </Button>
        </HStack>
      </Flex>
      <Divider color="red" />
    </>
  )
}
