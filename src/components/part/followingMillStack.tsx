import { Box, Stack, Text } from "@chakra-ui/react"
import { FollowingMill } from "./followingMill"

export const FollowingMillStack = () => {
	const followingMillsCount = 9
	const followingMills = Array.from({ length: followingMillsCount })

	return (
		<Box
			w="18vw"
			bg="#F8F8F8"
			borderRadius="1rem"
			alignSelf="flex-start"
			mt="5vh"
		>
			<Stack direction="column" spacing="1.5rem" w="100%" p="1.75rem">
				<Text fontSize="1.5rem" fontWeight="bold" color="#000">
					Following Mills
				</Text>
				{followingMills.map((_, index) => (
					<FollowingMill key={index} />
				))}
			</Stack>
		</Box>
	)
}
