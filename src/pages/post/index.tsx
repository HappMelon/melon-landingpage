import { PostPageContainer } from "@/components/part/post/postPageContainer"
import theme from "@/themes/theme"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<PostPageContainer />
		</ChakraProvider>
	)
}
