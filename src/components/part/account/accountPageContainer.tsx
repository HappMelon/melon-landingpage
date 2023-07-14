import { ArticleStack } from "@/components/part/articleCard/articleStack"
import { FollowingMillStack } from "@/components/part/mill/followingMillStack"
import { useAccount } from "@/state/Account"
import { Flex, Spacer } from "@chakra-ui/react"
import { Loading } from "@crossbell/ui"
import { useParams } from "react-router-dom"

export const AccountPageContainer = () => {
	const { username } = useParams()
	const { data: account, isLoading } = useAccount(
		username ? username.replace("@", "") : ""
	)

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			{account ? (
				<Flex className="flex flex-row items-center justify-between m-2vh">
					<ArticleStack userID={account?.characterId || 10} account={account} />
					<Spacer />
					<FollowingMillStack
						title="Following Mills"
						count={8}
						className="lt-xl:display-none"
					/>
				</Flex>
			) : (
				<div className="text-2rem text-center pt-2rem font-mono">
					This account does not exist
				</div>
			)}
		</>
	)
}
