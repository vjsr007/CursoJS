newsUI = {
  ...newsUI,
  config: (() => {
    const API_URL = "https://newsapi.org/v2/";
    const API_KEY = "59539a80081c4291a2d347818031e695";
    //const API_KEY = "738b6f5d0abb4544a09ffd6fffd5a8fb";
    return { API_URL, API_KEY };
  })(),
};
