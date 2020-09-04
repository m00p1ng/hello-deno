window.onload = (event) => {
  console.log("onload Event");
  console.log(event);
};

window.addEventListener("load", (event) => {
  console.log("onload Event - via Listener");
  console.log(event);
});

console.log("MAIN SCRIPT");

window.onunload = (event) => {
  console.log("onunload Event");
  console.log(event);
};

window.addEventListener("unload", (event) => {
  console.log("onunload Event - via Listener");
  console.log(event);
});
