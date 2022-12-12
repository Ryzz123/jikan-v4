import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardCoverHome from '../components/CardCoverHome';
import CardMangaById from '../components/CardMangaById';
import './../components/Loader.css';
import TableMangaById from '../components/TableMangaById';

const MangaPageById = () => {
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(true);

  const manga_params = useParams();
  const bacKgroundLoad = useColorModeValue('blue.500', 'white');

  useEffect(() => {
    window.scrollTo(0, 0); // fungsi untuk scroll ke atas halaman
    const getMangaById = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/manga/${manga_params.manga_id}`
        );
        setManga(response.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (err) {
        console.log(err);
      }
    };
    getMangaById();
  }, [manga_params.manga_id]);

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
            <CardMangaById manga={manga} />
          </Box>
          <Box>
            <TableMangaById manga={manga} />
            <CardCoverHome />
          </Box>
        </SimpleGrid>
      )}
    </Container>
  );
};

export default MangaPageById;
