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
export default function ChatFooter({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) {
  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{
          border: "1px solid black",
        }}
        // onKeyPress={(e) => {
        //   if (e.key === "Enter") {
        //     handleSendMessage();
        //   }
        // }}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button
        colorScheme="blue"
        borderRadius="none"
        // _hover={{
        //   bg: "white",
        //   color: "black",
        //   border: "1px solid black",
        // }}
        isDisabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  );
}
