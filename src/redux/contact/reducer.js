import actions from './actions';

const initialState = {
  list: [],
  detail: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_CONTACTS_STATE:
      return initialState;
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
    case actions.CREATE_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    case actions.UPDATE_SUCCESS:
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