import ReactDOM from "react-dom";
import React from "react";

const App = ({ name, lastName }) => {
  return <h1>Hello {name} {lastName}</h1>;
};

ReactDOM.render(<App name="Victor" lastName="Sanchez" />, document.getElementById("app"));
