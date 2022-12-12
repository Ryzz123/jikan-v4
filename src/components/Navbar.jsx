import { Box, Container, HStack, Image, Spacer, useColorModeValue } from '@chakra-ui/react';
import logoo from '../logo.svg'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ ColorModeSwitcher }) => {
    const bgNav = useColorModeValue("#FFF","#001E3C")
    const logo = useColorModeValue("https://www.svgrepo.com/show/331489/myanimelist.svg",logoo)

  return (
    <Box width="full" bg={bgNav} zIndex={999} position="fixed">
      <Container p={4} gap={4} display="flex" maxW="container.xl">
        <Image
          width={['35px',"40px","40px"]}
          src={logo}
          alt="logo"
        />
        <HStack spacing={4}>
          <Link style={{ fontFamily: 'Inter', fontWeight: '500' }} to="/">
            Home
          </Link>
          <Link style={{ fontFamily: 'Inter',fontWeight: '500' }} to="/anime">
            Anime
          </Link>
          <Link style={{ fontFamily: 'Inter',fontWeight: '500' }} to="/manga">
            Manga
          </Link>
        </HStack>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Container>
    </Box>
  );
};

export default Navbar;
