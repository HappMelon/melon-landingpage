import { SignIn } from "@clerk/clerk-react"

export default function App() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
			<SignIn path="/sign-in" routing="path" signUpUrl="/sign-in" />
		</main>
	)
}
