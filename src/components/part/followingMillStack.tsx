import { Box, BoxProps, Stack, Text } from "@chakra-ui/react"
import { FollowingMill } from "./followingMill"

interface FollowingMillStackProps extends BoxProps {
	title: string
	count: number
}

export const FollowingMillStack = ({
	title,
	count,
	...props
}: FollowingMillStackProps) => {
	const followingMillsCount = count || 5
	const followingMills = Array.from({ length: followingMillsCount })

	return (
		<Box
			{...props}
			bg="#F8F8F8"
			borderRadius="1rem"
			alignSelf="flex-start"
			mt="4vh"
		>
			<Stack direction="column" spacing="1.5rem" w="100%" p="1.75rem">
				<Text fontSize="1.5rem" fontWeight="bold" color="#000">
					{title}
				</Text>
				{followingMills.map((_, index) => (
					<FollowingMill key={index} />
				))}
			</Stack>
		</Box>
	)
}
