import actions from './actions';

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_APP_STATE:
      return initialState;
    default:
      return state;
  }
}