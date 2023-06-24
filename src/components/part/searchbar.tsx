/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Avatar,
	Button,
	Divider,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
} from "@chakra-ui/react"
import { BiBell, BiMoon, BiSearch, BiSun } from "react-icons/bi"
import { useDarkMode } from "usehooks-ts"

export const SearchBar = () => {
	const { isDarkMode, toggle } = useDarkMode()
	return (
		<>
			<Stack spacing={4} h="3.125rem" direction="row" align="center" m="1rem">
				<InputGroup size="md">
					<InputLeftElement pointerEvents="none">
						<BiSearch color="gray" />
					</InputLeftElement>
					<Input
						w="40rem"
						maxW="50rem"
						variant="filled"
						borderRadius="full"
						type="text"
						placeholder="Search topics, news"
					/>
					<Button
						marginLeft="2rem"
						variant="outline"
						rounded="full"
						border="solid"
						borderColor="black"
					>
						Chat with Flare AI
					</Button>
				</InputGroup>
				<Stack spacing={4} direction="row" align="center" m="1rem">
					<Button
						background="none"
						_hover={{ background: "none" }}
						onClick={() => {
							toggle
						}}
					>
						{isDarkMode ? (
							<BiMoon fontSize="1.5625rem" />
						) : (
							<BiSun fontSize="1.5625rem" />
						)}
					</Button>
					<BiBell fontSize="1.5625rem" />
					<Avatar
						marginLeft="0.3125rem"
						src="https://bit.ly/dan-abramov"
					></Avatar>
				</Stack>
			</Stack>
			<Divider />
		</>
	)
}
