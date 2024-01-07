"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Searchbar from "@/components/Searchbar.js";
import CreateCrimeModal from "@/components/CreateCrimeModal.js";
import CrimeDetailsModal from "@/components/CrimeDetailsModal.js";
import supabase from "@/supabase";
import { getProcessedData } from "@/utils";
export default function Home() {
  const [searchRecord, setSearchRecord] = useState(null);
  const [searchRecordModal, setSearchRecordModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stationId, setStationId] = useState(null);

  useEffect(() => {
    setStationId(localStorage.getItem("loggedInStation"));
  }, [stationId]);

  const searchCrime = async (query) => {
    if (query) {
      setIsLoading(true);
      const { data } = await supabase
        .from("crimes")
        .select()
        .eq("caseId", query);
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

  useEffect(() => {
    const handleUpdate = (payload) => {
      setSearchRecord(getProcessedData([payload.new])[0]);

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
          filter: `id=eq.${searchRecord?.id}`,
        },
        handleUpdate
      )
      .subscribe();

    // Cleanup function to unsubscribe
    return () => {
      supabase.removeChannel(myChannel);
    };
  }, [searchRecord?.id]);

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
        <CreateCrimeModal
          classes={styles.modalDesign}
          openModal={isOpen}
          closeModal={() => setIsOpen(false)}
        />
      </div>
      <CrimeDetailsModal
        isOpen={searchRecordModal}
        currentCase={searchRecord}
        closeModal={() => setSearchRecordModal(false)}
        isClient={!stationId}
      />
    </main>
  );
}
