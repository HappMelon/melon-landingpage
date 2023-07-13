import {
	Box,
	Button,
	ButtonGroup,
	HStack,
	Spacer,
	Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { IoCloudUploadOutline } from "react-icons/io5"
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
				style={{ height: "40rem" }}
				modules={modules}
			/>
			<HStack>
				<ButtonGroup>
					<Button leftIcon={<IoCloudUploadOutline />}>
						<Text>Upload Files*</Text>
					</Button>
					<Button leftIcon={<IoCloudUploadOutline />}>Upload Videos</Button>
					<Spacer />
					<Button>Add Betting Prediction</Button>
				</ButtonGroup>
			</HStack>
		</Box>
	)
}
