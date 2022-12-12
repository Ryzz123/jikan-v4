import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdSettings, MdCheckCircle } from 'react-icons/md';
import React from 'react';

const ListCover = () => {
  return (
    <List mt={4} fontFamily={'Inter'} spacing={3}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="blue.500" />
        Ini hanya fake web anime search
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="blue.500" />
        Menggunakan library chakra-ui
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="blue.500" />
        Menggunakan API jikan v4
      </ListItem>
      {/* You can also use custom icons from react-icons */}
      <ListItem>
        <ListIcon as={MdSettings} color="blue.500" />
        Web ini menggunakan teknologi react
      </ListItem>
    </List>
  );
};

export default ListCover;
