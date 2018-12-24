import * as act from '../actions/types';

const initialState = {
  clients: [],
  previewData: null,
  isFetching: false,
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case act.SHOW_PREVIEW:
      return {
        ...state,
        previewData: action.payload.previewData,
      };

    case act.REMOVE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((client) => {
          if (client.contact.email !== action.payload.client.contact.email) {
            return client;
          }
          return null;
        }),
      };

    case act.UPDATE_CLIENTS_LIST:
      return {
        ...state,
        clients: action.payload.clients,
        isFetching: false,
      };

    case act.LOAD_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
}
