import React from 'react';

import { MdAddCircle } from 'react-icons/md';

import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, DateLocation } from './styles';

import FileInput from './FileInput';
import DatePicker from './DatePicker';

import history from '../../services/history';
import api from '../../services/api';

export default function Meetup() {
  const schema = Yup.object().shape({
    title: Yup.string().required('Preencha um titulo para o meetup'),
    description: Yup.string().required('Preencha uma descrição para o meetup'),
    location: Yup.string().required('Preencha o local do meetup'),
    date: Yup.date('Selecione uma data valida').required(
      'Preencha a data nesse formato: 01/01/2019 01:00'
    ),
    id_file: Yup.number().required('Selecione um banner'),
  });

  async function handleSubmit(data) {
    console.tron.log(data);
    const response = await api.post('meetups', data);

    console.tron.log(response);

    history.push('/dashboard');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <FileInput name="id_file" />

        <Input name="title" type="text" placeholder="Titulo do meetup" />
        <Textarea
          name="description"
          cols="50"
          rows="10"
          placeholder="Descrição completa"
        />
        <DateLocation>
          <DatePicker name="date" />
          <Input name="location" type="text" placeholder="Localização" />
        </DateLocation>
        <button type="submit">
          <MdAddCircle size={22} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
