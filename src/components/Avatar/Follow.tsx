import { useAccountCharacter, useFollowCharacter, useUnfollowCharacter } from "@crossbell/connect-kit"
import { useCharacterFollowRelation } from "@crossbell/indexer"

interface Props {
  characterId: number
}

interface CharacterFollowRelation {
  isFollowing: boolean
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
      {data?.isFollowing ? (
        <div className="text-center">UnFollow</div>
      ) : (
        <div className="text-center">Follow</div>
      )}
    </button>
  )
}
