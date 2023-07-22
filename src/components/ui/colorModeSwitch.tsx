import { Button, HStack, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	// const [isDark, toggleDark] = useDark()
	return (
		<HStack>
			<Button
				size="xs"
				colorScheme="blackAlpha"
				className={
					colorMode === "dark" ? "i-carbon-moon w-3rem" : "i-carbon-sun w-3rem"
				}
				onClick={toggleColorMode}
			></Button>
		</HStack>
	)
}

export default ColorModeSwitch
