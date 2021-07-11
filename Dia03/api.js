newsUI = {
  ...newsUI,
  api: (() => {
    const get = (url, token) => {
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
              resolve(JSON.parse(xobj.responseText));
            }
          };
          xobj.send();
        } catch (ex) {
          reject(ex);
          console.log(ex);
        }
      });
    };

    return { get };
  })(),
};
