import { PostPageContainer } from "@/components/part/postPageContainer"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
	return (
		<ChakraProvider>
			<PostPageContainer />
		</ChakraProvider>
	)
}
