import { all } from 'redux-saga/effects';

import Contact from './contact/saga';

export default function* rootSaga() {
	yield all([
		Contact(),
	]);
}
