import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import actions from './actions';
import Api from '../../helpers/api';
import { getContactState } from './selectors';

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
      yield put({ type: actions.CHANGE_MODE, payload: { mode: 'detail' } });
    }

  });
}

export function* createEdit() {
  yield takeLatest(actions.CREATEEDIT_REQUEST, function*({ payload } ){
    const contactsState = yield select(getContactState);
    
    let result = null;
    if(contactsState.mode === 'create'){
      result = yield call(Api.createContact, payload.data);
    } else if(contactsState.mode === 'edit' && Object.keys(contactsState).length > 0){
      result = yield call(Api.updateContact, contactsState.detail.id, payload.data);
    } else {
      console.error('Wrong mode');
    }

    payload.setSubmitting(false);

    if (result.error) {
      yield put({ type: actions.CREATEEDIT_FAILURE, payload: result.error });
      payload.setErrors(Api.apiErrorsToFormik(result.error));
    } else {
      yield put({ type: actions.CREATEEDIT_SUCCESS, payload: result })
      yield put({ type: actions.LIST_REQUEST });
      yield put({ type: actions.GET_REQUEST, payload: { id: result.id } });
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
    createEdit(),
    deleteContact(),
  ]);
}