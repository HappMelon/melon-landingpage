import App from "@/pages"
import Account from "@/pages/account"
import Explore from "@/pages/explore"
import Mill from "@/pages/mill"
import Post from "@/pages/post"
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
		path: "/account",
		element: <Account />,
	},
	{
		path: "/post",
		element: <Post />,
	},
])

export default router
