"use client";
import {
  SimpleGrid,
  Button,
  Flex,
  Stack,
  Text,
  Box,
  Badge,
  Show,
} from "@chakra-ui/react";

import { badge as statuses, tableHeaders } from "@/data.js";
import { useState, useEffect } from "react";
import CrimeDetailsModal from "./CrimeDetailsModal";
import ComplainsTableControl from "./ComplainsTableControl";
import supabase from "@/supabase";
import { getProcessedData } from "@/utils";

// const statusList = Object.entries(statuses)
//   .filter(([key]) => key != "all")
//   .map(([key, val]) => ({ status: key, level: val.level }));

export default function AdminTable({ data }) {
  const [crimeModal, setCrimeModal] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);
  const [tableDisabled, setTableDisabled] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [upgradingStatus, setUpgradingStatus] = useState(false);
  const [stationId, setStationId] = useState(null);
  useEffect(() => {
    setStationId(localStorage.getItem("loggedInStation"));
  }, [updatingStatus]);
  const showCase = (item) => {
    setCurrentCase(item);
    setCrimeModal(true);
  };

  const updateStatus = async (updateAction) => {
    let statusToSet;
    const updateFunc = async (status) => {
      const { error } = await supabase
        .from("crimes")
        .update({ status, stationId: status == "open" ? null : stationId })
        .eq("id", currentCase.id);

      if (error) {
        alert("Error updating data:", error);
      } else {
        alert("Data updated successfully");
        setCurrentCase((prev) => ({
          ...prev,
          stationId: stationId,
          status: { key: statusToSet.status, ...statuses[statusToSet.status] },
        }));
      }

      return error;
    };

    if (updateAction == "assign") {
      setUpdatingStatus(true);
      statusToSet = "pending";
      await updateFunc("pending");
      setUpdatingStatus(false);
    } else {
      setUpdatingStatus(true);
      statusToSet = "open";

      await updateFunc("open");
      setUpdatingStatus(false);
    }
  };

  return (
    <div>
      <ComplainsTableControl
        setTableState={setTableDisabled}
        setTableData={(data) => setTableData(getProcessedData(data))}
      />

      <Flex w="full" alignItems="center" justifyContent="center">
        <Stack
          direction={{
            base: "column",
          }}
          w="full"
          shadow="lg"
          overflowY="auto"
          maxH={`calc(100vh - 147px)`}
        >
          <Show above="lg">
            <SimpleGrid
              spacingY={3}
              columns={{
                base: 1,
                md: 8,
              }}
              w={{
                base: 150,
                md: "full",
              }}
              textTransform="uppercase"
              color={"gray.500"}
              py={{
                base: 1,
                md: 4,
              }}
              px={{
                base: 2,
                md: 4,
              }}
              fontSize="md"
            >
              {tableHeaders.map((header) => (
                <Text key={header.title} fontWeight={700} color="black">
                  {header.title}
                </Text>
              ))}
              <Text></Text>
            </SimpleGrid>
          </Show>
          {tableData?.map((item) => (
            <Flex
              key={item.caseId}
              direction={{
                base: "row",
                lg: "column",
              }}
            >
              <Show below="lg">
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    lg: 8,
                  }}
                  w={{
                    base: 150,
                    lg: "full",
                  }}
                  textTransform="uppercase"
                  color={"gray.500"}
                  py={{
                    base: 1,
                    lg: 4,
                  }}
                  px={{
                    base: 2,
                    lg: 4,
                  }}
                  fontSize="md"
                >
                  {tableHeaders.map((header) => (
                    <Text key={header.title} fontWeight={700} color="black">
                      {header.title}
                    </Text>
                  ))}
                  <Text></Text>
                </SimpleGrid>
              </Show>
              <SimpleGrid
                spacingY={3}
                columns={{
                  base: 1,
                  lg: 8,
                }}
                w="full"
                py={2}
                px={4}
              >
                <Text>{item.caseId}</Text>
                <Text>{item.stationId}</Text>
                <Text>{item.reporter}</Text>
                <Text>{item.address}</Text>
                <Text>{item.natureOfCrime}</Text>
                <Text>{item.createdAt}</Text>
                <Box>
                  <Badge
                    variant="subtle"
                    colorScheme={item.status.color}
                    textAlign="center"
                    borderRadius="lg"
                    p={2}
                  >
                    {item.status.label}
                  </Badge>
                </Box>
                <Flex
                  justify={{
                    base: "start",
                    lg: "space-around",
                  }}
                >
                  <Button
                    colorScheme="blue"
                    variant="link"
                    onClick={() => showCase(item)}
                    isDisabled={tableDisabled}
                  >
                    View
                  </Button>
                </Flex>
              </SimpleGrid>
            </Flex>
          ))}
        </Stack>
      </Flex>

      {crimeModal && (
        <CrimeDetailsModal
          isOpen={crimeModal}
          closeModal={() => setCrimeModal(false)}
          currentCase={currentCase}
          updateStatus={updateStatus}
          updatingStatus={updatingStatus}
          upgradingStatus={upgradingStatus}
          isClient={!stationId}
        />
      )}
    </div>
  );
}
