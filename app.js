import React from "react"
import ReactDOM from "react-dom/client"

// writing the code using react, we are directly creating the react element which will be further converted to  html code
const heading = React.createElement("h1",{id:"heading"},"Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// we have an extra step here and the code is written in jsx which is first converted to react elemet amd then the process continues !!
const headi = <h1 id =" head">Hellooooooo</h1>;
root.render(headi);

