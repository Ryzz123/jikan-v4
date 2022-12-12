import { Container, SimpleGrid, Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AnimeForm from '../containers/AnimeForm';
import AnimeHome from '../containers/AnimeHome';

const AnimePage = () => {
    const [list, setList] = useState('');
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        const getAnime = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${list}`)
                setAnime(response.data.data)
            } catch(err) {
                console.log(err)
            }
        }
        getAnime();
    }, [list])

    const addHandler = (e) => {
        setList(e)
    }

  return (
    <Container mb={20} pt={[16, 20, 20]} maxW="container.xl">
      <SimpleGrid columns={[1, 2, 2]} spacingX="20px" spacingY="20px">
        <Box>
            <AnimeForm form={addHandler} />
        </Box>
        <Box>
          <AnimeHome anime={anime} />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default AnimePage;
