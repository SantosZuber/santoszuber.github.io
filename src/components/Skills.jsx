import { HStack, Badge, Text, Icon, VStack } from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
const badgeProps = {
  _hover: { bgColor: "#03506f", transform: "scale(1.2)" },
  paddingX: 7,
  paddingY: 3,
  borderRadius: 4,
  border: "10px solid transparent",
  transition: "0.2s all",
  bgColor: "#1a202c",
  color: "white",
  w: "130px",
};
export function Skills() {
  return (
    <HStack
      flexWrap={"wrap"}
      justifyContent="center"
      alignItems={"center"}
      gap="14px"
    >
      <Badge {...badgeProps}>
        <VStack>
          <Icon as={SiHtml5} boxSize="20px" color={"rgb(227, 79, 38);"} />
          <Text>HTML</Text>
        </VStack>
      </Badge>
      <Badge {...badgeProps}>
        <VStack>
          <Icon as={SiCss3} boxSize="20px" color={"rgb(38, 102, 243);"} />
          <Text>CSS</Text>
        </VStack>
      </Badge>
      <Badge {...badgeProps}>
        <VStack>
          <Icon as={SiJavascript} boxSize="20px" color={"rgb(248, 220, 62);"} />
          <Text>JavaScript</Text>
        </VStack>
      </Badge>
      <Badge {...badgeProps}>
        <VStack>
          <Icon as={SiTypescript} boxSize="20px" color={"rgb(0, 122, 205);"} />
          <Text>TypeScript</Text>
        </VStack>
      </Badge>
      <Badge {...badgeProps}>
        <VStack>
          <Icon as={SiReact} boxSize="20px" color={"rgb(0, 216, 255);"} />
          <Text>React</Text>
        </VStack>
      </Badge>
      <Badge {...badgeProps}>
        <VStack>
          <Icon as={SiNextdotjs} boxSize="20px" color={"white"} />
          <Text>Next.js</Text>
        </VStack>
      </Badge>
    </HStack>
  );
}
