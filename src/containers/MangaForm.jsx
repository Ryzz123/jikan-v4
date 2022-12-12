import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import FormManga from '../components/FormManga';

const MangaForm = ({formManga}) => {
  const textAnime = useColorModeValue('blue.700', 'blue.400');
  const color = useColorModeValue('black', 'gray.300');

  return (
    <Box textAlign={['center', 'start', 'start']}>
      <FormManga formManga={formManga} />
      <Heading
        color={textAnime}
        fontFamily="Inter"
        fontSize={['2xl', '4xl', '6xl']}
        as="h3"
      >
        Search Your Manga
      </Heading>
      <Text
        as="p"
        fontSize={['sm', 'md', 'lg']}
        fontFamily="Inter"
        color={color}
      >
        Kamu bisa mencari manga yang kamu mau disini, jika manga yang kamu cari
        tidak ada,bisa ulang cari.
      </Text>
    </Box>
  );
};

export default MangaForm;
