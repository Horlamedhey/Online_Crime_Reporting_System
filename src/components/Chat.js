"use client";
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

import supabase from "@/supabase";
import HeaderChat from "./HeaderChat";
import FooterChat from "./FooterChat";
import BodyChat from "./BodyChat";
export default function Chat({ classes, openModal, closeModal }) {
  const [inputMessage, setInputMessage] = useState("");
  console.log(inputMessage);
  //   const [loggedInUser, setLoggedInUser] = useState("me");
  //   i woild have use object to proper arrange it but its writing infinity loop

  const user = localStorage.getItem("loggedInStation") ? "computer" : "me";

  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);
  const handleSendMessage = () => {
    const data = inputMessage;

    setMessages((old) => [...old, { from: user, text: data }]);
    setInputMessage("");
  };

  return (
    <div className={classes}>
      <Modal
        size="4xl"
        closeOnOverlayClick={false}
        isOpen={openModal}
        onClose={closeModal}
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
          <ModalBody>
            {/* header compenet starts */}
            <HeaderChat avatar={user} />
            {/* header compenet ends */}
            {/* body chat start */}
            <BodyChat
              messages={messages}
              user={user}
              avatar={user}
            />
            {/* body chat end */}
            {/*footer starts here */}
            <FooterChat
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              handleSendMessage={handleSendMessage}
            />
            {/* footer ends here */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

/**<ModalBody className={classes}>
              <FormControl id="name" mb="4">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  name="reporter"
                  value={formData.reporter}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="phone" mb="4">
                <FormLabel>Phone</FormLabel>
                <Input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="address" mb="4">
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="location" mb="4">
                <FormLabel>Location</FormLabel>
                <Input type="text" placeholder="Enter your Location" />
              </FormControl>
              <Center fontSize="2xl" mb="4">
                Crime details
              </Center>
              <FormControl id="natureOfCrime" mb="4">
                <FormLabel>Nature of Crime</FormLabel>
                <Select placeholder="">
                  {natureOfCrime.map((value, key) => (
                    <option key={key + 1}>{value}</option>
                  ))}
                  
                </Select>
              </FormControl>
              <FormControl id="crimeDescription" mb="4">
                <FormLabel>Crime description</FormLabel>
                <Textarea
                  placeholder="Enter your report"
                  name="crimeDescription"
                  value={formData.crimeDescription}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="voiceNote" mb="4">
                <FormLabel>Voice note</FormLabel>
                <Input type="text" placeholder="voice note" />
              </FormControl>
              <FormControl id="evidence" mb="0">
                <FormLabel>Upload Evidence</FormLabel>
                <Input type="file" multiple="true" />
              </FormControl>
            </ModalBody> */
