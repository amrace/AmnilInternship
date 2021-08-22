//set todolist in local storage
const setLocalStorage = function (todoItems) {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
};

// get localstorage from the page
const getLocalStorage = function () {
  const todoStorage = localStorage.getItem("todoItems");
  if (todoStorage === "undefined" || todoStorage === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todoStorage);
    console.log("items", todoItems);
  }
  getList(todoItems);
};
/* export default {
  setLocalStorage: setLocalStorage,
  getLocalStorage: getLocalStorage,
}; */
