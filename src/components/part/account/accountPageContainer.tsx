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
					<Box padding="6" boxShadow="lg">
						{Array.from({ length: 6 }).map((_, index) => (
							<Box className="flex mt-2rem" key={index}>
								<SkeletonCircle size="3rem" />
								<Box className="flex flex-col ml-1rem w-full">
									<Box className="flex mt-1rem">
										<Skeleton className="h-1rem w-4rem" />
										<Skeleton className="h-1rem w-4rem ml-1rem" />
									</Box>
									<SkeletonText
										width={"full"}
										mt="4"
										noOfLines={3}
										spacing="3"
										skeletonHeight="3"
									/>
								</Box>
							</Box>
						))}
					</Box>
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
				<Flex className="flex flex-row items-start justify-between m-2vh">
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
