"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("loggedInStation")) {
      router.replace("/login");
    }
  });
  return (
    <Box overflow="hidden">
      <Navbar />
      <Box h="calc(100vh - 80px)">
        <Flex h="100%">
          <Box w="180px">
            <Sidebar />
          </Box>
          <Box flex={1} bg="rgba(66,153,225,0.1)" h="100%">
            {children}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
