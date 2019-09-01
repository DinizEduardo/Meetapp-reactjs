import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { updateProfileSuccess } from './actions';

export function* updateProfileRequest({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.data);
    if (response.data.id) {
      toast.success('Usuario atualizado com sucesso');
      yield put(updateProfileSuccess(response.data));
    } else {
      toast.error(
        'Erro inesperado. Senha atual incorreta ou e-mail já utilizado'
      );
    }
  } catch (error) {
    toast.error('Erro inesperado.');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
