import { all } from 'redux-saga/effects';

import auth from './Auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, user]);
}
