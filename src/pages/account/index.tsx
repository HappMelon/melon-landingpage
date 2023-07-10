import Layout from "@/components/layouts/RootLayout"
import { AccountHeader } from "@/components/part/accountHeader"
import { AccountPageContainer } from "@/components/part/accountPageContainer"

export default function App() {
	return (
		<Layout>
			<AccountHeader />
			<AccountPageContainer />
		</Layout>
	)
}
