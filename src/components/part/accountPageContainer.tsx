import { ArticleStack } from "@/components/part/articleStack"
import { FollowingMillStack } from "@/components/part/followingMillStack"
import { Flex, Spacer } from "@chakra-ui/react"

export const AccountPageContainer = () => {
	return (
		<>
			<Flex
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				m="2vh"
			>
				<ArticleStack />
				<Spacer />
				<FollowingMillStack title="Following Mills" count={9} />
			</Flex>
		</>
	)
}
