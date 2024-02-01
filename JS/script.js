
// Define a custom error handler function
function customErrorHandler(message, source, lineno, colno, error) {
  // Your custom error handling logic goes here

  // Return true to prevent the default browser error handling
  return true;
}

// Set the custom error handler using window.onerror
window.onerror = customErrorHandler;

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

setTimeout(() => {
  document.querySelector(".pencil").classList.add("none");
  document.querySelector(".line").classList.add("none");
  document.querySelector(".all").classList.remove("none");
  document.querySelector(".area").style.height = "0px";
}, 10000);

