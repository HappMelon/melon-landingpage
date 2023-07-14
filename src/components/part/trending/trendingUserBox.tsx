import { Loading } from "@crossbell/ui"
import { CharacterEntity } from "crossbell"
import { useEffect, useState } from "react"

export const TrendingUserBox = () => {
	const [character, setCharacter] = useState<CharacterEntity[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(
			`https://recommend.crossbell.io/raw?type=character&rand=false&limit=20`
		)
			.then((res) => res.json())
			.then(
				(result: CharacterEntity[]) => {
					setIsLoading(false)
					setCharacter(result)
					// console.log(result)
					for (const c of result) {
						console.log(c)
					}
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoading(false)
					console.log("fetch character data failed, error:", error)
				}
			)
	}, [])

	if (isLoading) {
		return <Loading />
	}

	// https://recommend.crossbell.io/raw?type=character&rand=false&limit=20
	// const { data: user, isLoading } = useTrendingUser("character", false, 20)

	console.log(character.length)
	// FIXME why character is not an array?
	// FIXME why character is undefined
	// TODO must popular show and user show

	return (
		<>
			<div className="w-full bg-#F8F8F8">
				{Array.isArray(character) && character.length > 0
					? character.map((item: CharacterEntity, i: number) => (
							<div key={i}>{item.handle}</div>
					))
					: ""}
			</div>
		</>
	)
}
