const actions = {
  RESET_CONTACTS_STATE: 'RESET_CONTACTS_STATE',
  resetContactsState: () => ({ type: actions.RESET_CONTACTS_STATE }),

  CHANGE_MODE: 'CHANGE_MODE',
  changeMode: (mode) => ({ type: actions.CHANGE_MODE, payload: { mode }}),

  LIST_REQUEST: 'LIST_REQUEST',
  LIST_SUCCESS: 'LIST_SUCCESS',
  LIST_FAILURE: 'LIST_FAILURE',
  list: () => {
    return {
      type: actions.LIST_REQUEST,
    };
  },

  GET_REQUEST: 'GET_REQUEST',
  GET_SUCCESS: 'GET_SUCCESS',
  GET_FAILURE: 'GET_FAILURE',
  get: (id) => {
    return {
      type: actions.GET_REQUEST,
      payload: { id },
    };
  },

  CREATEEDIT_REQUEST: 'CREATEEDIT_REQUEST',
  CREATEEDIT_SUCCESS: 'CREATEEDIT_SUCCESS',
  CREATEEDIT_FAILURE: 'CREATEEDIT_FAILURE',
  createEdit: (data, setErrors, setSubmitting) => {
    return {
      type: actions.CREATEEDIT_REQUEST,
      payload: { data, setErrors, setSubmitting }
    };
  },

  DELETE_REQUEST: 'DELETE_REQUEST',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAILURE: 'DELETE_FAILURE',
  delete: (id) => {
    return {
      type: actions.DELETE_REQUEST,
      payload: { id },
    };
  },
};

export default actions;