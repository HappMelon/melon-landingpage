import Layout from "@/components/layouts/RootLayout"
import { useAccount } from "@/state/Account"
import { useStatus } from "@/state/Status"
import { CharacterAvatar, Loading } from "@crossbell/ui"
import { useParams } from "react-router-dom"

export default function App() {
	const { username, id } = useParams()

	const cid = id?.split("-")[0] as string
	const nid = id?.split("-")[1] as string

	// FIXME 每个组件都需要去引用 useAccount, 这样会导致每个组件都会去请求一次, 是否可能把抽离成一个全局的状态管理?

	const { data: account } = useAccount(
		username ? username.replace("@", "") : ""
	)

	const { data: note, isLoading } = useStatus(cid, nid)

	if (isLoading) {
		return <Loading />
	}

	return (
		// TODO render page
		<Layout>
			<div className="pt-0.75rem">
				<div className="flex flex-row">
					<CharacterAvatar
						className="!w-3rem !h-3rem !rounded-50% border-solid border-#fff shadow-lg object-cover"
						size="4rem"
						character={account}
					/>
					<div className="pl-0.625rem">
						<div className="flex items-center">
							<div className="color-#2c2e33 text-1rem font-700">
								{account?.handle}
							</div>
							<div className="pl-0.125rem color-#868e96 text-0.875rem">
								@{account?.metadata?.content?.name}
							</div>
						</div>
						<div className="pt-0.5rem">{note?.metadata?.content?.content}</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
