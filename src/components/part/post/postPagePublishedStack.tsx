import { PostPagePublishedBox } from "@/components/part/post/postPagePublishedBox"
import { Stack } from "@chakra-ui/react"

export const PostPagePublicStack = () => {
	return (
		<>
			<Stack spacing="1.5rem" direction="column" mt="2vh">
				<PostPagePublishedBox />
				<PostPagePublishedBox />
				<PostPagePublishedBox />
				<PostPagePublishedBox />
				<PostPagePublishedBox />
			</Stack>
		</>
	)
}
