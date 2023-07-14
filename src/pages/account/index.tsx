import Layout from "@/components/layouts/RootLayout"
import { AccountHeader } from "@/components/part/account/accountHeader"
import { AccountPageContainer } from "@/components/part/account/accountPageContainer"

export default function App() {
	return (
		<Layout>
			<AccountHeader />
			<AccountPageContainer />
		</Layout>
	)
}
