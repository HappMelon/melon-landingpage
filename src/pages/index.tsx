import {
	LandingContent,
	LandingFoot,
	LandingHeader,
} from "@/components/part/landing"

export default function App() {
	return (
		<div className="w-100% flex flex-col items-center justify-center bg-#181127 color-#F5F5F5 overflow-hidden min-w-screen-xs">
			<LandingHeader></LandingHeader>
			<LandingContent></LandingContent>
			<LandingFoot></LandingFoot>
		</div>
	)
}
