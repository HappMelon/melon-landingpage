import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { PopularAuthors } from "./popularAuthors"

export const PopularAuthorStack = () => {
  const popular = Array.from({ length: 1 })
  const TextColor = useColorModeValue("black", "white.800")
  const BgColor = useColorModeValue("#FFF", "#524B6220")
  return (
    <Box
      className="w-18vw rounded-1rem self-start mt-5vh lt-xl:display-none ml-1rem"
      bg={BgColor}
    >
      <Stack
        direction="column"
        spacing="1.5rem"
        w="100%"
        p="1.75rem"
        overflowX="auto"
      >
        <Flex alignItems="center" gap="5px">
          <Text fontSize="1.25rem" fontWeight="bold" color={TextColor}>
            Popular Authors
          </Text>
          <img src="images/pages/explore/🦆 icon _arrow back_.svg" alt="" />
        </Flex>

        {popular.map((_, index) => (
          <PopularAuthors key={index} />
        ))}
      </Stack>
    </Box>
  )
}
