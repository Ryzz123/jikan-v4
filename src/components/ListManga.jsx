import React from 'react';
import {
  Card,
  CardBody,
  Box,
  Heading,
  Stack,
  StackDivider,
  Text,
  Button,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Loader.css'

const ListManga = ({ manga, loading }) => {
  const backGround = useColorModeValue('white', '#001E3C');
  return (
    <Card
      bg={backGround}
      height={['auto', 'auto', '100vh']}
      overflowY={['auto', 'auto', 'scroll']}
    >
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {loading ? (
            <Box display='flex' justifyContent='center'>
              <Box className="dots"></Box>
            </Box>
          ) : (
            <>
              {manga.map(mangaa => {
                return (
                  <Box key={''}>
                    <Heading
                      display={'flex'}
                      alignItems="center"
                      size="xs"
                      textTransform="uppercase"
                    >
                      <Avatar src={mangaa.images.jpg.image_url} />
                      <Text as={'span'} p="4">
                        {mangaa.title}
                      </Text>
                    </Heading>
                    <Box>
                      <Text>{mangaa.title_japanese}</Text>
                    </Box>
                    <Button width="full" bg="blue.600" size="sm" mt={2}>
                      <Link
                        style={{ color: 'white', width: '100%' }}
                        to={`/manga/${mangaa.mal_id}`}
                      >
                        DETAIL
                      </Link>
                    </Button>
                  </Box>
                );
              })}
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ListManga;
