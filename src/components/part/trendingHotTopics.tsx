import { Button, Stack, Wrap, WrapItem } from "@chakra-ui/react"
export const TrendingHotTopics = () => {
	return (
		<>
			<Stack direction="column" wrap="wrap" mt="2vh">
				<Wrap spacing={4}>
					<WrapItem>
						<Button colorScheme="red">Red</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="orange">Orange</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="yellow">Yellow</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="green">Green</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="teal">Teal</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="blue">Blue</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="cyan">Cyan</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="purple">Purple</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="pink">Pink</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="linkedin">Linkedin</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="facebook">Facebook</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="messenger">Messenger</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="whatsapp">Whatsapp</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="twitter">Twitter</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="telegram">Telegram</Button>
					</WrapItem>
				</Wrap>
			</Stack>
		</>
	)
}
