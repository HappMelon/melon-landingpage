import { useAccount } from "@/state/Account"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import { CharacterEntity } from "crossbell"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const CharacterWithAccount = ({
	character,
}: {
	character: CharacterEntity
}) => {
	const accountName = character?.handle ? character.handle : ""
	const { data: account } = useAccount(accountName)

	const navigate = useNavigate()

	return (
		<div className="flex items-center gap-1rem overflow-hidden flex-nowrap">
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

export const PopularAuthors = () => {
	const [character, setCharacter] = useState<CharacterEntity[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(
			`https://recommend.crossbell.io/raw?type=character&rand=false&limit=10`
		)
			.then((res) => res.json())
			.then(
				(result: { character: CharacterEntity[] }) => {
					setIsLoading(false)
					setCharacter(result.character)
				},
				(error) => {
					setIsLoading(false)
					console.log("fetch character data failed, error:", error)
				}
			)
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			{character.slice(0, 5)?.map((item: CharacterEntity, i: number) => (
				<div key={i} className="flex">
					<CharacterWithAccount key={i} character={item} />
				</div>
			))}
		</>
	)
}
