import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './HomeLoader.css';

const LoadPages = () => {
  return (
    <>
      <Box className="logo-overlay"></Box>
      <Image
        className="tcf-logo"
        src="https://www.svgrepo.com/show/331489/myanimelist.svg"
        alt="Logo"
      />
      <Text as="span" className="page-state pulse"></Text>
    </>
  );
};

export default LoadPages;
