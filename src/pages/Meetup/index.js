import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdAddCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';
import { parseISO, isBefore } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Container, DateLocation } from './styles';

import FileInput from './FileInput';
import DatePicker from './DatePicker';

import history from '../../services/history';
import api from '../../services/api';

export default function Meetup({ match }) {
  const [meetupId] = useState(match.params.id);
  const [update, setUpdate] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const idUser = useSelector(state => state.user.profile.id);
  const [meetup, setMeetup] = useState({
    title: '',
    banner_id: 0,
    description: '',
    date: new Date(),
    location: '',
  });

  useEffect(() => {
    async function loadMeetup() {
      if (meetupId) {
        const response = await api.get(`/meetups/${meetupId}`);

        const data = {
          ...response.data,
          url: response.data.File.url,
          imageId: response.data.File.id,
        };
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatIso = parseISO(data.date);
        const compareDate = utcToZonedTime(formatIso, timezone);
        if (isBefore(compareDate, new Date())) {
          toast.error('Não é possivel editar meetups que já aconteceram');
          history.push('/');
        }
        console.tron.log(data);
        if (data.User.id !== idUser) {
          toast.error('Você só pode editar meetups criados por você');
          history.push('/');
        }

        setDescription(data.description);
        setMeetup(data);
        setUpdate(true);
        setDate(parseISO(data.date));
      }
    }

    loadMeetup();
  }, [idUser, meetupId]);

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
    if (meetupId && update) {
      await api.put(`meetups/${meetupId}`, data);

      toast.success('Meetup atualizado com sucesso');
      history.push('/dashboard');
    } else {
      await api.post('meetups', data);

      toast.success('Meetup cadastrado com sucesso');

      history.push('/dashboard');
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={meetup}>
        <FileInput name="id_file" image={meetup.url} value={meetup.imageId} />

        <Input name="title" type="text" placeholder="Titulo do meetup" />
        <Textarea
          name="description"
          rows={5}
          onChange={e => {
            setDescription(e.value);
          }}
          value={description}
          placeholder="Descrição completa"
        />
        <DateLocation>
          <DatePicker name="date" value={date} />
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
