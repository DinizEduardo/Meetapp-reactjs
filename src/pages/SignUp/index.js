import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function SignUp() {
  return (
    <form>
      <img src={Logo} alt="Meetapp" />
      <input type="text" placeholder="Nome completo" />
      <input type="text" placeholder="Digite seu e-mail" />
      <input type="text" placeholder="Sua senha" />
      <button type="button">Entrar</button>
      <Link to="/">Já tenho conta</Link>
    </form>
  );
}
