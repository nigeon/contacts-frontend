import actions from './actions';

const initialState = {
  mode: 'detail', //detail, edit or create
  list: [],
  detail: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_CONTACTS_STATE:
      return initialState;
    case actions.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload.mode,
      };
    case actions.LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case actions.LIST_FAILURE:
      return state;
    case actions.GET_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    case actions.CREATEEDIT_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    case actions.DELETE_SUCCESS:
      return { ...state, detail: [] };
    default:
      return state;
  }
}