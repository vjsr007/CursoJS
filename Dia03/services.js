newsUI = {
  ...newsUI,
  services: (() => {
    const {
      api: { get },
      constants: { NEWS_ENDPOINT, SOURCES_ENDPOINT },
      model: { dummyData },
    } = newsUI;

    const initComponents = () => {
      const form = document.getElementById("frmFilters");

      const txtTopic = document.createElement("custom-input");
      txtTopic.setAttribute("id", "txtTopic");

      form.appendChild(txtTopic);

      const dropdown = document.createElement("drop-down");
      dropdown.setAttribute("id", "cmbSources");
      form.appendChild(dropdown);

      /*
      get(SOURCES_ENDPOINT).then(data => {
        dropdown.setAttribute("data", JSON.stringify(data.sources));        
      });
      */

      const btnSearch = document.createElement("custom-button");

      btnSearch.handleClick = () => {
        const articleRequest = {
          q: txtTopic.searchText !== "" ? txtTopic.searchText : "*",
          qInTitle: null,    
          sources: dropdown.currentOption.id != -1 ? dropdown.currentOption.id : null,        
          domains: null,    
          excludeDomains: null,    
          from: null,    
          to: null,    
          language: null,
          sortBy: null,    
          pageSize: null,    
          page: null,
        }

        const queryString = Object
          .keys(articleRequest)
          .filter(key => articleRequest[key] !== null)
          .map(key => key + '=' + articleRequest[key]).join('&');

        getNews(queryString).then((resolve) => {
          const news = resolve;
          renderNews(news.articles);
        });
      }
      btnSearch.setAttribute("id", "btnSearch");      

      form.appendChild(btnSearch);

      const dataTable = document.createElement("card-container");
      dataTable.setAttribute("id", "dtArticles");

      const newsTable = document.getElementById("content");

      newsTable.innerHTML = dataTable.outerHTML;
    }

    const renderNews = (data) => {
      const dataTable = document.getElementById("dtArticles");
      dataTable.setAttribute("data", JSON.stringify(data));
      return dataTable.outerHTML;
    };

    const getNews = (queryString = null) => {
      return new Promise((resolve, reject) => {
        resolve(dummyData)
      });
      /*
      const url = NEWS_ENDPOINT.replace(
        "{{QUERY_SEARCH}}",
        queryString ? queryString : "q=*"
      );
      return get(url);
      */
    };

    return { renderNews, getNews, initComponents };
  })(),
};
