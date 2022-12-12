import { Container, SimpleGrid, Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MangaForm from '../containers/MangaForm';
import MangaHome from '../containers/MangaHome';

const MangaPage = () => {
  const [list, setList] = useState('');
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getManga = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/manga?q=${list}`
        );
        setManga(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getManga();
  }, [list]);

  const addManga = e => {
    setList(e);
  };

  return (
    <Container mb={20} pt={[16, 20, 20]} maxW="container.xl">
      <SimpleGrid columns={[1, 2, 2]} spacingX="20px" spacingY="20px">
        <Box>
          <MangaForm formManga={addManga} />
        </Box>
        <Box>
          <MangaHome loading={loading} manga={manga} />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default MangaPage;
