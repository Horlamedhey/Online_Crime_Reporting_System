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
  Select,
  Textarea,
  FormControl,
  FormLabel,
  Center,
  Flex,
  VisuallyHidden,
  Text,
  Stack,
  Icon,
  Box,
  Image,
  Progress,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import { useState } from "react";
import { natureOfCrime } from "@/data.js";
import supabase from "@/supabase";
// import styles from "./page.module.css";
import styles from "@/app/page.module.css";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { VoiceRecorder } from "react-voice-recorder-player";
export default function ModalComponent({ classes, openModal, closeModal }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedVideo, setUploadedVideo] = useState([]);
  const [selectedVoiceNote, setSelectedVoiceNote] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err)
  );
  const addAudioElement = (voiceNote) => {
    const url = URL.createObjectURL(voiceNote);
    console.log(url);
    // const audio = document.createElement("audio");
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };
  const handleImageChange = (event) => {
    setImageLoading(true);
    const images = event.target.files;

    if (images.length > 4) {
      setImageLoading(false);
      alert(`You can only upload up maximum of 4 files.`);
      return;
    }

    // Use createObjectURL to generate a URL for the selected image
    for (let a = 0; a < images.length; a++) {
      setImageLoading(true);
      const imageUrl = URL.createObjectURL(images[a]);

      setTimeout(() => {
        setSelectedImages((prevFiles) => [...prevFiles, imageUrl]);
        setImageLoading(false);
      }, 2000);
    }
  };
  const handleVideoChange = (event) => {
    setVideoLoading(true);
    const video = event.target.files[0];
    const url = URL.createObjectURL(video);

    setTimeout(() => {
      setUploadedVideo(url);
      setVideoLoading(false);
    }, 2000);
  };
  console.log(uploadedVideo);
  const testRecord = {
    caseId: 1000,
    reporter: "Abdulazeez",
    phone: "08076537276",
    location: "zoo road",
    natureOfCrime: "robbery",
    crimeDescription: "I was hit with a bat",
    voiceNote:
      "data:image/jpeg;base64,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",
    evidence: [
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
    ],
    status: "resolved",
    createdAt: "2023-12-24",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    reporter: "",
    phone: "",
    address: "",
    crimeDescription: "",
    audio: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((input) => ({
      ...input,
      [name]: value,
    }));
    console.log(formData.reporter);
  };

  const submitReport = async () => {
    console.log(formData.address);
    const { data, error } = await supabase
      .from("crimes")
      .insert([
        {
          reporter: formData.reporter,
          address: formData.address,
          crimeDescription: formData.crimeDescription,
        },
      ])
      .select();
    if (error) {
      console.error("Error submitting form data:", error.message);
    } else {
      console.log("Form data submitted successfully:", data);
    }

    const existingRecords = localStorage.getItem("record");
    const parsedExistingRecords = existingRecords
      ? JSON.parse(existingRecords)
      : [];
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      parsedExistingRecords.push(testRecord);
      localStorage.setItem("record", JSON.stringify(parsedExistingRecords));
      closeModal(false);
    }, 3000);
  };

  return (
    <div className={classes}>
      <Modal
        closeOnOverlayClick={false}
        isOpen={openModal}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="blue.400" color="white">
            Report a Crime
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className={classes}>
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
              <VoiceRecorder onRecordingEnd={() => console.log("ase")} />
              {/* <AudioRecorder
                onRecordingComplete={(voiceNote) => addAudioElement(voiceNote)}
                recorderControls={recorderControls}
                // downloadOnSavePress={true}
                // downloadFileExtension="mp3"
              /> */}
            </FormControl>
            {/* TODO make this space hidden if no file is available */}
            <FormControl id="evidence" mb="0">
              <FormLabel>Upload Evidence</FormLabel>
              {selectedImages && (
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  {selectedImages.map((images) => (
                    <GridItem w="100%" h="12" bg="red">
                      <Image objectFit="cover" src={images} alt="Dan Abramov" />
                    </GridItem>
                  ))}
                </Grid>
                // </Box>
              )}
              <Flex
                mt={1}
                justify="center"
                px={4}
                pt={3}
                pb={4}
                borderWidth={2}
                borderStyle="dashed"
                borderColor="black"
                rounded="md"
              >
                <Stack spacing={1} textAlign="center">
                  <Progress size="xs" isIndeterminate={imageLoading} />
                  <Icon
                    mx="auto"
                    boxSize={12}
                    color="gray.400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                  <Flex fontSize="sm" color="gray.600" alignItems="baseline">
                    <FormLabel
                      color="blue.400"
                      htmlFor="image-upload"
                      cursor="pointer"
                      rounded="md"
                      fontSize="md"
                      pos="relative"
                      _hover={{
                        color: "blue",
                      }}
                    >
                      <span> Upload Images</span>

                      <VisuallyHidden>
                        <Input
                          id="image-upload"
                          name="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          multiple
                        />
                      </VisuallyHidden>
                    </FormLabel>
                    <Text>or drag and drop</Text>
                  </Flex>
                  <Text fontSize="xs" color="gray.500">
                    (Maximum of 4)
                  </Text>
                </Stack>
              </Flex>
              {uploadedVideo && ( // This video will have equal sides
                <AspectRatio
                  my={2}
                  // maxW="560px"
                  ratio={3 / 2}
                  display={uploadedVideo.length ? "block" : "none"}
                >
                  <iframe src={uploadedVideo} allowFullScreen />
                </AspectRatio>
              )}
              <Flex
                mt={1}
                justify="center"
                px={4}
                pt={3}
                pb={4}
                borderWidth={2}
                borderStyle="dashed"
                borderColor="black"
                rounded="md"
              >
                <Stack spacing={1} textAlign="center">
                  <Progress size="xs" isIndeterminate={videoLoading} />
                  <Icon
                    mx="auto"
                    boxSize={12}
                    color="gray.400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                  <Flex fontSize="sm" color="gray.600" alignItems="baseline">
                    <FormLabel
                      color="blue.400"
                      htmlFor="video-upload"
                      cursor="pointer"
                      rounded="md"
                      fontSize="md"
                      pos="relative"
                      _hover={{
                        color: "blue",
                      }}
                    >
                      <span>Upload video</span>
                      <VisuallyHidden>
                        <Input
                          id="video-upload"
                          name="video-upload"
                          type="file"
                          onChange={handleVideoChange}
                          accept="video/*"
                        />
                      </VisuallyHidden>
                    </FormLabel>
                    <Text>or drag and drop</Text>
                  </Flex>
                </Stack>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button
              type="button"
              colorScheme="blue"
              onClick={submitReport}
              isLoading={isLoading}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
