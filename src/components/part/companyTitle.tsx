import ButtonWithText from "@/components/ui/buttonWithText"
import {
	Button,
	Flex,
	FlexProps,
	Image,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react"
import { FaComments, FaPlus } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

interface CompanyTitleProps extends FlexProps {
	companyLogoUrl: string
	companyName: string
	participation: string
	people: number
}

export default function CompanyTitle({
	companyName,
	companyLogoUrl,
	participation,
	people,
	...props
}: CompanyTitleProps) {
	return (
		<>
			<Flex
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
				{...props}
			>
				<Image
					src={companyLogoUrl}
					alt="coinbase"
					h="2.625rem"
					w="2.625rem"
					border="solid 0.125rem #fff"
					borderRadius="full"
				/>
				<Stack direction="column" alignItems="flex-start" ml="0.75rem">
					<Text
						color="#000"
						fontFamily="Avenir LT Std"
						fontSize="1rem"
						fontStyle="normal"
						fontWeight="550"
						lineHeight="normal"
					>
						{companyName}
					</Text>
					<Stack
						direction="row"
						justify="left"
						justifyItems="left"
						align="center"
						spacing="1rem"
					>
						<Button
							fontSize="0.75rem"
							h="0.75rem"
							leftIcon={<FaComments style={{ marginRight: "-0.25rem" }} />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							{participation}
						</Button>
						<Button
							color="#000000"
							fontSize="0.75rem"
							h="0.75rem"
							leftIcon={<IoIosPeople style={{ marginRight: "-0.25rem" }} />}
							p="0"
							bg="none"
							_hover={{ bg: "none" }}
						>
							{people}
						</Button>
					</Stack>
				</Stack>

				<Spacer />
				<ButtonWithText
					text="Follow"
					leftIcon={<FaPlus />}
					w="6rem"
					h="2.125rem"
				/>
			</Flex>
		</>
	)
}
