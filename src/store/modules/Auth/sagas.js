import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, '/login', {
      email,
      password,
    });
    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Usuario invalido');
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    toast.success('Usuario cadastrado com sucesso');
    history.push('/');
  } catch (error) {
    toast.error('Não foi possivel realizar o cadastro.');
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
