/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Box,
	BoxProps,
	CloseButton,
	Drawer,
	DrawerContent,
	Flex,
	FlexProps,
	Icon,
	IconButton,
	Link,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react"
import { ReactNode, ReactText } from "react"
import { IconType } from "react-icons"
import { BsStars } from "react-icons/bs"
import { FaWallet } from "react-icons/fa"
import { FiMenu, FiTag, FiTrendingUp } from "react-icons/fi"
import ButtonWithText from "../ui/button"

interface LinkItemProps {
	name: string
	icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
	{ name: "Trending", icon: FiTrendingUp },
	{ name: "Mill", icon: FiTag },
	{ name: "Wallet", icon: FaWallet },
	{ name: "Flare Premium", icon: BsStars },
]

export default function SimpleSidebar({ children }: { children: ReactNode }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
			<Box ml={{ base: 0, md: "20vw" }} p="4rem">
				{children}
			</Box>
		</Box>
	)
}

interface SidebarProps extends BoxProps {
	onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: "20vw" }}
			pos="fixed"
			h="full"
			paddingLeft="5vw"
			paddingTop="2vh"
			{...rest}
		>
			<Flex
				h="2.5rem"
				alignItems="center"
				mx="2rem"
				justifyContent="space-between"
			>
				<Text
					fontSize="2rem"
					fontFamily="monospace"
					fontWeight="bold"
					marginBottom="1.25rem"
				>
					Logo
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} icon={link.icon}>
					{link.name}
				</NavItem>
			))}
			<ButtonWithText
				marginTop="1.25rem"
				mx="1rem"
				text="Post"
				leftIcon={<BsStars />}
			/>
		</Box>
	)
}

interface NavItemProps extends FlexProps {
	icon: IconType
	children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
	return (
		<Link
			href="#"
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Flex
				align="center"
				p="1.25rem"
				mx="1rem"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: "none",
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="1rem"
						fontSize="1rem"
						_groupHover={{
							color: "#F9D423",
						}}
						as={icon}
					/>
				)}
				<Text
					bgGradient="linear(to-r, #000000, #000000)"
					bgClip="text"
					fontWeight="semibold"
					transition="background 0.2s"
					_groupHover={{
						bgGradient: "linear(to-r, #F9D423, #F83600)",
					}}
				>
					{children}
				</Text>
			</Flex>
		</Link>
	)
}

interface MobileProps extends FlexProps {
	onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: "3.75rem" }}
			px={{ base: "1rem", md: "1.5rem" }}
			height="3.75rem"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent="flex-start"
			{...rest}
		>
			<IconButton
				variant="outline"
				onClick={onOpen}
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text fontSize="2rem" ml="1rem" fontFamily="monospace" fontWeight="bold">
				Logo
			</Text>
		</Flex>
	)
}
