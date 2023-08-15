import { useAccount } from "@/state/Account"
import { useTrendingUser } from "@/state/TrendingUser"
import { Box } from "@chakra-ui/react"
import { CharacterAvatar } from "@crossbell/ui"
import { CharacterEntity } from "crossbell"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const PopularAuthors = () => {
	const [math, setMath] = useState(0)

	useEffect(() => {
		setMath(Math.floor(Math.random() * 4))
	}, [])

	const { data: account } = useTrendingUser("character", false, 20)

	return (
		<Box>
			{account
				? (account?.character ?? "")
						.slice(math * 5, (math + 1) * 5)
						.map((item: CharacterEntity, i: number) => (
							<div key={i} className="flex">
								<CharacterWithAccount key={i} character={item} />
							</div>
						))
				: ""}
		</Box>
	)
}

const CharacterWithAccount = ({
	character,
}: {
	character: CharacterEntity
}) => {
	const accountName = character?.handle ? character.handle : ""
	const { data: account } = useAccount(accountName)

	const navigate = useNavigate()

	return (
		<div className="flex items-center gap-1rem overflow-hidden flex-nowrap mt-14px">
			<CharacterAvatar
				className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover cursor-pointer"
				size="4rem"
				character={account}
				onClick={() => navigate(`/@${accountName}`)}
			/>
			<div className="!text-ellipsis flex-nowrap whitespace-nowrap">
				{character?.metadata?.content?.name}
			</div>
			<div className="!text-ellipsis flex-nowrap whitespace-nowrap overflow-hidden">
				@{character?.handle}
			</div>
		</div>
	)
}
