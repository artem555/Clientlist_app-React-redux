import * as act from '../types';

export const updateClientsList = clients => ({
  type: act.UPDATE_CLIENTS_LIST,
  payload: { clients },
});

export const showPreview = client => ({
  type: act.SHOW_PREVIEW,
  payload: { previewData: client },
});

export const removeClient = client => ({
  type: act.REMOVE_CLIENT,
  payload: { client },
});

export const loadRequest = () => ({
  type: act.LOAD_REQUEST,
});

export const getSearchableValue = value => async (dispatch, getState, api) => {
  dispatch(loadRequest());

  const response = await api.getData(value);
  // вызываем ф-ю из apis и передаем в нее наше искомое значение
  //останавливсюсь в этом месте и жду пока выполнится запрос
  dispatch(updateClientsList(response));
};
