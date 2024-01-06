"use client";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
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
import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";
import {
  MdMyLocation,
  MdChat,
  MdLocationPin,
  MdOutlineAddIcCall,
} from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Chat from "./Chat";

export default function CrimeDetailsModal({
  isOpen,
  closeModal,
  currentCase,
  updateStatus,
  updatingStatus,
  resolveState,
  isClient,
  resolveLoading,
}) {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={closeModal}
        size="full"
      >
        <ModalOverlay />
        <ModalContent
          pt={2}
          pb={10}
        >
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
                <Flex
                  justify="space-between"
                  align="center"
                >
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
                <Flex
                  justify="space-between"
                  align="center"
                >
                  <Box>
                    {/*piority */}
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Box>

                  <Flex
                    gap={4}
                    fontSize="14px"
                  >
                    <Box>
                      <Text
                        as="span"
                        color=" #9095A1FF"
                        mr={1}
                      >
                        CrimeID:
                      </Text>
                      <Text
                        as="span"
                        fontWeight={700}
                        color="#222730FF"
                      >
                        {currentCase.caseId}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        as="span"
                        color=" #9095A1FF"
                        mr={1}
                      >
                        StationID:
                      </Text>
                      <Text
                        as="span"
                        fontWeight={700}
                        color="#222730FF"
                      >
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
                  <GridItem
                    rowSpan={2}
                    colSpan={2}
                  >
                    <AspectRatio
                      borderRadius={5}
                      h="100%"
                      overflow="hidden"
                    >
                      <iframe
                        title="naruto"
                        src="https://www.youtube.com/embed/PEyj5mGDqls?si=FpaIxcwA8u3tEe73"
                        allowFullScreen
                      />
                    </AspectRatio>
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    rowSpan={1}
                    overflow="hidden"
                  >
                    <Img
                      src="data:image/jpeg;base64,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"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    rowSpan={1}
                    overflow="hidden"
                  >
                    <Img
                      src="https://images.unsplash.com/photo-1600183952608-82f89b735562?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    rowSpan={1}
                    overflow="hidden"
                  >
                    <Img
                      src="data:image/jpeg;base64,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"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    rowSpan={1}
                    overflow="hidden"
                    borderRadius="5px"
                  >
                    <Img
                      src="data:image/jpeg;base64,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"
                      alt="Dan Abramov"
                      borderRadius={5}
                      objectFit="cover"
                      objectPosition="center"
                      w="100%"
                      h="100%"
                    />
                  </GridItem>
                </Grid>
                <Flex
                  justify="space-between"
                  align="center"
                >
                  <Badge
                    variant="subtle"
                    colorScheme={currentCase?.status.color}
                    p={2}
                    borderRadius="lg"
                    my="4px"
                  >
                    {currentCase?.status.label}
                  </Badge>
                  <Flex
                    gap={4}
                    fontSize="14px"
                  >
                    <Box>
                      <Text
                        as="span"
                        color=" #9095A1FF"
                        mr={1}
                      >
                        Open Date:
                      </Text>
                      <Text
                        as="span"
                        fontWeight={700}
                        color="#222730FF"
                      >
                        {currentCase.createdAtLong}
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        as="span"
                        color=" #9095A1FF"
                        mr={1}
                      >
                        Resolve Date:
                      </Text>
                      <Text
                        as="span"
                        fontWeight={700}
                        color="#222730FF"
                      >
                        {currentCase.resolvedAtLong}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex
                  justify="space-between"
                  mt={2}
                  gap={2}
                >
                  <Box w="65%">
                    <Text
                      fontSize="24px"
                      fontWeight={700}
                      mb="12px"
                    >
                      Crime description
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight={400}
                    >
                      {currentCase.crimeDescription}
                    </Text>
                    <Box mt="20px">
                      <Text
                        display="flex"
                        align="center"
                        my="8px"
                      >
                        <Icon
                          as={MdOutlineAddIcCall}
                          w={6}
                          h={5}
                        />
                        {currentCase.phone}
                      </Text>
                      <GridItem
                        display="flex"
                        align="center"
                        my="8px"
                      >
                        <Icon
                          as={CiLocationOn}
                          w={6}
                          h={5}
                        />
                        {currentCase.address}
                      </GridItem>
                      {/**address */}
                      <Text
                        display="flex"
                        align="center"
                        my="8px"
                      >
                        <Icon
                          as={MdMyLocation}
                          w={6}
                          h={5}
                        />
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
                      Audio recording
                    </Text>
                    <Flex
                      flexDirection="column"
                      gap={5}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <IconButton
                          bg="white"
                          aria-label="Call Sage"
                          fontSize="20px"
                          size="sm"
                          icon={<FaPlay />}
                        />

                        <Progress
                          hasStripe
                          value={64}
                          width="100%"
                          mx="4px"
                        />
                      </Box>
                      <Flex gap={10}>
                        <IconButton
                          flex={1}
                          bg="blue.500"
                          fontSize="32px"
                          color="white"
                          size="lg"
                          icon={<MdLocationPin />}
                        />
                        <IconButton
                          flex={1}
                          bg="blue.500"
                          aria-label="Call Sage"
                          fontSize="32px"
                          color="white"
                          size="lg"
                          onClick={() => setOpenChat(true)}
                          icon={<MdChat />}
                        />
                      </Flex>

                      <Flex gap={10}>
                        <Button
                          flex={1}
                          variant="outline"
                          isLoading={updatingStatus}
                          isDisabled={currentCase?.status.key == "resolved"}
                          onClick={() =>
                            updateStatus(
                              currentCase?.stationId ? "unassign" : "assign"
                            )
                          }
                        >
                          {currentCase?.stationId ? "Unassign" : "Assign"} Case
                        </Button>
                        <Button
                          flex={1}
                          variant="outline"
                          colorScheme="green"
                          isLoading={resolveLoading}
                          isDisabled={currentCase?.status.key == "resolved"}
                          onClick={() => updateStatus("resolved")}
                        >
                          Resolve
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              {/* <Box
                position="fixed"
                bottom="4"
                right="4"
                zIndex="100"
              >
                <IconButton
                  isRound
                  bg="transparent"
                  aria-label="Call Sage"
                  fontSize="80px"
                  size="lg"
                  onClick={() => setOpenChat(true)}
                  icon={<IoChatbubbleEllipses />}
                />
              </Box> */}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Chat
        openModal={openChat}
        closeModal={() => setOpenChat(false)}
      />
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
