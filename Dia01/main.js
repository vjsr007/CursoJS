let newsTable
let btnGenerateNews
let txtTopic

const URLNews = "https://newsapi.org/v2/everything?q={{topic}}&apiKey=59539a80081c4291a2d347818031e695"

const callRestAPI = (url, token) => {
    return new Promise((resolve, reject) => {
      if (!url) reject("url or path is needed");
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      try {
        xobj.open("GET", url, true);
        if (token) {
            xobj.setRequestHeader(
              "access-control-allow-headers",
              "user-key, access-control-allow-headers"
            );
            xobj.setRequestHeader("user-key", token);
        }
        xobj.onreadystatechange = () => {
          if (xobj.readyState == 4 && xobj.status == "200") {
            resolve(xobj.responseText);
          }
        };
        xobj.send();
      }
      catch(ex) {
        reject(ex);
        console.log(ex)
      }
    });
}

const renderRows = data => {
    return (
        `${data.map((row, idx) => (`
        <div id="row_${idx}" class="row">
            <div class="field">${row.author}</div>
            <div class="field">${row.title}</div>
            <div class="field">${row.description}</div>
        </div>
        `)).join("")}`
    ) 
}

const renderNews = data => {
    return (`
        <div class="main">
            <div class="columns">
                <div class="columns">Author</div>
                <div class="columns">Title</div>
                <div class="columns">Description</div>
            </div>
            <div class="content">
            ${renderRows(data)}
            </div>
    </div>`)
}

const getNews = () => {
    const url = URLNews.replace('{{topic}}', txtTopic.value === "" ? "bitcoin": txtTopic.value)
    callRestAPI(url).then(resolve => {
        newsTable.innerHTML = renderNews(JSON.parse(resolve).articles)
    })
}

const initControls = () => {
    newsTable = document.getElementById("divContent");
    btnGenerateNews = document.getElementById("btnGenerateNews");
    txtTopic = document.getElementById("txtTopic");
}

const initialEvents = () => {
    btnGenerateNews.addEventListener("click", () => {
        getNews()
    });
}

const initApp = () => {
    initControls()
    initialEvents()
}

document.addEventListener("DOMContentLoaded", initApp);
