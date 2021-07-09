newsUI = {
  ...newsUI,
  services: (() => {
    const {
      api: { callRestAPI },
      constants: { NEWS_ENDPOINT },
    } = newsUI;

    const renderNews = (data) => {
      const dataTable = document.createElement("data-table");
      dataTable.setAttribute("data", JSON.stringify(data));

      return dataTable.outerHTML;
    };

    const getNews = (callBack = () => {}, handleError = () => {}) => {
      const url = NEWS_ENDPOINT.replace(
        "{{QUERY_SEARCH}}",
        txtTopic.value === "" ? "bitcoin" : txtTopic.value
      );
      callRestAPI(url).then(callBack).catch(handleError);
    };
    return { renderNews, getNews };
  })(),
};
