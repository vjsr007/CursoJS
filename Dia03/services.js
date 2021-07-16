newsUI = {
  ...newsUI,
  services: (() => {
    const {
      api: { get },
      constants: { NEWS_ENDPOINT, SOURCES_ENDPOINT },
      model: { dummyData },
      controls: {
        frmFilters,
        lblTopic,
        txtTopic,
        lblSources,
        cmbSources,
        btnSearch,
        cmbDates,
        lblDates,
        cmbLanguages,
        lblLanguages,
        cmbSortBy,
        lblSortBy,
        cardContainer,
        content,
      },
    } = newsUI;

    const addDays = (date, days) => {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    const formatDate = (date) => {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    };

    const getArticles = () => {
      let articleRequest = {
        q: txtTopic.get().searchText !== "" ? txtTopic.get().searchText : "*",
        qInTitle: null,
        sources:
          cmbSources.get().currentOption.id != -1
            ? cmbSources.get().currentOption.id
            : null,
        domains: null,
        excludeDomains: null,
        from: null,
        to: null,
        language:
          cmbLanguages.get().currentOption.id != -1
            ? cmbLanguages.get().currentOption.id
            : null,
        sortBy:
          cmbSortBy.get().currentOption.id != -1
            ? cmbSortBy.get().currentOption.id
            : null,
        pageSize: 100,
        page: 1,
      };

      if (cmbDates.get().currentOption.id != -1) {
        const today = new Date();
        const to = today.toISOString();
        let from = formatDate(to);
        switch (cmbDates.get().currentOption.id) {
          case "week":
            from = formatDate(addDays(today, -7).toISOString());
            break;
          case "month":
            from = formatDate(addDays(today, -30).toISOString());
            break;
        }
        articleRequest = { ...articleRequest, from, to };
      }

      const queryString = Object.keys(articleRequest)
        .filter((key) => articleRequest[key] !== null)
        .map((key) => key + "=" + articleRequest[key])
        .join("&");

      getNews(queryString).then((resolve) => {
        const news = resolve;
        renderNews(news.articles || null);
      });
    };

    const initComponents = () => {
      const form = frmFilters.get();

      lblTopic.init;
      form.appendChild(lblTopic.get());

      txtTopic.init;
      form.appendChild(txtTopic.get());

      lblSources.init;
      form.appendChild(lblSources.get());

      cmbSources.init;
      form.appendChild(cmbSources.get());

      lblDates.init;
      form.appendChild(lblDates.get());

      cmbDates.init;
      form.appendChild(cmbDates.get());

      lblLanguages.init;
      form.appendChild(lblLanguages.get());

      cmbLanguages.init;
      form.appendChild(cmbLanguages.get());

      lblSortBy.init;
      form.appendChild(lblSortBy.get());

      cmbSortBy.init;
      form.appendChild(cmbSortBy.get());

      btnSearch.init;
      btnSearch.get().handleClick = getArticles;

      form.appendChild(btnSearch.get());

      cardContainer.init;

      get(SOURCES_ENDPOINT).then((data) => {
        cmbSources
          .get()
          .setAttribute("data", JSON.stringify(data.sources || null));
      });
    };

    const renderNews = (data) => {
      cardContainer.get().setAttribute("data", JSON.stringify(data));
      content.get().innerHTML = cardContainer.get().outerHTML;
    };

    const getNews = (queryString = null) => {
      const url = NEWS_ENDPOINT.replace(
        "{{QUERY_SEARCH}}",
        queryString ? queryString : "q=*&pageSize=10"
      );
      return get(url);
    };

    return { renderNews, getNews, initComponents };
  })(),
};
