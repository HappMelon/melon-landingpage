import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonWithTextProps extends ButtonProps {
	text: string
	textFontSize?: string
}

export default function ButtonWithText({
	text,
	textFontSize = "1rem",
	...props
}: ButtonWithTextProps) {
	return (
		<Button
			{...props}
			/* flex={1} */
			px={"2rem"}
			fontSize={textFontSize}
			rounded={"full"}
			bgGradient={"linear(to-r, #F9D423, #F83600)"}
			color={"white"}
			_hover={{
				bgGradient: "linear(to-r, #F9D423, #F83600)",
			}}
			_focus={{
				bgGradient: "linear(to-r, #F9D423, #F83600)",
			}}
		>
			{text}
		</Button>
	)
}
