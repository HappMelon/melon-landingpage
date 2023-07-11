import { useFollowers, useFollowing } from "@/components/part/Follow"
import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import {
	useAccountCharacter,
	useEditCharacterProfileModal,
} from "@flarezone/connect-kit"
import { BiEdit } from "react-icons/bi"

export function Followers({ id }: { id: number }) {
	const { data: follows } = useFollowers(id)
	if (follows) {
		return <div className="font-700 text-1.75rem">{follows.count}</div>
	}
}

export function Following({ id }: { id: number }) {
	const { data: following } = useFollowing(id)
	if (following) {
		return <div className="font-700 text-1.75rem">{following.count}</div>
	}
}

export const AccountHeader = () => {
	const character = useAccountCharacter()
	const { isActive, show, hide } = useEditCharacterProfileModal()

	return (
		<>
			<Box className="h-11rem m-1rem relative">
				<Flex className="flex w-full flex-row items-center z-10 absolute pl-1.75rem pt-1.5rem">
					<CharacterAvatar
						className="!w-12rem !h-12rem rounded-1rem border-solid border-#fff shadow-lg object-cover"
						size="24px"
						character={character}
					/>
					<Stack className="flex flex-col justify-start items-start self-start max-w-45% bg-white text-#000 p-1rem">
						<Text fontSize="1.5rem" fontWeight="bold">
							{character ? character?.metadata?.content?.name : ""}
						</Text>
						<Text fontSize="1rem" fontWeight="normal">
							@{character ? character.handle : ""}
						</Text>
						<Text
							fontSize="0.875rem"
							fontWeight="normal"
							opacity="60%"
							mt="1rem"
						>
							{character ? character?.metadata?.content?.bio : ""}
						</Text>
					</Stack>
					<Spacer />
					<Flex className="flex flex-col justify-between items-end self-end max-w-40% w-40% h-11rem pr-2rem pb-3.5rem">
						<Button
							variant="outline"
							rounded="full"
							color="#000"
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
						<Spacer />
						<div className="flex gap-1rem">
							<div className="flex items-center gap-0.5rem">
								<div className="font-500 text-1rem">Followers</div>
								<Followers id={character?.characterId} />
							</div>
							<div className="flex items-center gap-0.5rem">
								<div className="font-500 text-1rem">Following</div>
								<Following id={character?.characterId} />
							</div>
						</div>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
