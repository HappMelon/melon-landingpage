import { ButtonWithText } from "@/components/common/button"

import {
	useConnectModal,
	useIsConnected,
	useXSettingsModal,
} from "@flarezone/connect-kit"

import {
	Box,
	BoxProps,
	Button,
	CloseButton,
	Drawer,
	DrawerContent,
	Flex,
	FlexProps,
	IconButton,
	Image,
	Link,
	Spacer,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react"

import { ReactNode, ReactText } from "react"
import { BiGlobe, BiMobile } from "react-icons/bi"
import { BsStars } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

interface LinkItemProps {
	name: string
	icon: string
	path: string
}

const LinkItems: Array<LinkItemProps> = [
	{
		name: "Trending",
		icon: "/images/pages/explore/icon_fire_.svg",
		path: "explore",
	},
	{
		name: "Mill",
		icon: "/images/pages/explore/icon_purchase_.svg",
		path: "mill",
	},
	{
		name: "Wallet",
		icon: "/images/pages/explore/icon_wallet_.svg",
		path: "wallet",
	},
	{
		name: "Flare Premium",
		icon: "/images/pages/explore/icon_premium_.svg",
		path: "premium",
	},
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
			<MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
			<Box ml={{ base: 0, md: "20vw" }} p="1rem 4rem">
				{children}
			</Box>
		</Box>
	)
}

interface SidebarProps extends BoxProps {
	onClose: () => void
}

export function SettingsBtn() {
	const isConnected = useIsConnected()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { isActive, show, hide } = useXSettingsModal()

	if (!isConnected) return null

	return (
		<Link
			onClick={show}
			style={{
				fontSize: "0.75rem",
				color: "black",
				textDecoration: "underline",
				marginTop:"2rem",
			}}
		>
			Settings
		</Link>
	)
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	const navigate = useNavigate()
	const isConnected = useIsConnected()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { isActive, show, hide } = useConnectModal()

	const pushExplore = () => {
		navigate("/explore")
	}

	const pushPost = () => {
		if (isConnected) {
			navigate(`/post`)
		} else {
			show()
		}
	}

	return (
		<Box
			bg={useColorModeValue("white", "gray.900")}
			borderRight="2px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: "20vw" }}
			pos="fixed"
			h="full"
			paddingLeft="5vw"
			paddingTop="2vh"
			overflow="auto"
			{...rest}
		>
			<Flex
				h="10rem"
				alignItems="center"
				mx="2rem"
				justifyContent="space-between"
			>
				<Image
					onClick={pushExplore}
					w="82px"
					h="82px"
					src="/images/pages/explore/logo.png"
					alt="Logo"
					className="cursor-pointer"
				/>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			<Flex direction="column" justifyContent="space-between" h="80vh">
				{LinkItems.map((link) => (
					<NavItem key={link.name} icon={link.icon} path={link.path}>
						{link.name}
					</NavItem>
				))}
				<ButtonWithText
					onClick={() => pushPost()}
					className="py-14px"
					w="142px"
					marginTop="1.25rem"
					mx="1rem"
					text="Post"
					leftIcon={<BsStars />}
				/>
				<Spacer />
				<Stack direction="column" justify="left" mx="2rem" spacing="2rem">
					<SettingsBtn/>
					<Link
						href="mailto:flare.dapp@gmail.com"
						style={{
							fontSize: "0.75rem",
							color: "black",
							textDecoration: "underline",
						}}
					>
						Help
					</Link>
					<Stack direction="row" spacing="0.75rem">
						<IconButton
							onClick={() => window.open("https://twitter.com/flaredapp")}
							aria-label="twitter"
							icon={<img src="/images/brands/twitter.png" alt="Button" />}
							boxSize="2rem"
						/>
						<IconButton
							onClick={() => window.open("https://discord.gg/9a48BTsNkC")}
							aria-label="twitch"
							icon={<img src="/images/brands/discord.png" alt="Button" />}
							boxSize="2rem"
						/>
						<IconButton
							onClick={() => window.open("https://t.me/+mrs5aIfdOPA3MGY1")}
							aria-label="lark"
							icon={<img src="/images/brands/telegram.png" alt="Button" />}
							boxSize="2rem"
						/>
					</Stack>
					<Stack
						direction="row"
						justify="left"
						justifyItems="left"
						align="center"
						spacing="1rem"
					>
						<Button
							fontSize="0.5rem"
							leftIcon={<BiMobile style={{ marginRight: "-0.25rem" }} />}
							p="0"
							bg="none"
							color="#9B9B9B"
							_hover={{ bg: "none" }}
						>
							App
						</Button>
						<Button
							fontSize="0.5rem"
							leftIcon={<BiGlobe style={{ marginRight: "-0.25rem" }} />}
							p="0"
							bg="none"
							color="#9B9B9B"
							_hover={{ bg: "none" }}
						>
							US/EN
						</Button>
					</Stack>
					<Text fontSize="0.5rem" color="#9B9B9B" mt="-2rem">
						© Flare Dapp 2023 | All Rights Reserved
					</Text>
				</Stack>
			</Flex>
		</Box>
	)
}

interface NavItemProps extends FlexProps {
	icon: string
	path: string
	children: ReactText
}

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
	const navigate = useNavigate()
	const isConnected = useIsConnected()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { isActive, show, hide } = useConnectModal()

	return (
		<Link
			onClick={() => {
				if (path === "wallet") {
					if (isConnected) {
						navigate(`/${path}`)
					} else {
						show()
					}
				} else if (path === "premium") {
					// TODO: add premium page
				} else {
					navigate(`/${path}`)
				}
			}}
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
				<img alt={""} src={icon} className="fill-red" />
				<Text
					className="text-1.25rem font-750 pl-1.125rem"
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
	const navigate = useNavigate()

	const pushExplore = () => {
		navigate("/explore")
	}

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

			<Image
				src="/images/pages/explore/logo.png"
				alt="Logo"
				className="cursor-pointer"
				onClick={() => pushExplore()}
			/>
		</Flex>
	)
}
