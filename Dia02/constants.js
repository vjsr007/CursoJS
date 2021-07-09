newsUI = {
  ...newsUI,
  constants: (() => {
    const {
      config: { API_URL, API_KEY },
    } = newsUI;
    const NEWS_ENDPOINT = `${API_URL}everything?q={{QUERY_SEARCH}}&apiKey=${API_KEY}`;
    return { NEWS_ENDPOINT };
  })(),
};
