import { useAccount } from "@/state/Account"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import { CharacterEntity } from "crossbell"
import { useEffect, useState } from "react"

const CharacterWithAccount = ({
	character,
}: {
	character: CharacterEntity
}) => {
	const accountName = character?.metadata?.content?.name
		? character.metadata.content.name
		: ""
	const { data: account } = useAccount(accountName)

	return (
		<div className="flex items-center gap-1rem overflow-hidden flex-nowrap">
			<CharacterAvatar
				className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
				size="4rem"
				character={account}
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
			`https://recommend.crossbell.io/raw?type=character&rand=false&limit=20`
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
