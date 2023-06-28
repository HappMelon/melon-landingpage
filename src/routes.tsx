import App from "@/pages"
import Explore from "@/pages/explore"
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
		element: <Explore  />,
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
