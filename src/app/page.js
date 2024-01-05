"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Searchbar from "@/components/Searchbar.js";
import ModalComponent from "@/components/CreateCrimeModal.js";
import record from "@/record.json";
import CrimeDetailsModal from "@/components/CrimeDetailsModal.js";
import supabase from "@/supabase";
import { getProcessedData } from "@/utils";
export default function Home() {
  const [searchRecord, setSearchRecord] = useState(null);
  const [searchRecordModal, setSearchRecordModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchCrime = async (query) => {
    if (query) {
      setIsLoading(true);
      const { data } = await supabase
        .from("crimes")
        .select()
        .eq("caseId", parseInt(query));
      if (data.length) {
        setSearchRecord(getProcessedData(data)[0]);
        setSearchRecordModal(true);
        setIsLoading(false);
      } else {
        alert("No record found");
        setIsLoading(false);
      }
    }
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
              placeholder="Search crime status"
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
              REPORT A CRIME
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
