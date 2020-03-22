import { all, takeLatest, put, call } from 'redux-saga/effects';
import actions from './actions';
import Api from '../../helpers/api';

export function* list() {
  yield takeLatest(actions.LIST_REQUEST, function*(){
    const result = yield call(Api.listContacts);

    if (result.error) {
      yield put({ type: actions.LIST_FAILURE, payload: result.error });
    } else {
      yield put({ type: actions.LIST_SUCCESS, payload: result })
    }

  });
}

export function* get() {
  yield takeLatest(actions.GET_REQUEST, function*({ payload } ){
    const result = yield call(Api.getContact, payload.id);

    if (result.error) {
      yield put({ type: actions.GET_FAILURE, payload: result.error });
    } else {
      yield put({ type: actions.GET_SUCCESS, payload: result })
    }

  });
}

export function* deleteContact() {
  yield takeLatest(actions.DELETE_REQUEST, function*({ payload } ){
    const result = yield call(Api.deleteContact, payload.id);

    if (result.error) {
      yield put({ type: actions.DELETE_FAILURE, payload: result.error });
    } else {
      yield put({ type: actions.DELETE_SUCCESS, payload: result })
      yield put({ type: actions.LIST_REQUEST });
    }

  });
}

export default function* rootSaga() {
  yield all([
    list(),
    get(),
    deleteContact(),
  ]);
}