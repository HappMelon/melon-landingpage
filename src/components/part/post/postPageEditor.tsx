import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Box,
	Button,
	ButtonGroup,
	HStack,
	Spacer,
	useColorModeValue,
} from "@chakra-ui/react"
import { FileButton } from "@mantine/core"

import { IoCloudUploadOutline } from "react-icons/io5"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { atom, useAtom } from "jotai"
import { ChangeEvent, useState } from "react"

export const ValueAtom = atom("")
export const BettingAtom = atom(0)
export const EnableBettingAtom = atom(false)

export function DialogBetting() {
	const [betting, SetBetting] = useAtom(BettingAtom)
	const [enable, SetEnable] = useAtom(EnableBettingAtom)

	function handleBettingChange(event: ChangeEvent<HTMLInputElement>) {
		const newValue = Number(event.target.value)
		SetBetting(newValue)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Add Betting Prediction</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Do Betting</DialogTitle>
					<DialogDescription>Turn on betting when posting</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Value
						</Label>
						<Input
							id="value"
							className="col-span-3"
							placeholder="e.g. 0.01"
							onChange={handleBettingChange}
						></Input>
					</div>
				</div>
				<DialogFooter>
					<Button
						type="submit"
						onClick={() => {
							SetEnable(true)
						}}
					>
						Betting
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

const modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote", "image"],
	],
}

export const PostPageEditor = () => {
	//   const [value, setValue] = useState("");
	//   const ValueRef = useRef<ReactQuill>(null);

	//   function Post() {
	//     console.log("HandlePost Create Post");
	//     if (ValueRef?.current) {
	//       console.log(ValueRef?.current.value);
	//     }
	//   }

	const [value, setValue] = useAtom(ValueAtom)
	const [file, setFile] = useState<File | null>(null)
	const TextColor = useColorModeValue("#000", "#fff")
	const BgColor = useColorModeValue("#F8F8F8", "#181127")

	return (
		<Box
			bg={BgColor}
			color={TextColor}
			borderRadius=""
			h="100%"
			border={"none"}
		>
			<ReactQuill
				theme="snow"
				onChange={(value) => setValue(value)}
				style={{ height: "40rem" }}
				modules={modules}
			/>
			<HStack>
				<ButtonGroup className="ml-2">
					<Button leftIcon={<IoCloudUploadOutline />}>
						<FileButton onChange={setFile} accept="image/png,image/jpeg">
							{(props) => <Button {...props}>Upload Files*</Button>}
						</FileButton>
					</Button>
					<Button leftIcon={<IoCloudUploadOutline />}>Upload Videos</Button>
					<Spacer />
					<DialogBetting />
				</ButtonGroup>
			</HStack>
		</Box>
	)
}
