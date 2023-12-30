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
  Image,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { badge } from "@/data";
import { FaPhone, FaPlay } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

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
          {currentCase &&
            currentCase.map((currentCase) => (
              <ModalBody>
                <Box>
                  <Flex justifyContent="space-between" gap={3}>
                    <Box>
                      <Badge
                        variant="subtle"
                        colorScheme={badge[currentCase.status].color}
                        p={2}
                        borderRadius="lg"
                        my="4px"
                      >
                        {badge[currentCase.status].label}
                      </Badge>
                      <Text
                        fontSize="48px"
                        fontWeight={700}
                        color="#171A1FFF"
                        lineHeight="68px"
                        my="4px"
                      >
                        {currentCase.natureOfCrime}
                      </Text>
                      <Box>
                        {" "}
                        {/*piority */}
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </Box>
                    </Box>
                    <Flex direction="column" justify="space-between">
                      <Flex lineHeight="22px" gap={3} px="12px">
                        <Text
                          fontSize="14px"
                          fontWeight={400}
                          color=" #9095A1FF"
                        >
                          Open Date:
                        </Text>
                        <Text fontWeight={700} fontSize="14px" color="222730FF">
                          {currentCase.createdAt}
                        </Text>

                        <Flex display="flex">
                          <Text
                            fontSize="14px"
                            fontWeight={400}
                            color=" #9095A1FF"
                          >
                            Resolve Date:
                          </Text>
                          <Text
                            fontWeight={700}
                            fontSize="14px"
                            color="222730FF"
                          >
                            {currentCase.resolvedAt}
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex>
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
                      <Flex lineHeight="22px" gap={3} alignItems="end">
                        <Box display="flex" me="4px" px="12px">
                          <Text
                            fontSize="14px"
                            fontWeight={400}
                            color=" #9095A1FF"
                          >
                            CrimeID:
                          </Text>
                          <Text
                            fontWeight={700}
                            fontSize="14px"
                            color="222730FF"
                          >
                            {currentCase.caseId}
                          </Text>
                        </Box>
                        <Box display="flex" px="12px">
                          <Text
                            fontSize="14px"
                            fontWeight={400}
                            color=" #9095A1FF"
                          >
                            StationID:
                          </Text>
                          <Text
                            fontWeight={700}
                            fontSize="14px"
                            color="222730FF"
                          >
                            {currentCase.stationId}
                          </Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Grid
                    h="350px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(8, 1fr)"
                    gap={4}
                    my={3}
                  >
                    <GridItem rowSpan={2} colSpan={4}>
                      <AspectRatio maxW="560px" height="100%">
                        <iframe
                          title="naruto"
                          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Image
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                        borderRadius={5}
                      />
                    </GridItem>
                    <GridItem colSpan={2} bg="papayawhip"></GridItem>
                    <GridItem colSpan={2} bg="green"></GridItem>
                    <GridItem colSpan={2} bg="green"></GridItem>
                  </Grid>
                  <Flex justifyContent="space-between" mt="40px" gap={2}>
                    <Box w="65%">
                      <Text fontSize="24px" fontWeight={700} mb="12px">
                        Crime description
                      </Text>
                      <Text font-size="14px" font-weight={400}>
                        {currentCase.crimeDescription}
                      </Text>
                      <Box mt="20px">
                        <Text display="flex" alignItems="center" my="8px">
                          <Icon as={FaPhone} w={6} h={5} />
                          {currentCase.phone}
                        </Text>
                        <Text display="flex" alignItems="center" my="8px">
                          <Icon as={CiLocationOn} w={6} h={5} />
                          {currentCase.address}
                        </Text>
                        {/**address */}
                        <Text display="flex" alignItems="center" my="8px">
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

                          <Progress
                            hasStripe
                            value={64}
                            width="100%"
                            mx="4px"
                          />
                        </Box>

                        <Box display="flex" alignItems="center">
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
              </ModalBody>
            ))}
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
