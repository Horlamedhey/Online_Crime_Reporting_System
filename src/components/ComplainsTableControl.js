"use client";
import {
  Box,
  Flex,
  MenuButton,
  Button,
  Menu,
  MenuItemOption,
  MenuList,
  MenuDivider,
  MenuOptionGroup,
  Checkbox,
} from "@chakra-ui/react";

import {
  natureOfCrime,
  badge as badgeData,
  station,
  tableHeaders as sortOptions,
} from "@/data.js";
import Searchbar from "./Searchbar";
import React, { useEffect, useState } from "react";

export default function ComplainsTableControl({ setTableState }) {
  const [filter, setFilter] = useState("");
  const [parsedFilter, setParsedFilter] = useState(null);
  const [sort, setSort] = useState("");
  const [sortLabel, setSortLabel] = useState("");
  const [descending, setDescending] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [sortLoading, setSortLoading] = useState(false);

  const statuses = Object.entries(badgeData).map(([key, val]) => ({
    label: val.label,
    val: key,
  }));

  const noc = natureOfCrime.map((v) => ({ label: v, val: v }));
  const stationData = station.map((v) => ({
    label: `#${v.stationId}`,
    val: v.stationId,
  }));

  const filters = [
    {
      title: "Status",
      items: statuses,
    },
    {
      title: "Nature of crime ",
      items: noc,
    },
    {
      title: "Station Id",
      items: stationData,
    },
  ];
  const searchCrime = (query) => {
    setSearchLoading(true);
    console.log(query);
    setTimeout(() => {
      setSearchLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (filter) {
      setFilterLoading(true);
      console.log("hi");
      setTimeout(() => {
        setFilterLoading(false);
      }, 3000);
    }
  }, [filter]);

  useEffect(() => {
    if (sort) {
      setSortLoading(true);
      console.log("query");
      setTimeout(() => {
        setSortLoading(false);
      }, 3000);
    }
  }, [sort, descending]);

  useEffect(() => {
    if (sortLoading || searchLoading || filterLoading) {
      setTableState(true);
    } else {
      setTableState(false);
    }
  }, [sortLoading, searchLoading, filterLoading, setTableState]);

  return (
    <Flex
      justifyContent="space-between"
      p={2}
      alignItems="center"
    >
      <Box w="50%">
        <Searchbar
          isLoading={searchLoading}
          searchCrime={searchCrime}
        />
      </Box>
      <Flex
        pr={1}
        gap="20px"
      >
        <Box>
          <Menu isLazy>
            <MenuButton
              as={Button}
              colorScheme="blue"
              isLoading={filterLoading}
            >
              Filter by
              {parsedFilter &&
                `: ${parsedFilter.group} - ${parsedFilter.item.label}`}
            </MenuButton>
            <MenuList
              overflow="auto"
              maxH="60vh"
            >
              {filters.map((u, i) => (
                <React.Fragment key={u.title}>
                  <MenuOptionGroup
                    type="radio"
                    value={filter}
                    onChange={(currFilter) => {
                      setFilter(currFilter);
                      setParsedFilter(JSON.parse(currFilter));
                    }}
                    title={u.title}
                  >
                    {u.items.map((v) => (
                      <MenuItemOption
                        key={v.label}
                        value={JSON.stringify({ group: u.title, item: v })}
                      >
                        {v.label}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                  {i !== filters.length - 1 && <MenuDivider />}
                </React.Fragment>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Flex gap={2}>
          <Menu isLazy>
            <MenuButton
              as={Button}
              colorScheme="blue"
              isLoading={sortLoading}
            >
              Sort by{sortLabel && `: ${sortLabel}`}
            </MenuButton>
            <MenuList
              overflow="auto"
              maxH="60vh"
            >
              <MenuOptionGroup
                type="radio"
                value={sort}
                onChange={setSort}
                title="Sort"
              >
                {sortOptions.map((sortOption, i) => (
                  <MenuItemOption
                    key={sortOption.title}
                    onClick={() => setSortLabel(sortOptions[i].title)}
                    value={sortOption.value}
                  >
                    {sortOption.title}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>

          <Checkbox
            value={descending}
            onChange={() => setDescending(!descending)}
          >
            Z - A
          </Checkbox>
        </Flex>
      </Flex>
    </Flex>
  );
}
