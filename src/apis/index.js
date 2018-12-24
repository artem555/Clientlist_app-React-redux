const api = {
  getData(value) {
    return fetch(`/get-data?value=${value}`)
      .then(res => res.json())
      .catch((error) => { throw error.response; });
  },
};

export default api;
