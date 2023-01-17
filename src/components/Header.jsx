import { HStack, Text, VStack } from "@chakra-ui/react";
import { SocialMedia } from "./SocialMedia";

export function Header() {
  return (
    <HStack
      width={"100%"}
      height={"100vh"}
      justifyContent="center"
      alignItems="center"
      background={
        "linear-gradient(180deg, rgba(3,80,111,1) 0%, rgba(26,32,44,1) 100%)"
      }
    >
      <VStack gap={"30px"}>
        <VStack>
          <Text
            color={"white"}
            fontWeight={"bold"}
            fontSize={["50", "70px", "100px"]}
            textAlign="center"
          >
            Santos Zuberbuhler
          </Text>
          <Text color={"white"} fontSize={["large", "x-large"]}>
            Front-End Web Developer
          </Text>
        </VStack>
        <SocialMedia />
      </VStack>
    </HStack>
  );
}
