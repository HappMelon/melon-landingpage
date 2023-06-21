import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import "./styles/globals.css"

import "./i18n"

import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
