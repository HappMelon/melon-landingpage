import { useDark } from "@/hooks/index"
import { useColorMode } from "@chakra-ui/react"
export default function AppearanceSwitch() {
	const [isDark, toggleDark] = useDark()
	const { colorMode, toggleColorMode } = useColorMode()
	// FIXME: add one color style to AppearanceSwitch component, because when i in do post page AppearanceSwitch component color is not right
	return (
		<button
			className={isDark ? "i-carbon-moon w-3rem color-#fff" : "i-carbon-sun w-3rem"}
			onClick={() => {
				toggleColorMode()
				toggleDark()
			}}
		></button>
	)
}
