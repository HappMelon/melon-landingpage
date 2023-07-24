import { ArticleStack } from "@/components/part/articleCard/articleStack"
import { FollowingMillStack } from "@/components/part/mill/followingMillStack"
import { useAccount } from "@/state/Account"
import {
	Box,
	Flex,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Spacer,
	Stack,
} from "@chakra-ui/react"
import { useParams } from "react-router-dom"

export const AccountPageContainer = () => {
	const { username } = useParams()
	const { data: account, isLoading } = useAccount(
		username ? username.replace("@", "") : ""
	)

	if (isLoading) {
		return (
			<div className="flex">
				<Box className="mt-5vh py-2 px-4 w-full border-b">
					<Stack className="flex !flex-row items-center">
						<SkeletonCircle className="rounded-50px !w-3rem !h-3rem" />
						<SkeletonText noOfLines={1} skeletonHeight="5" width={"20rem"} />
					</Stack>
					<Stack className="mt-1rem w-full">
						<Skeleton height="20px" />
						<Skeleton height="20px" />
						<Skeleton height="20px" />
					</Stack>
				</Box>
				<FollowingMillStack
					title="Following Mills"
					count={11}
					className="lt-xl:display-none"
				/>
			</div>
		)
	}

	return (
		<>
			{account ? (
				<Flex className="flex flex-row items-center justify-between m-2vh">
					<ArticleStack userID={account?.characterId || 10} account={account} />
					<Spacer />
					<FollowingMillStack
						title="Following Mills"
						count={11}
						className="lt-xl:display-none"
					/>
				</Flex>
			) : (
				<div className="text-2rem text-center pt-2rem font-mono">
					This account does not exist
				</div>
			)}
		</>
	)
}
