import { ethers } from "ethers"
interface Window {
	ethereum: ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc
}
