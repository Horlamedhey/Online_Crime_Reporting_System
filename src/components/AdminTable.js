"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  SimpleGrid,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Stack,
  Text,
  Box,
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
  const ase = [
    {
      name: "Segun Adebayo",
      email: "sage@chakra.com",
    },
    {
      name: "Josef Nikolas",
      email: "Josef@mail.com",
    },
    {
      name: "Lazar Nikolov",
      email: "Lazar@mail.com",
    },
    {
      name: "Abraham",
      email: "abraham@anu.com",
    },
  ];
  return (
    <div>
      <ComplainsTableControl
        setTableState={setTableDisabled}
        setTableData={setTableData}
      />

      {/* <TableContainer>
        <Table variant="simple" size="sm">
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
                  <Flex justify="space-around">
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
      </TableContainer> */}

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
          {tableData?.map((item) => (
            <Flex
              direction={{
                base: "row",
                md: "column",
              }}
            >
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
                {tableHeaders.map((headers) => (
                  <Text fontWeight={700} color="black">
                    {headers.title}
                  </Text>
                ))}
                <Text></Text>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{
                  base: 1,
                  md: 8,
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
                    colorScheme={badge[item.status].color}
                    textAlign="center"
                    borderRadius="lg"
                    p={2}
                  >
                    {badge[item.status].label}
                  </Badge>
                </Box>
                <Flex
                  justify={{
                    base: "start",
                    md: "space-around",
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

      <CrimeDetailsModal
        isOpen={crimeModal}
        closeModal={() => setCrimeModal(false)}
        currentCase={currentCase}
      />
    </div>
  );
}
