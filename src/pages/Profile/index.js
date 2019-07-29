import React from 'react';

import { MdAddCircle } from 'react-icons/md';
import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <form>
        <input type="text" placeholder="Seu nome completo" />
        <input type="text" placeholder="E-mail" />
        <hr />
        <input type="password" placeholder="Senha atual" />
        <input type="password" placeholder="Nova senha" />
        <input type="password" placeholder="Confirmação de senha" />
        <button type="button">
          <MdAddCircle size={22} color="#fff" /> Salvar perfil
        </button>
      </form>
    </Container>
  );
}
