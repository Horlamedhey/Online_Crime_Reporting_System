"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import supabase from "@/supabase";

export default function Chat({ classes, openModal, closeModal, currentCase }) {
  const [inputMessage, setInputMessage] = useState("");

  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(localStorage.getItem("loggedInStation") ? "computer" : "me");
  }, []);

  const [messages, setMessages] = useState([
    {
      from: "computer",
      text: "Hi nikky, you report has been received and is been investigated",
    },
    { from: "me", text: "Hi, okay thank God" },

    {
      from: "computer",
      text: "where you able to identify anyone while the crime was in progress",
    },
    {
      from: "me",
      text: "Yes, i saw two people holding a gun with mask almost 5 feet 9 inches tall",
    },
    {
      from: "computer",
      text: "okay, anything else",
    },
    {
      from: "me",
      text: "Yes one of the guy has one hand",
    },
  ]);
  const handleSendMessage = async () => {
    const data = inputMessage;

    setMessages((old) => [...old, { from: user, text: data }]);
    setInputMessage("");
    const { error } = await supabase
      .from("crimes")
      .update({
        chat: messages,
      })
      .eq(currentCase.id);
    console.log(currentCase.id);
    if (error) {
      alert("Error updating data:", error);
    } else {
      alert("Data updated successfully");
    }
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
          <ModalHeader bg="blue.400" color="white">
            Chat
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* header compenet starts */}
            <ChatHeader avatar={user} />
            {/* header compenet ends */}
            {/* body chat start */}
            <ChatBody messages={messages} user={user} avatar={user} />
            {/* body chat end */}
            {/*footer starts here */}
            <ChatFooter
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
