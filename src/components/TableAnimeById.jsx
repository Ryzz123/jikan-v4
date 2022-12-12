import {
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
} from '@chakra-ui/react';
import React from 'react';

const TableAnimeById = ({anime}) => {
  return (
      <Table variant='striped' colorScheme='blue' size="sm">
        <Thead>
          <Tr>
            <Th>Popularity</Th>
            <Th>Rank</Th>
            <Th isNumeric>Year</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontFamily='Inter'>{anime.popularity ? anime.popularity : "Null"}</Td>
            <Td fontFamily='Inter'>{anime.rank ? anime.rank : "Null"}</Td>
            <Td fontFamily='Inter' isNumeric>{anime.year ? anime.year : "Null"}</Td>
          </Tr>
        </Tbody>
      </Table>
  );
};

export default TableAnimeById;
