import { Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"

export const PopularAuthors = () => {
	return (
		<>
			<Flex w="100%" justify="space-between">
				<Stack direction="row" spacing="0.5rem" alignItems="center" w="75%">
					<Image
						src="https://i.pravatar.cc/300"
						alt="coinbase"
						h="2rem"
						w="2rem"
						borderRadius="full"
						borderWidth="0.125rem"
						borderColor="rgba(255, 255, 255, 0.80)"
					/>
					<Spacer />
					<Text size="1rem" color="#000" fontWeight="semibold">
						AuthorName
					</Text>
					<Spacer />
					<Text size="1rem" color="#000" fontWeight="semibold">
						@UserName
					</Text>
				</Stack>
			</Flex>
		</>
	)
}
