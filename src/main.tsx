import "@flarezone/connect-kit/colors.css"
import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import "./styles/font.css"
import "./styles/globals.css"

import "./i18n"

import { MantineProvider } from "@mantine/core"
import React from "react"
import ReactDOM from "react-dom/client"

import { NotificationModal } from "@crossbell/notification"
import { ConnectKitProvider, createWagmiConfig } from "@flarezone/connect-kit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiConfig } from "wagmi"

import App from "./App"

const queryClient = new QueryClient()
const wagmiConfig = createWagmiConfig({
	appName: "Flare Dapp",
	// WalletConnect Project ID.
	// You can create or find it at https://cloud.walletconnect.com
	walletConnectV2ProjectId: import.meta.env
		.VITE_WALLET_CONNECT_V2_PROJECT_ID as string,
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<WagmiConfig config={wagmiConfig}>
				<ConnectKitProvider>
					<NotificationModal />
					<MantineProvider withGlobalStyles withNormalizeCSS>
						<App />
					</MantineProvider>
				</ConnectKitProvider>
			</WagmiConfig>
		</QueryClientProvider>
	</React.StrictMode>
)
