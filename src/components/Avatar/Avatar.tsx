import { ConnectButton, useAccountCharacter } from "@crossbell/connect-kit"
import { CharacterAvatar } from "@crossbell/ui"
import { useNavigate } from "react-router-dom"

export function Avatar() {
  const character = useAccountCharacter()
  const navigate = useNavigate()
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
              size="2.5rem"
              character={character}
              className="cursor-pointer w-2.5rem h-2.5rem"
            />
          )
        } else {
          return <button onClick={connect}>Connect</button>
        }
      }}
    </ConnectButton>
  )
}
