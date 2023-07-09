import { Button, ButtonProps, Flex } from "@chakra-ui/react"

interface CircleGradientButtonProps extends ButtonProps {
	direction: "left" | "right"
}

export const CircleGradientButton = ({
	direction,
	...props
}: CircleGradientButtonProps) => {
	if (direction === "left") {
		return (
			<Button
				{...props}
				display="flex"
				alignItems="center"
				justifyContent="center"
				p="0"
				bg="none"
				_hover={{ bg: "none" }}
				position="relative"
			>
				<Flex zIndex="1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="34"
						height="34"
						viewBox="0 0 34 34"
						fill="none"
					>
						<circle
							cx="17"
							cy="17"
							r="17"
							transform="rotate(-180 17 17)"
							fill="url(#paint0_linear_1140_1066)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1140_1066"
								x1="17"
								y1="0"
								x2="17"
								y2="34"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#F9D423" />
								<stop offset="1" stopColor="#FF6B00" />
							</linearGradient>
						</defs>
					</svg>
				</Flex>
				<Flex zIndex="2" position="absolute">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<path
							d="M8.22858 1.81905C8.34345 1.93391 8.40088 2.06991 8.40088 2.22705C8.40088 2.38387 8.34345 2.51972 8.22858 2.63458L4.86304 6.00013L8.24007 9.37715C8.34728 9.48436 8.40088 9.61837 8.40088 9.77918C8.40088 9.93999 8.34345 10.0778 8.22858 10.1927C8.11372 10.3076 7.97772 10.365 7.82058 10.365C7.66375 10.365 7.52791 10.3076 7.41304 10.1927L3.55358 6.32175C3.50764 6.2758 3.47501 6.22603 3.45572 6.17242C3.43673 6.11882 3.42723 6.06139 3.42723 6.00013C3.42723 5.93886 3.43673 5.88143 3.45572 5.82783C3.47501 5.77422 3.50764 5.72445 3.55358 5.6785L7.42453 1.80756C7.53174 1.70035 7.66375 1.64675 7.82058 1.64675C7.97772 1.64675 8.11372 1.70418 8.22858 1.81905Z"
							fill="white"
						/>
					</svg>
				</Flex>
			</Button>
		)
	} else if (direction === "right") {
		return (
			<Button
				display="flex"
				alignItems="center"
				justifyContent="center"
				p="0"
				bg="none"
				_hover={{ bg: "none" }}
				position="relative"
			>
				<Flex zIndex="1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="34"
						viewBox="0 0 35 34"
						fill="none"
					>
						<circle
							cx="17.8125"
							cy="17"
							r="17"
							fill="url(#paint0_linear_1140_1062)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1140_1062"
								x1="17.8125"
								y1="0"
								x2="17.8125"
								y2="34"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#F9D423" />
								<stop offset="1" stopColor="#FF6B00" />
							</linearGradient>
						</defs>
					</svg>
				</Flex>
				<Flex zIndex="2" position="absolute">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<path
							d="M3.58392 10.181C3.46905 10.0661 3.41162 9.93009 3.41162 9.77296C3.41162 9.61613 3.46905 9.48028 3.58392 9.36541L6.94946 5.99987L3.57243 2.62285C3.46522 2.51564 3.41162 2.38163 3.41162 2.22082C3.41162 2.06001 3.46905 1.92217 3.58392 1.80731C3.69878 1.69244 3.83478 1.63501 3.99192 1.63501C4.14875 1.63501 4.28459 1.69244 4.39946 1.80731L8.25892 5.67825C8.30486 5.7242 8.33749 5.77397 8.35678 5.82758C8.37577 5.88118 8.38527 5.93861 8.38527 5.99987C8.38527 6.06114 8.37577 6.11857 8.35678 6.17217C8.33749 6.22578 8.30486 6.27555 8.25892 6.3215L4.38797 10.1924C4.28076 10.2996 4.14875 10.3533 3.99192 10.3533C3.83478 10.3533 3.69878 10.2958 3.58392 10.181Z"
							fill="white"
						/>
					</svg>
				</Flex>
			</Button>
		)
	}
}
