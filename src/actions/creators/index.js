import * as act from '../types';

export const updateSearchValue = event => ({
  type: act.UPDATE_SEARCH_VALUE,
  payload: { searchValue: event.target.value },
});

export const showPreview = client => ({
  type: act.SHOW_PREVIEW,
  payload: { previewData: client },
});
