import CompanyTitle from "@/components/part/mill/companyTitle"
import { RandomHexColor } from "@/lib/utils"
import {
	Avatar,
	Box,
	BoxProps,
	Button,
	Flex,
	Stack,
	Text,
} from "@chakra-ui/react"

interface ArticleBoxWithImgBgProps extends BoxProps {
	imageUrl: string
	title: string
	author: string
	tag: string[]
	avatar: string
	number: number
	handle: string
}

const cl: string = RandomHexColor()

const cr: string = RandomHexColor()

export const ArticleBoxWithImgBg = ({
	imageUrl,
	title,
	author,
	tag,
	avatar,
	number,
	handle,
	...props
}: ArticleBoxWithImgBgProps) => {
	return (
		<Box
			{...props}
			background={`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.50) 67.71%, rgba(255, 255, 255, 0.80) 100%), url(${imageUrl}), lightgray 50% / contain no-repeat;
`}
			className="relative !bg-cover bg-center rounded-0.625rem mx-1rem w-80rem h-20rem"
		>
			<Flex
				className="absolute flex flex-col top-0 left-2.5% w-95% h-70% p-1.25rem items-start justify-between text-left text-white border-rd-10px "
				background="rgba(255, 255, 255, 0.60)"
			>
				<Stack direction="row" spacing="0.75rem" align="center">
					<Avatar
						src="https://bit.ly/dan-abramov"
						size="xs"
						border="1px solid rgba(255, 255, 255, 0.80)"
					/>
					<Text
						color="#000"
						fontFamily="Avenir LT Std"
						fontSize="0.875rem"
						fontStyle="normal"
					>
						{handle}
					</Text>
					<Text
						className="color-rgba(0, 0, 0, 0.40) text-0.875rem font-not-oblique font-400 line-height-normal"
						fontFamily="Avenir LT Std"
						letterSpacing="-0.3px"
					>
						2 days ago
					</Text>
				</Stack>
				<Text
					color="#000"
					fontFamily="Avenir LT Std"
					fontSize="1.125rem"
					fontStyle="normal"
					fontWeight="500"
					lineHeight="160%"
				>
					{title}
				</Text>
				<Stack
					direction="row"
					justify="flex-start"
					align="center"
					spacing="1rem"
				>
					<Button
						color={cl}
						bg={`${cl}20`}
						fontSize="0.75rem"
						borderRadius="0.25rem"
						h="1.5rem"
						p="0.25rem 0.625rem "
					>
						{tag[0]}
					</Button>
					<Button
						color={cr}
						bg={`${cl}20`}
						fontSize="0.75rem"
						borderRadius="0.25rem"
						h="1.5rem"
						p="0.25rem 0.625rem "
					>
						{tag[1]}
					</Button>
				</Stack>
			</Flex>
			<Flex
				position="absolute"
				bottom="0"
				left="2.5%"
				width="95%"
				height="30%"
				p="1.25rem"
				alignItems="flex-start"
				justifyContent="flex-start"
			>
				<CompanyTitle
					companyName={author}
					companyLogoUrl={avatar}
					participation="1k participation"
					people={number}
				/>
			</Flex>
		</Box>
	)
}
