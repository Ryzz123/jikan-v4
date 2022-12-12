import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
  return (
    <Container mb={20} pt={[20, 20, 20]} maxW="container.xl">
      <Box textAlign='center'>
        <Heading fontFamily="Inter" fontSize={'6xl'}>404</Heading>
        <Text fontFamily="Inter" fontSize={'2xl'}>Halaman Tidak Ditemukan</Text>
      </Box>
    </Container>
  );
};

export default NotFound;
