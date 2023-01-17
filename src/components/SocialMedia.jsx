import { HStack, Icon, VStack, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillEnvelopeFill,
  BsFillEnvelopeOpenFill,
} from "react-icons/bs";
export function SocialMedia() {
  const [display, setDisplay] = useState(false);

  return (
    <VStack>
      <HStack gap={"14px"}>
        <a
          href="https://www.linkedin.com/in/santos-zuberbuhler/"
          target="_blank"
        >
          <Icon w={7} h={7} as={BsLinkedin} color={"white"} />
        </a>
        <a href="https://github.com/santoszuber" target="_blank">
          <Icon w={7} h={7} as={BsGithub} color={"white"} />
        </a>
        <a href="https://twitter.com/santos_zh_" target="_blank">
          <Icon w={7} h={7} as={BsTwitter} color={"white"} />
        </a>
        <Box w={"29px"} h={"29px"}>
          <Icon
            w={7}
            h={7}
            as={display ? BsFillEnvelopeOpenFill : BsFillEnvelopeFill}
            onClick={() => {
              setDisplay(!display);
            }}
            cursor={"pointer"}
            color={"white"}
          />
        </Box>
      </HStack>
      <Box height={"30px"}>
        <Text
          display={display ? "block" : "none"}
          fontWeight="hairline"
          color={"white"}
        >
          santoszuberbuhler2003@protonmail.com
        </Text>
      </Box>
    </VStack>
  );
}
