import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const CardHome = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md" fontFamily='Inter'>Jikan Anime V4</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" color='blue.500'>
              GENRE
            </Heading>
            <Text pt="2" fontSize="sm" fontFamily='Inter'>
              Jikan anime didukung banyak film anime dari berbagai genre.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" color='blue.500'>
              Episode
            </Heading>
            <Text pt="2" fontFamily='Inter' fontSize="sm">
              Memiliki episode yang lengkap.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" color='blue.500'>
              responsive
            </Heading>
            <Text pt="2" fontSize="sm" fontFamily='Inter'>
              Jikan anime responsive di berbagai device.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardHome;
