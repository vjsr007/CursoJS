newsUI = {
  ...newsUI,
  constants: (() => {
    const {
      config: { API_URL, API_KEY },
    } = newsUI;

    const NEWS_ENDPOINT = `${API_URL}everything?{{QUERY_SEARCH}}&apiKey=${API_KEY}`;

    const SOURCES_ENDPOINT = `${API_URL}top-headlines/sources?apiKey=${API_KEY}`;

    return { NEWS_ENDPOINT, SOURCES_ENDPOINT };
  })(),
};
