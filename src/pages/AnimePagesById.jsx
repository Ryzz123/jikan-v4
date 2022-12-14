import { Box, Container, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardAnimeById from '../components/CardAnimeById';
import CardCoverHome from '../components/CardCoverHome';
import './../components/Loader.css';
import TableAnimeById from '../components/TableAnimeById';

const AnimePagesById = () => {
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);

  const anime_params = useParams();

  const bacKgroundLoad = useColorModeValue('blue.500','white')

  useEffect(() => {
    window.scrollTo(0, 0); // fungsi untuk scroll ke atas halaman
    const getAnimeById = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${anime_params.anime_id}`
        );
        setAnime(response.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 800)
      } catch (err) {
        console.log(err);
      }
    };
    getAnimeById();
  }, [anime_params.anime_id]);

  return (
    <Container mb={20} pt={[20, 20, 20]} maxW="container.xl">
      {loading ? (
        <Box display="flex" justifyContent="center">
          <Box
            color={bacKgroundLoad}
            background={bacKgroundLoad}
            className="dots"
          ></Box>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 2]} spacingX="20px" spacingY="20px">
          <Box>
            <CardAnimeById anime={anime} />
          </Box>
          <Box>
            <TableAnimeById anime={anime} />
            <CardCoverHome />
          </Box>
        </SimpleGrid>
      )}
    </Container>
  );
};

export default AnimePagesById;
