import { Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";
export default function Searchbar({ searchCrime, isLoading }) {
  /*this is created to search for a rime and return and get the state of the input field using props */
  const [query, setQuery] = useState("");

  return (
    <Flex alignItems="center" gap="10px" w="100%">
      <Input
        placeholder="Search crime status"
        size="lg"
        color="white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        colorScheme="blue"
        type="button"
        onClick={() => searchCrime(query)}
        isLoading={isLoading}
        isDisabled={!query}
        loadingText="Searching"
      >
        Search
      </Button>
    </Flex>
  );
}
