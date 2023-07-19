import { SignUp } from "@clerk/clerk-react"

export default function App() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
			<SignUp path="/sign-up" routing="path" signInUrl="/sign-up" />
		</main>
	)
}
