import App from "@/pages"
import Explore from "@/pages/explore"
import Account from "@/pages/explore/account"
import Mill from "@/pages/explore/mill"
import Login from "@/pages/login"
import { createBrowserRouter } from "react-router-dom"
import { Register } from "./components/part/register"

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
		path: "/explore/account",
		element: <Account />,
	},
	{
		path: "/explore/mill",
		element: <Mill />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
])

export default router
