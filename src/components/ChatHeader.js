import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Flex,
  AvatarBadge,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { natureOfCrime } from "@/data.js";
import supabase from "@/supabase";
export default function ChatHeader({ avatar }) {
  return (
    <Flex w="100%">
      <Avatar
        size="lg"
        name="Abdulazeez"
        src={
          avatar == "computer" ? "/ngPolice.jpg" : "https://bit.ly/dan-abramov"
        }
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          {avatar == "computer" ? "N.P.F" : "User"}
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
}
