import { Button, ButtonProps } from "@chakra-ui/react"

interface ArticleTagProps extends ButtonProps {
	content: string | ""
	num: number | 0
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ArticleTag = ({ content, num, ...Props }: ArticleTagProps) => {
	const bgColors = ["#FAF3F0", "#D4E2D4", "#FFCACC", "#DBC4F0"]
	return (
		<Button
			className="!rounded-full text-0.75rem font-400 !px-0.625rem !py-0.25rem !h-1.25rem !hover:bg-transparent"
			color="#000"
			bg={bgColors[num % 4]}
		>
			{content}
		</Button>
	)
}
