import React from 'react';

import { MdAddCircle, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <nav>
          <h2>Meus meetups</h2>
          <button type="button">
            <MdAddCircle size={22} color="#fff" />
            Novo meetup
          </button>
        </nav>
        <Link to="/details">
          <Meetup>
            <p>Meetup de React Native</p>
            <div>
              <p>24 de Junho, às 20h</p>
              <MdKeyboardArrowRight size={22} color="#fff" />
            </div>
          </Meetup>
        </Link>
        <Link to="/details">
          <Meetup>
            <p>Meetup de React Native</p>
            <div>
              <p>24 de Junho, às 20h</p>
              <MdKeyboardArrowRight size={22} color="#fff" />
            </div>
          </Meetup>
        </Link>
        <Link to="/details">
          <Meetup>
            <p>Meetup de React Native</p>
            <div>
              <p>24 de Junho, às 20h</p>
              <MdKeyboardArrowRight size={22} color="#fff" />
            </div>
          </Meetup>
        </Link>
        <Link to="/details">
          <Meetup>
            <p>Meetup de React Native</p>
            <div>
              <p>24 de Junho, às 20h</p>
              <MdKeyboardArrowRight size={22} color="#fff" />
            </div>
          </Meetup>
        </Link>
        <Link to="/details">
          <Meetup>
            <p>Meetup de React Native</p>
            <div>
              <p>24 de Junho, às 20h</p>
              <MdKeyboardArrowRight size={22} color="#fff" />
            </div>
          </Meetup>
        </Link>
      </Content>
    </Container>
  );
}
