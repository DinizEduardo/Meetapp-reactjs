import React from 'react';

import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/Auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(6)
      .required('Preencha seu nome completo'),
    email: Yup.string()
      .email('Digite um e-mail valido')
      .required('Preencha o seu e-mail'),
    password: Yup.string()
      .min(6)
      .required('Preencha a sua senha'),
  });

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <img src={Logo} alt="Meetapp" />
      <Input name="name" type="text" placeholder="Nome completo" />
      <Input name="email" type="email" placeholder="Digite seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha" />
      <button type="submit">Entrar</button>
      <Link to="/">Já tenho conta</Link>
    </Form>
  );
}
