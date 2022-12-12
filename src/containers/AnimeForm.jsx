import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import FormAnime from '../components/FormAnime';

const AnimeForm = ({form}) => {
  const textAnime = useColorModeValue('blue.700', 'blue.400');
  const color = useColorModeValue('black', 'gray.300');

  return (
    <Box textAlign={['center', 'start', 'start']}>
      <FormAnime formAnime={form} />
      <Heading
        color={textAnime}
        fontFamily="Inter"
        fontSize={['2xl', '4xl', '6xl']}
        as="h3"
      >
        Search Your Anime
      </Heading>
      <Text
        as="p"
        fontSize={['sm', 'md', 'lg']}
        fontFamily="Inter"
        color={color}
      >
        Kamu bisa mencari anime yang kamu mau disini, jika anime yang kamu cari
        tidak ada,bisa ulang cari.
      </Text>
    </Box>
  );
};

export default AnimeForm;
