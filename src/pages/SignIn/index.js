import React from 'react';

// import { Container } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <form>
      <img src={Logo} alt="Meetapp" />
      <input type="text" placeholder="Digite seu e-mail" />
      <input type="password" placeholder="Sua senha" />
      <button type="button">Entrar</button>
      <Link to="/register">Criar conta grátis</Link>
    </form>
  );
}
