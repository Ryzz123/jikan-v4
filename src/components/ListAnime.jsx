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

const ListAnime = ({ anime }) => {
    const backGround = useColorModeValue("white","#001E3C")
  return (
    <Card bg={backGround} height={['auto','auto','100vh']} overflowY={['auto','auto','scroll']}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {anime.map(anim => {
            return (
              <Box key={anim.mal_id}>
                <Heading display={'flex'} alignItems="center" size="xs" textTransform="uppercase">
                  <Avatar src={anim.images.webp.image_url} />
                  <Text as={'span'} p="4">
                    {anim.title}
                  </Text>
                </Heading>
                <Box>
                    <Text variant='outline' colorScheme={anim.source === 'Manga' ? 'teal' : 'purple'}>
                        {anim.title_japanese}
                    </Text>
                </Box>
                <Button width='full' bg="blue.600" size="sm" mt={2}>
                  <Link style={{color: 'white', width: '100%'}} to={`/anime/${anim.mal_id}`}>DETAIL</Link>
                </Button>
              </Box>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ListAnime;
