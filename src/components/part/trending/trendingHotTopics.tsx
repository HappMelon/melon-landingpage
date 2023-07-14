import { RandomHexColor } from "@/lib/utils"
import { useHotTopics } from "@/state/HotTopics"
import { Stack, Wrap, WrapItem } from "@chakra-ui/react"

export const TrendingHotTopics = () => {
	const { data: topics } = useHotTopics(10)
	return (
		<>
			<Stack direction="column" wrap="wrap" mt="2vh">
				<Wrap spacing={4}>
					{topics?.list.map((item: string, i: number) => {
						const ht: string = RandomHexColor()
						return (
							<WrapItem key={i}>
								<div
									className="text-0.75rem rounded-0.25rem h-1.5rem !py-0.25rem !px-0.625rem"
									style={{
										color: `${ht}`,
										backgroundColor: `${ht}20`,
									}}
								>
									#{item}
								</div>
							</WrapItem>
						)
					})}
				</Wrap>
			</Stack>
		</>
	)
}
