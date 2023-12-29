"use client";
import { SimpleGrid, Card, Flex, GridItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { badge } from "@/data.js";
export default function AdminLogin() {
  const caseStats = [
    {
      status: "all",
      count: 320,
    },
    {
      status: "open",
      count: 320,
    },
    {
      status: "pending",
      count: 2828,
    },
    {
      status: "resolved",
      count: 390,
    },
  ];
  return (
    <SimpleGrid gap={2} p={2} h="100%" rows={2} columns={2}>
      {caseStats.map((caseStat) => (
        <Card
          key={caseStat.status}
          bg={badge[caseStat.status].colorVariant}
          color="#fff"
          fontWeight="bold"
          fontSize="5xl"
          p={2}
        >
          <Link
            href={`/admin/complains?status=${caseStat.status}`}
            style={{ textDecoration: "none", height: "100%" }}
          >
            <SimpleGrid columns={2} h="100%">
              <SimpleGrid rows={2}>
                <GridItem alignItems="center" justifyContent="center" h="100%">
                  {badge[caseStat.status].label}
                </GridItem>
                <GridItem
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                  fontSize="7xl"
                >
                  {caseStat.count}
                </GridItem>
              </SimpleGrid>
              <Flex alignItems="center" justifyContent="center" h="100%">
                {/* <Icon as={ArrowForwardIcon} color="yellow.500" /> */}
                <ArrowForwardIcon />
              </Flex>
            </SimpleGrid>
          </Link>
        </Card>
      ))}
    </SimpleGrid>
  );
}
