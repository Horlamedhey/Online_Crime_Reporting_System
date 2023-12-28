"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Searchbar from "@/components/Searchbar.js";
import ModalComponent from "@/components/Modal.js";
import record from "@/record.json";
import CrimeDetailsModal from "@/components/CrimeDetailsModal.js";
export default function Home() {
  const [searchRecord, setSearchRecord] = useState(null);
  const [searchRecordModal, setSearchRecordModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchCrime = (crimeCode) => {
    setIsLoading(true);
    const foundRecord = record.find((record) => record.caseId == crimeCode);

    if (foundRecord) {
      setTimeout(() => {
        setIsLoading(false);
        setSearchRecord(foundRecord);
        setSearchRecordModal(true);
      }, 2000);
    } else {
      setIsLoading(false);
      alert("not found");
    }

    //TODO:search a crime using crime code
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Image
          src="/hero.jpg"
          alt="hero background"
          priority
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.overlay}>
          <div>
            <Searchbar
              searchCrime={searchCrime}
              isLoading={isLoading}
            />
            <Button
              _hover={{ bg: "#fff", color: "blue" }}
              fontSize="3xl"
              borderColor="#fff"
              color="#fff"
              size="lg"
              variant="outline"
              py="40px"
              px="60px"
              onClick={() => setIsOpen(true)}
            >
              CREATE A REPORT{isOpen && "true"}
            </Button>
          </div>
        </div>
      </div>
      <div>
        <ModalComponent
          classes={styles.modalDesign}
          openModal={isOpen}
          closeModal={() => setIsOpen(false)}
        />
      </div>
      <CrimeDetailsModal
        isOpen={searchRecordModal}
        currentCase={searchRecord}
        closeModal={() => setSearchRecordModal(false)}
      />
    </main>
  );
}
