import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {

    const color = useColorModeValue("black","gray.300")
    const bgNav = useColorModeValue("#FFF","#001E3C")

  return (
    <Container  maxW="container.xl">
      <Box zIndex={999} position={'fixed'} width="full" bg={bgNav} left={0} bottom='0' p={6}>
        <Text
          color={color}
          textAlign="center"
          fontFamily="Inter"
          fontStyle="italic"
        >
          &copy; Copyright By Ryzz
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
