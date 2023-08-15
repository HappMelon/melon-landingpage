import { Follow } from "@/components/Avatar/Follow"
import { useAccount } from "@/state/Account"
import { useTrendingUser } from "@/state/TrendingUser"
import { CharacterAvatar } from "@crossbell/ui"
import { CharacterEntity } from "crossbell"
import { useNavigate } from "react-router-dom"

const CharacterWithAccount = ({
  character,
  children,
}: {
  character: CharacterEntity
  children: React.ReactNode
}) => {
  const accountName = character?.handle ? character.handle : ""
  const { data: account } = useAccount(accountName)
  const navigate = useNavigate()

  return (
    <div className="flex flex-row w-full py-3 px-3 w-55rem justify-between border-b border-gray/20">
      <div className="flex flex-row">
        <CharacterAvatar
          className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover cursor-pointer"
          size="4rem"
          character={account}
          onClick={() => {
            navigate(`/@${character.handle}`)
          }}
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
