import { ArticleBoxWithImgBg } from "@/components/part/articleCard/articleBoxWithImgBg"
import CompanyTitle from "@/components/part/mill/companyTitle"
import { FollowingMillStack } from "@/components/part/mill/followingMillStack"
import { CircleGradientButton } from "@/components/ui/circleGradientButton"
import { GenerateRandomNumber } from "@/lib/utils"
import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import { FireIcon } from "./Icons"

export const MillPageContainer = () => {
	return (
		<>
			<Stack direction="column" spacing="1.5rem" w="full" p="1.75rem">
				<Flex direction="row" w="full" justifyContent="space-between">
					<Flex direction="row" align="center">
						<FireIcon className="" />
						<Text className="c-#F83600 text-1.5rem font-bold px-1rem">
							HOT!
						</Text>
					</Flex>

					<Spacer />
					<CircleGradientButton direction="left" />
					<CircleGradientButton direction="right" />
				</Flex>

				<Stack className="flex !flex-row gap-2rem mt-5vh !lt-xl:flex-col">
					<ArticleBoxWithImgBg
						className="!w-full !h-auto"
						imageUrl="/images/pages/mill/one.png"
						title="Coinbase has filed a formal request with the court to compel the SEC to establish clear rules for all digital assets."
						handle="@oliviaaaaoh_"
						author="Coinbase"
						tag={["#coinbase", "#crypto"]}
						avatar="/images/pages/mill/Coinbase.png"
						number={GenerateRandomNumber(1, 800)}
					/>
					<ArticleBoxWithImgBg
						className="!w-full !h-auto"
						imageUrl="/images/pages/mill/two.png"
						title="The Economist is a British weekly newspaper printed in demitab format and published digitally."
						handle="@jennyrose_"
						author="Economist"
						tag={["#finance", "#tech"]}
						avatar="/images/pages/mill/Economist.png"
						number={GenerateRandomNumber(1, 800)}
					/>
					<ArticleBoxWithImgBg
						className="!w-full !h-auto"
						imageUrl="/images/pages/mill/three.png"
						title="Fast Company articles with a unique editorial focus on innovation in technology, leadership, and design."
						handle="@davidhoffmannn"
						author="Fast Company"
						tag={["#celarbrity", "#nyc"]}
						avatar="/images/pages/mill/Fast Company.png"
						number={GenerateRandomNumber(1, 800)}
					/>
				</Stack>
				<Flex
					direction="row"
					justify="space-between"
					className="!lt-xl:flex-col"
				>
					<FollowingMillStack title="Crypto" count={5} />
					<FollowingMillStack title="Finance" count={5} />
					<FollowingMillStack title="Celebrity" count={5} />
				</Flex>
				<Stack direction="row" spacing="1.5rem">
					<Button
						p="0.375rem 0.625rem"
						justifyContent="center"
						alignItems="center"
						gap="0.625rem"
						borderRadius="0.25rem"
						background="#F8F8F8"
						color="#9B9B9B"
						textAlign="center"
						fontFamily="Avenir LT Std"
						fontSize="1rem"
						fontStyle="normal"
						fontWeight="700"
						lineHeight="normal"
						_hover={{
							color: "#000",
						}}
					>
						Most Popular
					</Button>
					<Button
						p="0.375rem 0.625rem"
						justifyContent="center"
						alignItems="center"
						gap="0.625rem"
						borderRadius="0.25rem"
						background="#F8F8F8"
						color="#9B9B9B"
						textAlign="center"
						fontFamily="Avenir LT Std"
						fontSize="1rem"
						fontStyle="normal"
						fontWeight="700"
						lineHeight="normal"
						_hover={{
							color: "#000",
						}}
					>
						Hot
					</Button>
					<Button
						p="0.375rem 0.625rem"
						justifyContent="center"
						alignItems="center"
						gap="0.625rem"
						borderRadius="0.25rem"
						background="#F8F8F8"
						color="#9B9B9B"
						textAlign="center"
						fontFamily="Avenir LT Std"
						fontSize="1rem"
						fontStyle="normal"
						fontWeight="700"
						lineHeight="normal"
						_hover={{
							color: "#000",
						}}
					>
						Nearby
					</Button>
					<Button
						p="0.375rem 0.625rem"
						justifyContent="center"
						alignItems="center"
						gap="0.625rem"
						borderRadius="0.25rem"
						background="#F8F8F8"
						color="#9B9B9B"
						textAlign="center"
						fontFamily="Avenir LT Std"
						fontSize="1rem"
						fontStyle="normal"
						fontWeight="700"
						lineHeight="normal"
						_hover={{
							color: "#000",
						}}
					>
						Lifestyle
					</Button>
				</Stack>
				<Flex
					direction="row"
					justify="space-between"
					className="!lt-xl:flex-col"
				>
					<Box
						borderRadius="0.625rem"
						background="#F8F8F8"
						justifyContent="center"
						alignItems="center"
						className="h-5rem p-1rem mx-1rem"
					>
						<CompanyTitle
							companyName="Coinbase"
							companyLogoUrl="/images/pages/mill/Coinbase.png"
							participation="1k participation"
							people={GenerateRandomNumber(1, 800)}
						/>
					</Box>
					<Box
						borderRadius="0.625rem"
						background="#F8F8F8"
						justifyContent="center"
						alignItems="center"
						className="h-5rem p-1rem mx-1rem"
					>
						<CompanyTitle
							companyName="Coinbase"
							companyLogoUrl="/images/pages/mill/Economist.png"
							participation="1k participation"
							people={GenerateRandomNumber(1, 800)}
						/>
					</Box>
					<Box
						borderRadius="0.625rem"
						background="#F8F8F8"
						justifyContent="center"
						alignItems="center"
						className="h-5rem p-1rem mx-1rem"
					>
						<CompanyTitle
							companyName="Coinbase"
							companyLogoUrl="/images/pages/mill/Fast Company.png"
							participation="1k participation"
							people={GenerateRandomNumber(1, 800)}
						/>
					</Box>
				</Flex>
			</Stack>
		</>
	)
}
