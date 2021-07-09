newsUI = {
  ...newsUI,
  main: (() => {
    const {
      services: { getNews, renderNews },
    } = newsUI;
    let newsTable;
    let btnGenerateNews;
    let txtTopic;

    const initControls = () => {
      newsTable = document.getElementById("divContent");
      btnGenerateNews = document.getElementById("btnGenerateNews");
      txtTopic = document.getElementById("txtTopic");
    };

    const initEvents = () => {
      btnGenerateNews.addEventListener("click", () => {
        getNews((resolve) => {
          const news = JSON.parse(resolve);
          newsTable.innerHTML = renderNews(news.articles);
        });
      });
    };

    const initApp = () => {
      initControls();
      initEvents();
    };

    document.addEventListener("DOMContentLoaded", initApp);
  })(),
};
