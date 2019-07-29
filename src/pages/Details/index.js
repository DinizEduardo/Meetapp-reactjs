import React from 'react';

import { MdDeleteForever, MdEdit, MdLocationOn, MdEvent } from 'react-icons/md';
import { Container, MeetupHeader, DeleteButton, EditButton } from './styles';
import banner from '../../assets/banner-teste.png';
// banner-teste.png
export default function Details() {
  return (
    <Container>
      <MeetupHeader>
        <h2>Meeup de React Native</h2>
        <div>
          <EditButton type="button">
            <MdEdit size={22} color="#fff" />
            Editar
          </EditButton>
          <DeleteButton type="button">
            <MdDeleteForever size={22} color="#fff" />
            Cancelar
          </DeleteButton>
        </div>
      </MeetupHeader>

      <img src={banner} alt="" />

      <p>
        O meetup de React Native é um evento que reune a comunidade
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. Todos são convidados.
        <br />
        <br />
        Caso queira participar como palestrante do meeup envie um e-mail para
        organizacao@meetuprn.com.br.
      </p>

      <span>
        <MdEvent size={18} color="#999" />
        24 de Junho, às 20h
        <MdLocationOn size={18} color="#999" />
        Rua Guilherme Gembala, 260
      </span>
    </Container>
  );
}
