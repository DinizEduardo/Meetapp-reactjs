import React from 'react';

import { MdCameraAlt, MdAddCircle } from 'react-icons/md';
import { Container, ImageSpace } from './styles';

export default function Meetup() {
  return (
    <Container>
      <ImageSpace for="file">
        <MdCameraAlt size={36} color="#777" />
        Selecionar imagem
      </ImageSpace>
      <input type="file" id="file" name="file" hidden />
      <input type="text" placeholder="Titulo do meetup" />
      <textarea cols="50" rows="10" placeholder="Descrição completa" />
      <input type="text" placeholder="Data do Meetup" />
      <input type="text" placeholder="Localização" />
      <button type="button">
        <MdAddCircle size={22} color="#fff" />
        Salvar meetup
      </button>
    </Container>
  );
}
