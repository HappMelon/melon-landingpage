import { ArticleStack } from "@/components/part/articleCard/articleStack"
import { FollowingMillStack } from "@/components/part/mill/followingMillStack"
import { useAccount } from "@/state/Account"
import { Flex, Spacer } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

export const AccountPageContainer = () => {
	const { username } = useParams()
	const { data: account } = useAccount(
		username ? username.replace("@", "") : ""
	)

	return (
		<>
			<Flex className="flex flex-row items-center justify-between m-2vh">
				<ArticleStack userID={account?.characterId || 10} account={account} />
				<Spacer />
				<FollowingMillStack title="Following Mills" count={8} />
			</Flex>
		</>
	)
}
