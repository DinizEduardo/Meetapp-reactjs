import React, { useEffect, useState } from 'react';

import {
  MdAddCircle,
  MdKeyboardArrowRight,
  MdArrowForward,
  MdArrowBack,
} from 'react-icons/md';
import { format, isBefore, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { Link } from 'react-router-dom';
import { Container, Content, Meetup } from './styles';

import api from '../../services/api';

export default function Dashboard() {
  const [meetup, setmeetup] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups/user', {
        params: { page },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.tron.log(response.data);
      const data = response.data.map(m => {
        const formatIso = parseISO(m.date);
        const compareDate = utcToZonedTime(formatIso, timezone);
        return {
          time: format(formatIso, "dd 'de' MMMM', às 'HH'h'", { locale: pt }),
          past: isBefore(compareDate, new Date()),
          title: m.title,
          id: m.id,
        };
      });
      setmeetup(data);
    }

    loadMeetups();
  }, [page]);

  function handlePrevPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  function handleNextPage() {
    if (meetup.length === 10) {
      setPage(page + 1);
    }
  }
  return (
    <Container>
      <Content>
        <nav>
          <h2>Meus meetups</h2>
          <Link to="/meetup">
            <button type="button">
              <MdAddCircle size={22} color="#fff" />
              Novo meetup
            </button>
          </Link>
        </nav>
        {meetup.length === 0 && page === 1 ? (
          <Link to="/meetup">
            <Meetup>
              <p>Você não está organizando nenhum meetup</p>
              <div>
                <p>Crie um agora mesmo</p>
                <MdKeyboardArrowRight size={22} color="#fff" />
              </div>
            </Meetup>
          </Link>
        ) : (
          <ul>
            <li>
              <MdArrowBack size={22} color="#fff" onClick={handlePrevPage} />
            </li>
            <li>Pagina {page}</li>
            <li>
              <MdArrowForward
                size={22}
                color="#fff"
                onClick={handleNextPage}
                disabled={meetup.length !== 10 ? 'true' : 'false'}
              />
            </li>
          </ul>
        )}
        {meetup.map(m => (
          <Link to={`/details/${m.id}`} key={m.id}>
            <Meetup past={m.past}>
              <p>{m.title}</p>
              <div>
                <p>{m.time}</p>
                <MdKeyboardArrowRight size={22} color="#fff" />
              </div>
            </Meetup>
          </Link>
        ))}
      </Content>
    </Container>
  );
}
