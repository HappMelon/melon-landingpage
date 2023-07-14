import { useDark } from "@/hooks/index"

export default function AppearanceSwitch() {
	const [isDark, toggleDark] = useDark()

	return (
		<button
			className={isDark ? "i-carbon-moon w-3rem" : "i-carbon-sun w-3rem"}
			onClick={toggleDark}
		></button>
	)
}
