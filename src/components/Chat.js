"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import supabase from "@/supabase";
import { getProcessedData } from "@/utils";

export default function Chat({ classes, openModal, closeModal, currentCase }) {
  const isFirstRun = useRef(true);
  const messagesContainer = useRef();
  const [user, setUser] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [messages, setMessages] = useState([]);
  const [initialRender, setInitialRender] = useState({
    fetchMessages: true,
    sendMessage: true,
  });

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false; // toggle flag after first run
      return; // skip the effect
    }
    const fetchMessages = async () => {
      const { data } = await supabase
        .from("crimes")
        .select("chats")
        .eq("id", currentCase?.id);
      setMessages(data[0].chats ?? []);
      setLoadingMessages(false);
    };
    setUser(localStorage.getItem("loggedInStation") ? "station" : "reporter");
    fetchMessages();
  }, [currentCase?.id]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false; // toggle flag after first run
      return; // skip the effect
    }
    messagesContainer.current?.scrollIntoView({ behavior: "smooth" });
    const sendMessage = async () => {
      await supabase
        .from("crimes")
        .update({
          chats: messages,
        })
        .eq("id", currentCase.id);
    };
    if (messages.length > 0) sendMessage();
  }, [currentCase?.id, messages]);

  useEffect(() => {
    const handleUpdate = (payload) => {
      setMessages(getProcessedData([payload.new])[0].chats);

      console.log("Update received!", payload);
    };

    // Define your subscription here
    const myChannel = supabase
      .channel("crimes")

      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "crimes",
          filter: `id=eq.${currentCase?.id}`,
        },
        handleUpdate
      )
      .subscribe();

    // Cleanup function to unsubscribe
    return () => {
      supabase.removeChannel(myChannel);
    };
  }, [currentCase?.id]);

  return (
    <div className={classes}>
      <Modal
        size="4xl"
        closeOnOverlayClick={false}
        isOpen={openModal}
        onClose={closeModal}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg="blue.400"
            color="white"
          >
            Chat
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody flex="auto">
            <Flex
              h="100%"
              overflow="hidden"
              flexDirection="column"
              justify="space-between"
            >
              {loadingMessages ? (
                <Flex
                  h={250}
                  justify="center"
                  align="center"
                >
                  <Text>Loading Chat...</Text>
                </Flex>
              ) : (
                <Box
                  ref={messagesContainer}
                  flex="auto"
                  h="60vh"
                  overflow="auto"
                >
                  <ChatBody
                    messages={messages}
                    user={user}
                    avatar={user}
                  />
                </Box>
              )}
              <Box flex={1}>
                <ChatFooter
                  sendMessage={(inputMessage) =>
                    setMessages((old) => [
                      ...old,
                      { from: user, text: inputMessage },
                    ])
                  }
                />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
