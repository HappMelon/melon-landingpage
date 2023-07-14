import App from "@/pages"
import NotFound from "@/pages/404"
import Account from "@/pages/account"
import Explore from "@/pages/explore"
import Mill from "@/pages/mill"
import Post from "@/pages/post"
import Status from "@/pages/status"
import Wallet from "@/pages/wallet"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/explore",
		element: <Explore />,
	},
	{
		path: "/mill",
		element: <Mill />,
	},
	{
		path: "/wallet",
		element: <Wallet />,
	},
	{
		path: "/:username",
		element: <Account />,
	},
	{
		path: "/post",
		element: <Post />,
	},
	{
		path: "/:username/status/:id",
		element: <Status />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
])

export default router
