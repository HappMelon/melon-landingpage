import "@crossbell/connect-kit/colors.css"
import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import "./styles/globals.css"

import "./i18n"

import React from "react"
import ReactDOM from "react-dom/client"

import { Provider as JotaiProvider } from "jotai"
import { DevTools } from "jotai-devtools"

import { ConnectKitProvider, createWagmiConfig } from "@crossbell/connect-kit"
import { NotificationModal } from "@crossbell/notification"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiConfig } from "wagmi"

import { ClerkProvider } from "@clerk/clerk-react"
import App from "./App"

const queryClient = new QueryClient()
const wagmiConfig = createWagmiConfig({
  appName: "Flare Dapp",
  // WalletConnect Project ID.
  // You can create or find it at https://cloud.walletconnect.com
  walletConnectV2ProjectId: "45f79da8dad1b543b61951d77fbba1c1",
})

const clerk_pub_key = "pk_test_ZGlyZWN0LXVyY2hpbi0xNC5jbGVyay5hY2NvdW50cy5kZXYk"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={wagmiConfig}>
          <ConnectKitProvider>
            <NotificationModal />
            <ClerkProvider publishableKey={clerk_pub_key}>
              <App />
              <DevTools />
            </ClerkProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </JotaiProvider>
  </React.StrictMode>
)
