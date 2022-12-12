import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import CardCoverHome from '../components/CardCoverHome';

const HomeContainer = () => {
  const textHome = useColorModeValue('blue.700', 'blue.400');
  const color = useColorModeValue('black', 'gray.300');

  return (
    <Box textAlign={['center', 'start', 'start']}>
      <Heading
        as="h3"
        color={textHome}
        fontFamily="Inter"
        fontSize={['2xl', '4xl', '6xl']}
      >
        Jikan Anime API V4
      </Heading>
      <Text
        as="p"
        fontSize={['sm', 'md', 'lg']}
        fontFamily="Inter"
        color={color}
      >
        Cari Anime Dan Manga Favorite Kamu Di Jikan Anime, Kini Jikan Anime
        Sudah Versi 4, Kamu Juga Bisa Melihat Detail Anime Lainnya Dengan Gratis
      </Text>
      <CardCoverHome />
    </Box>
  );
};

export default HomeContainer;
