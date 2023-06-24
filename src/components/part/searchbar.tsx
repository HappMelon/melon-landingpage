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
			<Stack spacing={4} h="5vh" direction="row" align="center" m="4">
				<InputGroup size="md">
					<InputLeftElement pointerEvents="none">
						<BiSearch color="gray" />
					</InputLeftElement>
					<Input
						maxW="40vw"
						variant="filled"
						borderRadius="full"
						type="text"
						placeholder="Search topics, news"
					/>
					<Button
						marginLeft="1vw"
						variant="outline"
						rounded="full"
						border="2px"
						borderColor="linear(to-r, #F9D423, #F83600)"
					>
						Chat with Flare AI
					</Button>
				</InputGroup>
				<Stack spacing={4} direction="row" align="center" m="4">
					<Button
						background="none"
						_hover={{ background: "none" }}
						onClick={() => {
							toggle
						}}
					>
						{isDarkMode ? <BiMoon fontSize={25} /> : <BiSun fontSize={25} />}
					</Button>
					<BiBell fontSize={25} />
					<Avatar marginLeft="5" src="https://bit.ly/dan-abramov"></Avatar>
				</Stack>
			</Stack>
			<Divider />
		</>
	)
}
