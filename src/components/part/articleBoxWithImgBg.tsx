import CompanyTitle from "@/components/part/companyTitle"
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
}

export const ArticleBoxWithImgBg = ({
	imageUrl,
	title,
	...props
}: ArticleBoxWithImgBgProps) => {
	return (
		<Box
			{...props}
			position="relative"
			background={`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.50) 67.71%, rgba(255, 255, 255, 0.80) 100%), url(${imageUrl}), lightgray 50% / cover no-repeat`}
			backgroundSize="cover"
			backgroundPosition="center"
			borderRadius="0.625rem"
			boxShadow="0px 6px 60px 0px rgba(0, 0, 0, 0.10)"
		>
			<Box
				position="absolute"
				top="0"
				left="2.5%"
				width="95%"
				height="70%"
				border-radius="0.625rem"
				background="rgba(255, 255, 255, 0.60)"
				filter="blur(0.625rem)"
			/>
			<Flex
				position="absolute"
				direction="column"
				top="0"
				left="2.5%"
				width="95%"
				height="70%"
				p="1.25rem"
				alignItems="flex-start"
				justifyContent="space-between"
				textAlign="left"
				color="white"
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
						@oliviaaaaoh_
					</Text>
					<Text
						color="rgba(0, 0, 0, 0.40)"
						fontFamily="Avenir LT Std"
						fontSize="0.875rem"
						fontStyle="normal"
						fontWeight="400"
						lineHeight="normal"
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
						color="#007AFF"
						bg="rgba(0, 122, 255, 0.20)"
						fontSize="0.75rem"
						borderRadius="0.25rem"
						h="1.5rem"
						p="0.25rem 0.625rem "
					>
						#coinbase
					</Button>
					<Button
						color="#AC3EEF"
						bg="rgba(172, 62, 239, 0.20)"
						fontSize="0.75rem"
						borderRadius="0.25rem"
						h="1.5rem"
						p="0.25rem 0.625rem "
					>
						#crypto
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
					companyName="Coinbase"
					companyLogoUrl="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0"
					participation="1k participation"
					people={329}
				/>
			</Flex>
		</Box>
	)
}
