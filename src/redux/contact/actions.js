const actions = {
  RESET_CONTACTS_STATE: 'RESET_CONTACTS_STATE',
  resetContactsState: () => ({ type: actions.RESET_CONTACTS_STATE }),

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

  CREATE_REQUEST: 'CREATE_REQUEST',
  CREATE_SUCCESS: 'CREATE_SUCCESS',
  CREATE_FAILURE: 'CREATE_FAILURE',
  create: (data, setErrors, setSubmitting) => {
    return {
      type: actions.CREATE_REQUEST,
      payload: { data, setErrors, setSubmitting }
    };
  },

  UPDATE_REQUEST: 'UPDATE_REQUEST',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAILURE: 'UPDATE_FAILURE',
  update: (data, setErrors, setSubmitting) => {
    return {
      type: actions.UPDATE_REQUEST,
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