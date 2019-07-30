import { all, put, call, takeLatest } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

function* signIn({ payload }) {
  const { email, password } = payload;
  console.tron.log({ email, password });
  const response = yield call(api.post, 'login', {
    email,
    password,
  });
  const { token, user } = response.data;

  if (!user) {
    console.tron.log('usuario invalido');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
