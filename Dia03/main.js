newsUI = {
  ...newsUI,
  main: (() => {
    const {
      services: { getNews, renderNews, initComponents },
    } = newsUI;
    
    const requestNews = () => {
      getNews().then((resolve) => {
        const news = resolve;
        renderNews(news.articles);
      });
    }

    const initControls = () => {
      initComponents();
    };

    const initApp = () => {
      initControls();
      requestNews();
    };

    document.addEventListener("DOMContentLoaded", initApp);
  })(),
};
