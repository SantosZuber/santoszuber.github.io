import { BsGithub } from "react-icons/bs";
import { Button, Icon, Box, HStack, VStack, Text } from "@chakra-ui/react";
import { ProjectTemplate } from "./ProjectTemplate";

export function Projects() {
  return (
    <HStack
      flexWrap={"wrap"}
      justifyContent="center"
      alignItems="center"
      gap="30px"
      w={["300px", "auto"]}
    >
      <ProjectTemplate
        imgURL={"/to-do.png"}
        title={"To-do list app"}
        desc={"To-do list using React + Typescript + ChakraUI "}
        siteURL={"https://santoszuber.github.io/to-do-list-react-ts/"}
        repoURL={"https://github.com/SantosZuber/to-do-list-react-ts"}
      />
      <ProjectTemplate
        imgURL={"/tic-tac-toe.png"}
        title={"Simple Tic Tac Toe"}
        desc={"Tic Tac Toe made with React and ChakraUI."}
        siteURL={"https://santoszuber.github.io/tic-tac-toe/"}
        repoURL={"https://github.com/santoszuber/tic-tac-toe"}
      />
      <ProjectTemplate
        imgURL={"/online-chat.png"}
        title={"Online Chat"}
        desc={
          "Simple online chat made with Node.js, Express.js and Socket.io. Just pick a username and start chatting."
        }
        siteURL={"https://online-chat-santoszh.glitch.me/"}
        repoURL={"https://github.com/SantosZuber/online_chat"}
      />
      <Box
        h={"640px"}
        w={"400px"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <a href="https://github.com/SantosZuber" target={"_blank"}>
          <Button
            bgColor={"#0A043C"}
            colorScheme="facebook"
            w="93px"
            h="93px"
            borderRadius={"full"}
          >
            <VStack>
              <Icon as={BsGithub} boxSize={"30px"} color="white" />
              <Text color="white">More</Text>
            </VStack>
          </Button>
        </a>
      </Box>
    </HStack>
  );
}
