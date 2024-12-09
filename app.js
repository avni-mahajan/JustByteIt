import React from "react"
import ReactDOM from "react-dom/client"

// writing the code using react, we are directly creating the react element which will be further converted to  html code
// const heading = React.createElement("h1",{id:"heading"},"Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// we have an extra step here and the code is written in jsx which is first converted to react elemet amd then the process continues !!
const ele = <h1>This is an element</h1>;
// root.render(headi);


//this is a react component
// const HeadingComponent = () => {
//     return <h1> Hello from the component </h1>;     
// }

//another way to write react compenent
const HeadingComponent = () => <h1>Hello from heading</h1> ;

//This is called as component composition
const Container = () => (
    <div>
        {ele}   
        <HeadingComponent/>
        <h2>Hello from container</h2>
    </div>
);

root.render(<Container/>);


