"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Badge,
} from "@chakra-ui/react";

import { badge, tableHeaders } from "@/data.js";
import { useState } from "react";
import CrimeDetailsModal from "./CrimeDetailsModal";
import ComplainsTableControl from "./ComplainsTableControl";

export default function AdminTable({ data }) {
  const [crimeModal, setCrimeModal] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);
  const [tableDisabled, setTableDisabled] = useState(false);
  const [tableData, setTableData] = useState(data);

  const showCase = (item) => {
    setCurrentCase(item);
    setCrimeModal(true);
  };
  return (
    <div>
      <ComplainsTableControl
        setTableState={setTableDisabled}
        setTableData={setTableData}
      />
      <TableContainer>
        <Table variant="simple">
          {/* pointerEvents="none" */}

          <Thead>
            <Tr>
              {tableHeaders.map((headers) => (
                <Th key={headers.value}>{headers.title}</Th>
              ))}
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((item) => (
              <Tr key={item.caseId} style={{ textTransform: "uppercase" }}>
                <Td>{item.caseId}</Td>
                <Td>{item.stationId}</Td>
                <Td>{item.reporter}</Td>
                <Td>{item.address}</Td>
                <Td>{item.natureOfCrime}</Td>
                <Td>{item.createdAt}</Td>
                <Td>
                  <Badge
                    variant="subtle"
                    colorScheme={badge[item.status].color}
                    p={2}
                    borderRadius="lg"
                  >
                    {badge[item.status].label}
                  </Badge>
                </Td>
                <Td>
                  <Flex justifyContent="space-around">
                    <Button
                      colorScheme="blue"
                      variant="link"
                      onClick={() => showCase(item)}
                      isDisabled={tableDisabled}
                    >
                      View
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CrimeDetailsModal
        isOpen={crimeModal}
        closeModal={() => setCrimeModal(false)}
        currentCase={currentCase}
      />
    </div>
  );
}
