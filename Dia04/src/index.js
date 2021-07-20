import { getNews, renderNews, initComponents } from "./services";

const requestNews = () => {
  getNews().then((resolve) => {
    const news = resolve;
    renderNews(news || []);
  });
};

const initApp = () => {
  initComponents();
  requestNews();
};

document.addEventListener("DOMContentLoaded", initApp);
