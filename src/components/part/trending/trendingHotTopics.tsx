import type { HotTopics } from "@/type"
import { Stack, Wrap, WrapItem } from "@chakra-ui/react"

interface TrendingHotTopicsProps extends HotTopics {
	color?: string[]
}

export const TrendingHotTopics = ({ list, color }: TrendingHotTopicsProps) => {
	return (
		<>
			<Stack direction="column" wrap="wrap" mt="2vh">
				<Wrap spacing={4}>
					{list?.map((item: string, i: number) => {
						return (
							<WrapItem key={i}>
								<div
									className="text-0.75rem rounded-0.25rem !py-0.25rem !px-0.625rem"
									style={{
										color: `${color ? color[i] : "#000"}`,
										backgroundColor: `${
											color ? String(color[i]) + String(20) : "#000"
										}`,
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
