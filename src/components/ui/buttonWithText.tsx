import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonWithTextProps extends ButtonProps {
	text: string
}

export default function ButtonWithText({
	text,
	...props
}: ButtonWithTextProps) {
	return (
		<Button
			{...props}
			/* flex={1} */
			px={"2rem"}
			fontSize={"1rem"}
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
