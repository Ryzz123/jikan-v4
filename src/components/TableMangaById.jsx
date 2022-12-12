import {
    Table,
    Thead,
    Tr,
    Td,
    Th,
    Tbody,
  } from '@chakra-ui/react';
  import React from 'react';
  
  const TableMangaById = ({manga}) => {
    return (
        <Table variant='striped' colorScheme='blue' size="sm">
          <Thead>
            <Tr>
              <Th>Popularity</Th>
              <Th>Rank</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontFamily='Inter'>{manga.popularity ? manga.popularity : "Null"}</Td>
              <Td fontFamily='Inter'>{manga.rank ? manga.rank : "Null"}</Td>
              <Td fontFamily='Inter' isNumeric>{manga.score ? manga.score : "Null"}</Td>
            </Tr>
          </Tbody>
        </Table>
    );
  };
  
  export default TableMangaById;
  