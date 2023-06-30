import { LandingContent,LandingHeader,LandingFoot } from "@/components/part/landing"
//import { useTranslation } from "react-i18next"

export default function App() {

	return (
		<div
			className="p-4 flex flex-col gap-4 items-center justify-center font-avenir"
			style={{ backgroundColor: "#181127", color: "#F5F5F5" }}
		>
			<LandingHeader></LandingHeader>
			<LandingContent></LandingContent>
			<LandingFoot></LandingFoot>
		</div>
	)
}
