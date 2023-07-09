import { useDark } from "@/hooks/index"

export default function AppearanceSwitch() {
	const [isDark, toggleDark] = useDark()

	return (
		<button
			className={isDark ? "i-carbon-moon w-24px h-24px" : "i-carbon-sun w-24px h-24px"}
			onClick={toggleDark}
		></button>
	)
}
