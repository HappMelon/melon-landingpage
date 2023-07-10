import { ArticleStack } from "@/components/part/articleStack"
import { FollowingMillStack } from "@/components/part/followingMillStack"
import { Flex, Spacer } from "@chakra-ui/react"

export const AccountPageContainer = () => {
	return (
		<>
			<Flex
				className="flex flex-row items-center justify-between m-2vh">
				<ArticleStack />
				<Spacer />
				<FollowingMillStack title="Following Mills" count={9} />
			</Flex>
		</>
	)
}
