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
  Flex,
  Box,
  Badge,
  Text,
  Progress,
  Grid,
  GridItem,
  AspectRatio,
  Img,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { badge } from "@/data";
import { FaPhone, FaPlay } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Chat from "./Chat";
export default function CrimeDetailsModal({ isOpen, closeModal, currentCase }) {
  const [isClient, setIsClient] = useState(true);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    setIsClient(!localStorage.getItem("loggedInStation"));
  }, [isClient]);

  return (
    <div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={closeModal}
        size="full"
      >
        <ModalOverlay />
        <ModalContent pt={2}>
          <ModalCloseButton
            bg="red"
            color="#fff"
            borderRadius="full"
            p={1}
            fontSize={12}
          />
          {currentCase && (
            <ModalBody>
              <Box>
                <Flex justify="space-between" align="center">
                  <Badge
                    variant="subtle"
                    colorScheme={badge[currentCase.status].color}
                    p={2}
                    borderRadius="lg"
                    my="4px"
                  >
                    {badge[currentCase.status].label}
                  </Badge>
                  <Flex gap={4} fontSize="14px">
                    <Box>
                      <Text as="span" color=" #9095A1FF" mr={1}>
                        Open Date:
                      </Text>
                      <Text as="span" fontWeight={700} color="#222730FF">
                        {currentCase.createdAt}
                      </Text>
                    </Box>

                    <Box>
                      <Text as="span" color=" #9095A1FF" mr={1}>
                        Resolve Date:
                      </Text>
                      <Text as="span" fontWeight={700} color="#222730FF">
                        {currentCase.resolvedAt}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text
                    fontSize="48px"
                    fontWeight={700}
                    color="#171A1FFF"
                    lineHeight="68px"
                    my="4px"
                  >
                    {currentCase.natureOfCrime}
                  </Text>

                  <Text
                    fontWeight={700}
                    fontSize="24px"
                    color="#171A1FFF"
                    lineHeight="36px"
                    px="12px"
                  >
                    {currentCase.reporter}
                  </Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Box>
                    {/*piority */}
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Box>

                  <Flex gap={4} fontSize="14px">
                    <Box>
                      <Text as="span" color=" #9095A1FF" mr={1}>
                        CrimeID:
                      </Text>
                      <Text as="span" fontWeight={700} color="#222730FF">
                        {currentCase.caseId}
                      </Text>
                    </Box>
                    <Box>
                      <Text as="span" color=" #9095A1FF" mr={1}>
                        StationID:
                      </Text>
                      <Text as="span" fontWeight={700} color="#222730FF">
                        {currentCase.stationId}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  gap={2}
                  my={3}
                  h="420px"
                  justifyItems="stretch"
                >
                  <GridItem rowSpan={2} colSpan={2}>
                    <AspectRatio borderRadius={5} h="100%" overflow="hidden">
                      <iframe
                        title="naruto"
                        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                        allowFullScreen
                      />
                    </AspectRatio>
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1} overflow="hidden">
                    <Img
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1} overflow="hidden">
                    <Img
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1} overflow="hidden">
                    <Img
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1} overflow="hidden">
                    <Img
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                </Grid>
                <Flex justify="space-between" mt="40px" gap={2}>
                  <Box w="65%">
                    <Text fontSize="24px" fontWeight={700} mb="12px">
                      Crime description
                    </Text>
                    <Text font-size="14px" font-weight={400}>
                      {currentCase.crimeDescription}
                    </Text>
                    <Box mt="20px">
                      <Text display="flex" align="center" my="8px">
                        <Icon as={FaPhone} w={6} h={5} />
                        {currentCase.phone}
                      </Text>
                      <Text display="flex" align="center" my="8px">
                        <Icon as={CiLocationOn} w={6} h={5} />
                        {currentCase.address}
                      </Text>
                      {/**address */}
                      <Text display="flex" align="center" my="8px">
                        <Icon as={MdMyLocation} w={6} h={5} />
                        {currentCase.location}
                      </Text>
                      {/**location */}
                    </Box>
                  </Box>
                  <Box w="35%">
                    <Text
                      fontSize="24px"
                      fontWeight={700}
                      lineHeight="36px"
                      mb="12px"
                    >
                      Audio recordings
                    </Text>
                    <Flex flexDirection="column" gap={5}>
                      <Box display="flex" alignItems="center">
                        <IconButton
                          bg="white"
                          aria-label="Call Sage"
                          fontSize="20px"
                          size="sm"
                          icon={<FaPlay />}
                        />

                        <Progress hasStripe value={64} width="100%" mx="4px" />
                      </Box>

                      <Box display="flex" alignItems="center">
                        <IconButton
                          bg="white"
                          aria-label="Call Sage"
                          fontSize="20px"
                          size="sm"
                          icon={<FaPlay />}
                        />

                        <Progress hasStripe value={64} width="100%" mx="4px" />
                      </Box>
                      <Button
                        font-size="16px"
                        font-weight={400}
                        line-height="26px"
                        colorScheme="blue"
                      >
                        Open location in map
                      </Button>
                      <Button colorScheme="blue" variant="outline">
                        Change status
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box position="fixed" bottom="4" right="4" zIndex="100">
                <IconButton
                  isRound
                  bg="transparent"
                  aria-label="Call Sage"
                  fontSize="80px"
                  size="lg"
                  onClick={() => setOpenChat(true)}
                  icon={<IoChatbubbleEllipses />}
                />
              </Box>
            </ModalBody>
          )}
          {/* <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={closeModal}
            >
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
      <Chat openModal={openChat} closeModal={() => setOpenChat(false)} />
    </div>
  );
}
//   {isClient && (
//               <Text fontWeight="bold" textAlign="center">
//                 Viewing as client
//               </Text>
//             )}
//             {currentCase &&
//               Object.entries(currentCase).map(([key, value]) => (
//                 <div key={key} mb={2}>
//                   <Text fontWeight="bold">{key}:</Text>
//                   <Text>{value}</Text>
//                 </div>
//               ))}
