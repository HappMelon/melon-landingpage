import { useAccount } from "@/state/Account"
import { useTrendingUser } from "@/state/TrendingUser"
import { useCharacterFollowRelation } from "@crossbell/indexer"
import { CharacterAvatar } from "@crossbell/ui"
import {
	useAccountCharacter,
	useFollowCharacter,
	useUnfollowCharacter,
} from "@flarezone/connect-kit"
import { CharacterEntity } from "crossbell"

const CharacterWithAccount = ({
	character,
	children,
}: {
	character: CharacterEntity
	children: React.ReactNode
}) => {
	const accountName = character?.handle ? character.handle : ""
	const { data: account } = useAccount(accountName)

	return (
		<div className="flex flex-row w-full py-3 px-3 w-55rem justify-between border-b border-gray/20">
			<div className="flex flex-row">
				<CharacterAvatar
					className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
					size="4rem"
					character={account}
				/>
				<div className="pl-0.75rem w-14rem overflow-hidden">
					<div>{character?.metadata?.content?.name}</div>
					<div>@{character?.handle}</div>
				</div>
			</div>

			<div className="flex items-center w-20rem">
				<div className="pl-.1rem text-1rem font-550 overflow-hidden">
					{character?.metadata?.content?.bio}
				</div>
			</div>
			<div>{children}</div>
		</div>
	)
}

export const TrendingUserBox = () => {
	const { data: account } = useTrendingUser("character", false, 20)

	console.log(account)

	return (
		<>
			<div className="w-full">
				{account
					? (account?.character ?? "").map(
							(item: CharacterEntity, i: number) => (
								<div key={i} className="flex">
									<CharacterWithAccount key={i} character={item}>
										<Follow characterId={item.characterId} />
									</CharacterWithAccount>
								</div>
							)
					)
					: ""}
			</div>
		</>
	)
}

interface CharacterFollowRelation {
	isFollowing: boolean
}

interface Props {
	characterId: number
}

export const Follow = ({ characterId }: Props) => {
	const currentCharacter = useAccountCharacter()
	const { data }: { data?: CharacterFollowRelation } =
		useCharacterFollowRelation(currentCharacter?.characterId, characterId)
	const follow = useFollowCharacter()
	const unfollow = useUnfollowCharacter()

	return (
		<button
			className="text-1rem font-700 mt-1rem bg-hover hover:bg-#9ca3af10"
			onClick={() => {
				if (data?.isFollowing) {
					unfollow.mutate({ characterId })
				} else {
					follow.mutate({ characterId })
				}
			}}
		>
			{data?.isFollowing ? "Unfollow" : "Follow"}
		</button>
	)
}
