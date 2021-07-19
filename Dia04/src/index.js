import { getNews, renderNews, initComponents } from "./business/services";

const requestNews = () => {
  getNews().then((resolve) => {
    const news = resolve;
    renderNews(news || null);
  });
};

const initApp = () => {
  console.log("initApp")
  initComponents();
  requestNews();
};

document.addEventListener("DOMContentLoaded", initApp);
