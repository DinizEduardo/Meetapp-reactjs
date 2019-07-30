import React from 'react';

// import { Container } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';

import { signInRequest } from '../../store/modules/Auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSignIn({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form schema={schema} onSubmit={handleSignIn}>
      <img src={Logo} alt="Meetapp" />
      <Input name="email" type="text" placeholder="Digite seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha" />
      <button type="submit">Entrar</button>
      <Link to="/register">Criar conta grátis</Link>
    </Form>
  );
}
