import {
  Avatar,
  AvatarBadge,
  Image,
  //   Box,
  Flex,
  Stack,
  Text,
  WrapItem,
  //   useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import userAtom from "../atoms/userAtom";
// import { BsCheck2All, BsFillImageFill } from "react-icons/bs";
// import { selectedConversationAtom } from "../atoms/messagesAtom";

const Conversation = () => {
  //   const user = conversation.participants[0];
  //   const currentUser = useRecoilValue(userAtom);
  //   const lastMessage = conversation.lastMessage;
  //   const [selectedConversation, setSelectedConversation] = useRecoilState(
  //     selectedConversationAtom
  //   );
  //   const colorMode = useColorMode();

  //   console.log("selectedConverstion", selectedConversation);
  return (
    <Flex
      gap={4}
      alignItems={"center"}
      p={"1"}
      _hover={{
        cursor: "pointer",
        bg: useColorModeValue("gray.600", "gray.dark"),
        color: "white",
      }}
      //   onClick={() =>
      //     setSelectedConversation({
      //       _id: conversation._id,
      //       userId: user._id,
      //       userProfilePic: user.profilePic,
      //       username: user.username,
      //       mock: conversation.mock,
      //     })
      //   }
      //   bg={
      //     selectedConversation?._id === conversation._id
      //       ? colorMode === "light"
      //         ? "gray.400"
      //         : "gray.dark"
      //       : ""
      //   }
      borderRadius={"md"}
    >
      <WrapItem>
        <Avatar
          size={{
            base: "xs",
            sm: "sm",
            md: "md",
          }}
          src="https://imgs.search.brave.com/_WeRILENZZFx6eKV9kucdS5BKhWdlAmvtWsy2flVs8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NzE1OTM2NS9waG90/by9wb3J0cmFpdC1v/Zi15b3VuZy1zbWls/aW5nLXdvbWFuLWZh/Y2UtcGFydGlhbGx5/LWNvdmVyZWQtd2l0/aC1mbHlpbmctaGFp/ci1pbi13aW5keS1k/YXktc3RhbmRpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUkxNmNfWnpRSEVl/R29QVVZyVlA5cFB1/c1N6c215bXZWS2RR/VmdQdVZkRG89"
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
          {/* {isOnline ? <AvatarBadge boxSize="1em" bg="green.500" /> : ""}
           */}
        </Avatar>
      </WrapItem>

      <Stack direction={"column"} fontSize={"sm"}>
        <Text fontWeight="700" display={"flex"} alignItems={"center"}>
          johndoe <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
        <Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1}>
          {/* {currentUser._id === lastMessage.sender ? (
            <Box color={lastMessage.seen ? "blue.400" : ""}>
              <BsCheck2All size={16} />
            </Box>
          ) : (
            ""
          )}
          {lastMessage.text.length > 18
            ? lastMessage.text.substring(0, 18) + "..."
            : lastMessage.text || <BsFillImageFill size={16} />} */}
          Hello some message ...
        </Text>
      </Stack>
    </Flex>
  );
};

export default Conversation;
