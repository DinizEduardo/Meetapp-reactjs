import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdDeleteForever, MdEdit, MdLocationOn, MdEvent } from 'react-icons/md';
import { format, isBefore, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { Container, MeetupHeader, DeleteButton, EditButton } from './styles';
import api from '../../services/api';
import history from '../../services/history';
// banner-teste.png
export default function Details({ match }) {
  const [detail, setDetail] = useState({});
  const idUser = useSelector(state => state.user.profile.id);
  useEffect(() => {
    async function loadMeetup() {
      const meetupId = decodeURIComponent(match.params.id);
      const response = await api.get(`/meetups/${meetupId}`);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const formatIso = parseISO(response.data.date);
      const compareDate = utcToZonedTime(formatIso, timezone);

      const time = format(formatIso, "dd 'de' MMMM', às 'HH'h'", {
        locale: pt,
      });
      const past =
        isBefore(compareDate, new Date()) || response.data.User.id !== idUser;
      const { url } = response.data.File;
      setDetail({ ...response.data, time, past, url });
    }

    loadMeetup();
  }, [idUser, match.params.id]);

  async function handleDelete(id) {
    await api.delete(`/meetups/${id}`);
    history.push('/');
  }

  return (
    <Container>
      <MeetupHeader>
        <h2>{detail.title}</h2>
        <div>
          {!detail.past ? (
            <>
              <EditButton
                to={`/meetup/${detail.id}`}
                key={detail.id}
                type="button"
              >
                <MdEdit size={22} color="#fff" />
                Editar
              </EditButton>
              <DeleteButton
                type="button"
                onClick={() => handleDelete(detail.id)}
              >
                <MdDeleteForever size={22} color="#fff" />
                Cancelar
              </DeleteButton>
            </>
          ) : null}
        </div>
      </MeetupHeader>

      <img src={detail.url} alt="" />

      <p>{detail.description}</p>

      <span>
        <MdEvent size={18} color="#999" />
        {detail.time}
        <MdLocationOn size={18} color="#999" />
        {detail.location}
      </span>
    </Container>
  );
}
