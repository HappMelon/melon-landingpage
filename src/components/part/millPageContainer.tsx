import { FollowingMillStack } from "@/components/part/followingMillStack"
import { Box, Flex } from "@chakra-ui/react"

export const MillPageContainer = () => {
	return (
		<Box>
			<Flex direction="row" justify="space-between" w="100%" p="1.75rem">
				<FollowingMillStack count={5} />
				<FollowingMillStack count={5} />
				<FollowingMillStack count={5} />
			</Flex>
		</Box>
	)
}
