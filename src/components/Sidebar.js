"use client";
import { Box, VStack, StackDivider, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const links = [
    {
      href: "/admin",
      label: "Home",
    },
    {
      href: "/admin/complains",
      label: "Complains",
    },
  ];
  const pathName = usePathname();
  const currentPathName = pathName;
  return (
    <VStack align="stretch">
      {links.map((link) => (
        <Box
          key={link.label}
          bg={link.href === currentPathName ? "rgba(66,153,225,0.2)" : ""}
        >
          <Link
            href={link.href}
            color="blue.400"
            _hover={{ color: "blue.500" }}
          >
            <Text p={2} fontSize="lg">
              {link.label}
            </Text>
          </Link>
        </Box>
      ))}
    </VStack>
  );
}
