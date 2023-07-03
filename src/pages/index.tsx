import { LandingContent,LandingHeader,LandingFoot } from "@/components/part/landing"
//import { useTranslation } from "react-i18next"

export default function App() {

	return (
		<div className="w-100% flex flex-col items-center justify-center bg-#181127 color-#F5F5F5 overflow-hidden min-w-screen-xs avenir-lt-std-black">
			<LandingHeader></LandingHeader>
			<LandingContent></LandingContent>
			<LandingFoot></LandingFoot>
		</div>
	)
}
