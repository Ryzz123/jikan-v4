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
    Button,
    useColorModeValue,
    Link
  } from '@chakra-ui/react';
  import React from 'react';
  
  const CardMangaById = ({manga}) => {
  
      const backGround = useColorModeValue("white","#001E3C")
  
    return (
      <Card height={['auto','auto','100vh']} overflowY={['auto','auto','scroll']} bg={backGround} maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={manga.title ? manga.title : "Null"} src={manga?.images?.jpg?.image_url} />
              <Box>
                <Heading size="sm" fontFamily='Inter'>{manga.title ? manga.title : "Null"}</Heading>
                <Text fontFamily='Inter'>{manga.title_japanese ? manga.title_japanese : "Null"}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontFamily='Inter'>
           {manga.synopsis ? manga.synopsis : "manga tidak memiliki synopsis"}
          </Text>
        <Image
          objectFit="cover"
          width='full'
          src={manga?.images?.webp?.image_url}
          alt="Chakra UI"
        />
        <Button width="full" mt={2} bg="blue.500">
          <Link
            href={manga.url}
            width="full"
            _hover={{
              textDecoration: 'none',
            }}
            style={{color: 'white'}}
          >
            LIHAT
          </Link>
        </Button>
        </CardBody>
      </Card>
    );
  };
  
  export default CardMangaById;
  