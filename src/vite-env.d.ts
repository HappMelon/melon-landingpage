/// <reference types="vite/client" />

if (typeof window.ethereum === "undefined") {
	throw new Error("请安装钱包插件")
}

import { ExternalProvider } from "@ethersproject/providers"
declare global {
	interface Window {
		ethereum?: ExternalProvider
	}
}
