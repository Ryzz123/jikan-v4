import { FormControl, Input, HStack, Icon } from '@chakra-ui/react';
import React, {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const FormAnime = ({formAnime}) => {
    const [form, setForm] = useState("");

    const changeHandler = e => {
        setForm(e.target.value);
    }

    const onclickHandler = () => {
        formAnime(form);
        setForm("");
    }

  return (
    <FormControl p={3}>
      <HStack spacing={4} justifyContent="center">
        <Input
          borderRadius={'6px'}
          width={'60%'}
          size="sm"
          type="text"
          value={form}
          placeholder="Cari anime yang kamu mau......."
          onChange={changeHandler}
        />
        <Icon onClick={onclickHandler} cursor={'pointer'} fontSize={'xl'} as={AiOutlineSearch} />
      </HStack>
    </FormControl>
  );
};

export default FormAnime;
