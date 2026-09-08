console.log("This is  Checking");

const selectRealDom = document.querySelector("#realdom");
let realdom = (selectRealDom.textContent = "hello");
// virtual dom -------
let root = document.querySelector("#root");

let content = React.createElement(
  "h1",
  {},
  React.createElement("span", { message: "hii bro" }, "This is h2"),
);

ReactDOM.createRoot(root).render(content);

console.log(React);
console.log(realdom); //this is Real Dom
console.log(content); //this is Virtual Dom
