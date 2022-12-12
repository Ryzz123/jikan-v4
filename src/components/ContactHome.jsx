import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Spinner,
} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const ContactHome = () => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ status: '', message: '' });
  const [spinner, setSpinner] = useState(false);
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const pesan = useRef();

  const sendEmail = e => {
    e.preventDefault();
    setSpinner(true)
    if (
      name.current.value === '' ||
      email.current.value === '' ||
      pesan.current.value === ''
    ) {
      setAlert(true);
      setAlertMessage({
        status: 'error',
        message: 'Form tidak boleh kosong!',
      });
      setSpinner(false)
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      emailjs
        .sendForm(
          'service_6abst0t',
          'template_ci089wa',
          form.current,
          '8SjxVQUzQLRu2WllW'
        )
        .then(
          result => {
            console.log(result.text);
            setAlert(true);
            setAlertMessage({
              status: 'success',
              message: 'Email berhasil dikirim',
            });
            setSpinner(false)
            setTimeout(() => {
              setAlert(false);
            }, 3000);
          },
          error => {
            console.log(error.text);
            setAlert(true);
            setAlertMessage({
              status: 'error',
              message: 'Email gagal dikirim',
            });
            setSpinner(false)
            setTimeout(() => {
              setAlert(false);
            }, 3000);
          }
        );
    }
    e.target.reset();
  };

  return (
    <FormControl mt={4}>
      {alert ? (
        <Alert fontFamily="Inter" status={alertMessage.status}>
          <AlertIcon />
          {alertMessage.message}
        </Alert>
      ) : (
        ''
      )}
      <form ref={form} onSubmit={sendEmail}>
        <FormLabel>Nama</FormLabel>
        <Input
          ref={name}
          name="to_name"
          type="text"
          placeholder="Masukan Nama"
        />
        <FormLabel>Email</FormLabel>
        <Input
          ref={email}
          name="from_name"
          type="email"
          placeholder="Masukan email"
        />
        <FormLabel>Pesan</FormLabel>
        <Textarea ref={pesan} name="message" placeholder="Masukan Pesan" />
        <Button width="full" color="white" bg="blue.500" mt={2} type="submit">
          {spinner ? <Spinner /> : 'KIRIM'}
        </Button>
      </form>
    </FormControl>
  );
};

export default ContactHome;
