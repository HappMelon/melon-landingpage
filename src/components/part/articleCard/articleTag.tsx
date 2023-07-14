import { Button, ButtonProps } from "@chakra-ui/react"

interface ArticleTagProps extends ButtonProps {
	content: string | ""
	num: number | 0
}
export const ArticleTag = ({ content, num, ...props }: ArticleTagProps) => {
	const colors = ["#BD97FF", "#FF5925", "#F90", "#AC3EEF"]
	return (
		<Button
			color={colors[num % 4]}
			bg="rgba(222, 166, 250, 0.20)"
			fontSize="0.75rem"
			borderRadius="0.25rem"
			h="1.5rem"
			p="0.25rem 0.625rem "
		>
			#{content}
		</Button>
	)
}
