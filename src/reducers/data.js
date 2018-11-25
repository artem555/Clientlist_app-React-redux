import * as act from '../actions/types';
import clients from '../assets/clients.json';

const initialState = {
  clients,
  searchValue: '',
  previewData: null,
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case act.UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload.searchValue,
      };

    case act.SHOW_PREVIEW:
      return {
        ...state,
        previewData: action.payload.previewData,
      };

    default:
      return state;
  }
}
