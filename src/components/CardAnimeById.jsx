import {
  Card,
  CardHeader,
  Flex,
  Heading,
  CardBody,
  Image,
  Text,
  Avatar,
  Box,
  useColorModeValue,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';

const CardAnimeById = ({ anime }) => {
  const backGround = useColorModeValue('white', '#001E3C');

  return (
    <Card
      height={['auto', 'auto', '100vh']}
      overflowY={['auto', 'auto', 'scroll']}
      bg={backGround}
      maxW="md"
    >
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={anime.title ? anime.title : 'Null'}
              src={anime?.images?.jpg?.image_url}
            />
            <Box>
              <Heading size="sm" fontFamily="Inter">
                {anime.title ? anime.title : 'Null'}
              </Heading>
              <Text fontFamily="Inter">
                {anime.title_japanese ? anime.title_japanese : 'Null'}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontFamily="Inter">
          {anime.synopsis ? anime.synopsis : 'Anime tidak memiliki synopsis'}
        </Text>
        <Image
          objectFit="cover"
          width="full"
          src={anime?.images?.webp?.image_url}
          alt="Chakra UI"
        />
        <Button width="full" mt={2} bg="blue.500">
          <Link
            href={anime.url}
            width="full"
            style={{ color: 'white' }}
            _hover={{
              textDecoration: 'none',
            }}
          >
            LIHAT
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardAnimeById;
