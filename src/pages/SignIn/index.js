import React from 'react';

// import { Container } from './styles';

import Logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <form>
      <img src={Logo} alt="Meetapp" />
      <input type="text" placeholder="Digite seu e-mail" />
      <input type="text" placeholder="Sua senha" />
      <button type="button">Entrar</button>
      <a href="">Criar conta grátis</a>
    </form>
  );
}
