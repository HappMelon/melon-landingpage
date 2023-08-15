import { useAccount } from "@/state/Account"
import { useFollowers, useFollowing } from "@/state/Follow"
import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import { BiEdit } from "react-icons/bi"
import { useParams } from "react-router-dom"

import {
  useAccountCharacter,
  useEditCharacterProfileModal,
} from "@crossbell/connect-kit"

// Follows and Following
export function Followers({ id }: { id: number }) {
  const { data: follows } = useFollowers(id)
  if (follows) {
    return <div className="font-700 text-1.5rem">{follows.count}</div>
  }
}

export function Following({ id }: { id: number }) {
  const { data: following } = useFollowing(id)
  if (following) {
    return <div className="font-700 text-1.5rem">{following.count}</div>
  }
}

export const AccountHeader = () => {
  const character = useAccountCharacter()

  const { username } = useParams()
  const { show } = useEditCharacterProfileModal()
  const { data: account } = useAccount(
    username ? username.replace("@", "") : ""
  )

  return (
    <>
      <Box className="h-11rem m-1rem relative">
        <Flex className="flex w-full flex-row items-center z-10 absolute pl-1.75rem pt-1.5rem">
          <CharacterAvatar
            className="!w-11.875rem !h-11.875rem !rounded-50px border-solid border-#fff shadow-lg object-cover hover:!rounded-20px transition-all duration-300 ease-in-out"
            size="11.875rem"
            character={account}
          />
          <Stack className="flex flex-col justify-start items-start self-start max-w-45% pl-1.5625rem">
            <Text className="text-1.5rem font-750">
              {account ? account?.metadata?.content?.name : ""}
            </Text>
            <Text className="text-1rem font-550 color-#868e96">
              @{account ? account?.handle : username?.replace("@", "")}
            </Text>
            <Text className="text-0.875rem font-400 leading-1.25em pt-1rem">
              {account ? account?.metadata?.content?.bio : ""}
            </Text>
          </Stack>
          <Spacer />
          <Flex className="flex flex-col justify-between items-end self-end max-w-40% w-40% h-11rem pr-2rem pb-3.5rem">
            {character?.characterId === account?.characterId ? (
              <Button
                variant="outline"
                rounded="full"
                border="solid"
                borderColor="white"
                leftIcon={<BiEdit />}
                justifySelf="right"
                alignSelf="end"
                _hover={{ background: "none" }}
                onClick={() => {
                  if (character) {
                    show()
                  }
                }}
              >
                Edit Profile
              </Button>
            ) : (
              ""
            )}
            <Spacer />
            <div className="flex gap-1rem">
              <div className="flex items-center gap-0.5rem">
                <div className="font-550 text-1rem ">Followers</div>
                <Followers id={account?.characterId || 0} />
              </div>
              <div className="flex items-center gap-0.5rem">
                <div className="font-550 text-1rem">Following</div>
                <Following id={account?.characterId || 0} />
              </div>
            </div>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
