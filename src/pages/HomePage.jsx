import { Container, SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';
import CoverContainer from '../containers/CoverContainer';
import HomeContainer from '../containers/HomeContainer';

const HomePage = () => {
  return (
    <Container mb={20} pt={[20,20,20]} maxW="container.xl">
      <SimpleGrid columns={[1,2,2]} spacingX="20px" spacingY="20px">
        <Box>
            <HomeContainer />
        </Box>
        <Box>
            <CoverContainer />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
