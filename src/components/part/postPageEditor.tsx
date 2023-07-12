import { Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
	],
}
export const PostPageEditor = () => {
	const [value, setValue] = useState("")
	return (
		<Box bg="#F8F8F8" borderRadius="1rem" h="100%">
			<ReactQuill
				theme="snow"
				value={value}
				onChange={setValue}
				style={{ height: "440px" }}
				modules={modules}
			/>
			<Text>Buttons</Text>
		</Box>
	)
}
