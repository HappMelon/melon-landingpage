import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import "./styles/font.css"
import "./styles/globals.css"

import "./i18n"

import React from "react"
import ReactDOM from "react-dom/client"

import { createWagmiConfig, ConnectKitProvider } from "@flarezone/connect-kit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiConfig } from "wagmi"

import App from "./App"

const queryClient = new QueryClient()
const wagmiConfig = createWagmiConfig({
	appName: "Crossbell Dev",
	// WalletConnect Project ID.
	// You can create or find it at https://cloud.walletconnect.com
	walletConnectV2ProjectId: "45f79da8dad1b543b61951d77fbba1c1",
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<WagmiConfig config={wagmiConfig}>
				<ConnectKitProvider>
					<App />
				</ConnectKitProvider>
			</WagmiConfig>
		</QueryClientProvider>
	</React.StrictMode>
)
