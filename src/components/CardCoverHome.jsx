import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Button,
  Text,
  CardFooter,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CardCoverHome = () => {
  const bgImage = useColorModeValue("https://th.bing.com/th/id/R.1a8cb40846975a48063f51ac171be156?rik=qGMMepOCgLfIxw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fagHMSaj.jpg&ehk=LFn%2f453mdZDHC7Wvo4M7mxvoSfo5m52KoX9FsagmcBM%3d&risl=&pid=ImgRaw&r=0","https://wallpapercave.com/wp/wp5237302.jpg")
  const mangaBg = useColorModeValue("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8aa52da4-91f9-4905-abe2-583c5c3e3c66/d6oggxt-bc48c6bc-9179-45c0-99f2-ca8f54a9fbb9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84YWE1MmRhNC05MWY5LTQ5MDUtYWJlMi01ODNjNWMzZTNjNjYvZDZvZ2d4dC1iYzQ4YzZiYy05MTc5LTQ1YzAtOTlmMi1jYThmNTRhOWZiYjkucG5nIn1dXX0.Ie6wsm4YDAjTq5ui2VsfnvBwk7scO1seDX9GPSzP6XU",'https://submarinechannel.com/wp-content/uploads/2019/03/Best-Shonen-Jump-Manga.jpg')

  return (
   <>
    <Card
      _after={{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        background: 'rgba(0,0,0,0.7)',
      }}
      backgroundSize="cover"
      backgroundImage={`url(${bgImage})`}
      mt={4}
      align="center"
    >
      <CardHeader position="relative" zIndex={2}>
        <Heading size="md" fontFamily="Inter" color="blue.500">
          Search Anime Favorite Mu
        </Heading>
      </CardHeader>
      <CardBody position="relative" zIndex={2}>
        <Text color="white">
          Cari berbagai anime favoritemu disini, dengan jikan anime v4
        </Text>
      </CardBody>
      <CardFooter position="relative" zIndex={2}>
        <Button bg="blue.600" color="white">
          <Link to="/anime">ANIME</Link>
        </Button>
      </CardFooter>
    </Card>
    <Card
      _after={{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        background: 'rgba(0,0,0,0.7)',
      }}
      backgroundSize="cover"
      backgroundImage={`url(${mangaBg})`}
      mt={4}
      align="center"
    >
      <CardHeader position="relative" zIndex={2}>
        <Heading size="md" fontFamily="Inter" color="blue.500">
          Search Manga Favorite Mu
        </Heading>
      </CardHeader>
      <CardBody position="relative" zIndex={2}>
        <Text color="white">
          Cari berbagai manga favoritemu disini, dengan jikan anime v4
        </Text>
      </CardBody>
      <CardFooter position="relative" zIndex={2}>
        <Button bg="blue.600" color="white">
          <Link to="/manga">MANGA</Link>
        </Button>
      </CardFooter>
    </Card>
   </>
  );
};

export default CardCoverHome;
