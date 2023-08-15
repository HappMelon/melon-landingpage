import { Avatar } from "@/components/Avatar/Avatar"
import { NotificationBtn } from "@/components/Avatar/NotificationBtn"
import AppearanceSwitch from "@/components/part/appearance-switch"
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react"

import { BiSearch } from "react-icons/bi"
import { useDarkMode } from "usehooks-ts"

export const SearchBar = () => {
  const { isDarkMode, toggle } = useDarkMode()
  const bgColor = isDarkMode ? "black" : "white"
  const lgFrom = "#FFC700"
  const lgTo = "#F83600"
  const gradientButtonStyle = {
    color: "transparent",
    border: "3px solid",
    borderColor: "transparent",
    borderRadius: "full",
    background: `linear-gradient(${bgColor}, ${bgColor}) padding-box,
		linear-gradient(135deg, ${lgFrom}, ${lgTo}) border-box`,
    "> *": {
      background: `linear-gradient(135deg, ${lgFrom}, ${lgTo})`,
      backgroundClip: "text",
      textFillColor: "transparent",
    },
    _hover: {
      background: `linear-gradient(${bgColor}, ${bgColor}) padding-box,
		linear-gradient(315deg, ${lgFrom}, ${lgTo}) border-box`,
      "> *": {
        background: `linear-gradient(315deg, ${lgFrom}, ${lgTo})`,
        backgroundClip: "text",
      },
    },
  }

  return (
    <>
      <Stack
        direction="row"
        className="py-2.6875rem h-8.375rem border-b-2px border-color-#D9D9D9"
      >
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <BiSearch color="gray" />
          </InputLeftElement>
          <Input
            variant="filled"
            type="text"
            placeholder="Search topics, news"
            className="w-40rem max-w-[50rem] !rounded-9999px"
          />
          <Button
            rounded="full"
            style={gradientButtonStyle}
            className="mx-1rem !pt-1.0625rem !pr-1.75rem !pb-0.8125rem !pl-1.6875rem"
          >
            <Text
              bgGradient="linear(to-r, #F9D423, #F83600)"
              bgClip="text"
              className="text-0.875rem mx-1rem"
            >
              Chat with Flare AI
            </Text>
          </Button>
        </InputGroup>
        <Box className="items-center flex flex-row gap-2.25rem">
          <AppearanceSwitch />
          <NotificationBtn />
          <Avatar />
        </Box>
      </Stack>
    </>
  )
}
