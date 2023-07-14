import { ArticleBoxWithImgBg } from "@/components/part/articleBoxWithImgBg"
import CompanyTitle from "@/components/part/companyTitle"
import { FollowingMillStack } from "@/components/part/followingMillStack"
import { CircleGradientButton } from "@/components/ui/circleGradientButton"
import { GenerateRandomNumber } from "@/lib/utils"
import { Box, Button, Flex, Spacer, Stack } from "@chakra-ui/react"

export const MillPageContainer = () => {
	return (
		<>
			<Stack direction="column" spacing="1.5rem" w="100%" p="1.75rem">
				<Flex direction="row" w="100%" justifyContent="space-between">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12.5rem"
						height="3.125rem"
					>
						<g>
							<path
								d="M3.72413 7.34626C3.61013 8.56225 3.53013 10.7142 4.24812 11.6302C4.24812 11.6302 3.91013 9.26624 6.94008 6.30028C8.16007 5.1063 8.44206 3.48232 8.01607 2.26434C7.77407 1.57435 7.33208 1.00436 6.94808 0.606362C6.72409 0.372365 6.89608 -0.0136293 7.22208 0.000370508C9.19405 0.0883692 12.39 0.636361 13.748 4.04431C14.344 5.54029 14.388 7.08627 14.104 8.65825C13.924 9.66223 13.284 11.8942 14.744 12.1682C15.786 12.3642 16.2899 11.5362 16.5159 10.9402C16.6099 10.6922 16.9359 10.6302 17.1119 10.8282C18.8719 12.8302 19.0219 15.1882 18.6579 17.2181C17.9539 21.1421 13.98 23.998 10.032 23.998C5.10011 23.998 1.17417 21.1761 0.156181 16.0681C-0.253813 14.0062 -0.0458158 9.92623 3.13414 7.04627C3.37013 6.83027 3.75613 7.02227 3.72413 7.34626Z"
								fill="url(#paint0_radial_1140_1071)"
							/>
							<path
								d="M11.834 14.6842C10.0161 12.3443 10.8301 9.6743 11.2761 8.61031C11.3361 8.47031 11.1761 8.33832 11.0501 8.42431C10.2681 8.95631 8.66609 10.2083 7.9201 11.9703C6.91012 14.3522 6.98212 15.5182 7.58011 16.9422C7.9401 17.8002 7.52211 17.9822 7.31211 18.0142C7.10811 18.0462 6.92012 17.9102 6.77012 17.7682C6.34013 17.3582 6.03013 16.8242 5.88213 16.2482C5.85013 16.1242 5.68813 16.0902 5.61414 16.1922C5.05414 16.9662 4.76415 18.2082 4.75015 19.0862C4.70615 21.8001 6.94812 24.0001 9.66008 24.0001C13.078 24.0001 15.568 20.2201 13.604 17.0602C13.034 16.1402 12.498 15.5382 11.834 14.6842Z"
								fill="url(#paint1_radial_1140_1071)"
							/>
						</g>
						<linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#FF6B00" />
							<stop offset="100%" stopColor="#F83600" />
						</linearGradient>
						<text
							x="1.875rem"
							y="1.25rem"
							fontWeight="700"
							fontSize="1.5rem"
							fontStyle="normal"
							fontFamily="Avenir LT Std"
							fill="url(#textGradient)"
						>
							<tspan>HOT!!!</tspan>
						</text>
						<defs>
							<radialGradient
								id="paint0_radial_1140_1071"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(9.05527 24.0602) rotate(-179.751) scale(14.1173 23.1637)"
							>
								<stop offset="0.3144" stopColor="#FF9800" />
								<stop offset="0.6616" stopColor="#FF6D00" />
								<stop offset="0.9715" stopColor="#F44336" />
							</radialGradient>
							<radialGradient
								id="paint1_radial_1140_1071"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(9.84804 10.0121) rotate(90.5787) scale(14.771 11.1163)"
							>
								<stop offset="0.2141" stopColor="#FFF176" />
								<stop offset="0.3275" stopColor="#FFF27D" />
								<stop offset="0.4868" stopColor="#FFF48F" />
								<stop offset="0.6722" stopColor="#FFF7AD" />
								<stop offset="0.7931" stopColor="#FFF9C4" />
								<stop offset="0.8221" stopColor="#FFF8BD" stopOpacity="0.804" />
								<stop offset="0.8627" stopColor="#FFF6AB" stopOpacity="0.529" />
								<stop
									offset="0.9101"
									stopColor="#FFF38D"
									stopOpacity="0.2088"
								/>
								<stop offset="0.9409" stopColor="#FFF176" stopOpacity="0" />
							</radialGradient>
						</defs>
					</svg>
					<Spacer />
					<CircleGradientButton direction="left" />
					<CircleGradientButton direction="right" />
				</Flex>

				<Flex direction="row" justify="space-between" w="100%">
					<ArticleBoxWithImgBg
						imageUrl="/images/pages/mill/one.png"
						title="Coinbase has filed a formal request with the court to compel the SEC to establish clear rules for all digital assets."
						handle="@oliviaaaaoh_"
						author="Coinbase"
						tag={["#coinbase", "#crypto"]}
						avatar="/images/pages/mill/avatar_coinbase.png"
						number={GenerateRandomNumber(1, 800)}
						w="26.375rem"
						h="17.625rem"
					/>
					<ArticleBoxWithImgBg
						imageUrl="/images/pages/mill/two.png"
						title="The Economist is a British weekly newspaper printed in demitab format and published digitally."
						handle="@jennyrose_"
						author="Economist"
						tag={["#finance", "#tech"]}
						avatar="/images/pages/mill/avatar_e.png"
						number={GenerateRandomNumber(1, 800)}
						w="26.375rem"
						h="17.625rem"
					/>
					<ArticleBoxWithImgBg
						imageUrl="/images/pages/mill/three.png"
						title="Fast Company articles with a unique editorial focus on innovation in technology, leadership, and design."
						handle="@davidhoffmannn"
						author="Fast Company"
						tag={["#celarbrity", "#nyc"]}
						avatar="/images/pages/mill/avatar_fc.png"
						number={GenerateRandomNumber(1, 800)}
						w="26.375rem"
						h="17.625rem"
					/>
				</Flex>
				<Flex direction="row" justify="space-between" w="100%">
					<FollowingMillStack title="Crypto" count={5} w="26.375rem" />
					<FollowingMillStack title="Finance" count={5} w="26.375rem" />
					<FollowingMillStack title="Celebrity" count={5} w="26.375rem" />
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
				<Flex direction="row" justify="space-between" w="100%">
					<Box
						w="26.375rem"
						h="5rem"
						p="1rem 1rem"
						borderRadius="0.625rem"
						background="#F8F8F8"
						justifyContent="center"
						alignItems="center"
					>
						<CompanyTitle
							companyName="Coinbase"
							companyLogoUrl="/images/pages/mill/avatar_coinbase.png"
							participation="1k participation"
							people={GenerateRandomNumber(1, 800)}
						/>
					</Box>
					<Box
						w="26.375rem"
						h="5rem"
						p="1rem 1rem"
						borderRadius="0.625rem"
						background="#F8F8F8"
						justifyContent="center"
						alignItems="center"
					>
						<CompanyTitle
							companyName="Coinbase"
							companyLogoUrl="/images/pages/mill/avatar_coinbase.png"
							participation="1k participation"
							people={GenerateRandomNumber(1, 800)}
						/>
					</Box>
					<Box
						w="26.375rem"
						h="5rem"
						p="1rem 1rem"
						borderRadius="0.625rem"
						background="#F8F8F8"
						justifyContent="center"
						alignItems="center"
					>
						<CompanyTitle
							companyName="Coinbase"
							companyLogoUrl="/images/pages/mill/avatar_coinbase.png"
							participation="1k participation"
							people={GenerateRandomNumber(1, 800)}
						/>
					</Box>
				</Flex>
			</Stack>
		</>
	)
}
