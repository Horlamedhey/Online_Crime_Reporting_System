"use client";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function CrimeDetailsModal({ isOpen, closeModal, currentCase }) {
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(!localStorage.getItem("loggedInStation"));
  }, [isClient]);

  return (
    <div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={closeModal}
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="blue.400" color="#fff">
            Crime details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isClient && (
              <Text fontWeight="bold" textAlign="center">
                Viewing as client
              </Text>
            )}
            {currentCase &&
              Object.entries(currentCase).map(([key, value]) => (
                <div key={key} mb={2}>
                  <Text fontWeight="bold">{key}:</Text>
                  <Text>{value}</Text>
                </div>
              ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
