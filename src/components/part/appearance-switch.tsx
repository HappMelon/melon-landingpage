import { useDark } from "@/hooks/index"
import { useColorMode } from "@chakra-ui/react"
export default function AppearanceSwitch() {
	const [isDark, toggleDark] = useDark()
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<button
			className={isDark ? "i-carbon-moon w-3rem" : "i-carbon-sun w-3rem"}
			onClick={() => {
				toggleColorMode()
				toggleDark()
			}}
		></button>
	)
}
