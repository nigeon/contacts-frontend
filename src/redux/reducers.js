import { combineReducers } from 'redux';
import App from './app/reducer';
import Contact from './contact/reducer';

export default combineReducers({
  App,
  Contact,
});
