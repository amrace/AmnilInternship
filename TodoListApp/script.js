//Select elements from dom
const form = document.getElementById("form");
const inputValue = document.getElementById("inputItem");
const itemsList = document.getElementById("itemsList");
const filter = document.querySelectorAll(".nav-item");
const deleteButton = document.getElementById("deleteAll");

//Created an empty items list
let todoItems = [];

//Delete an item
const deteleItem = (item) => {
  const deleteIndex = todoItems.indexOf(item);
  todoItems.splice(deleteIndex, 1);
};

//Delete all items
const deteleAll = (item) => {
  const deleteItems = (todoItems.length = 0);
  todoItems.splice(deleteItems);
};

deleteButton.addEventListener("click", function (e) {
  e.preventDefault();
  deteleAll(todoItems);
  setLocalStorage(todoItems);
  getList(todoItems);
});

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

//Add new todo to list
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = inputValue.value.trim();
    if (itemName.length === 0) {
      alert("Please enter a todo.");
    } else {
      const itemObj = {
        name: itemName,
        complete: false,
        createdAt: new Date().getTime(),
      };
      todoItems.push(itemObj);
      setLocalStorage(todoItems);
      getList(todoItems);
      inputValue.value = "";
    }
  });
  getLocalStorage();
});

//Get items in list
const getList = function (todoItems) {
  itemsList.innerHTML = "";
  if (todoItems.length > 0) {
    todoItems.map((item) => {
      const iconClass = item.complete
        ? "bi-check-circle-fill"
        : "bi-check-circle";
      itemsList.insertAdjacentHTML(
        "beforeend",
        `<li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <span class="name" data-time="${item.createdAt}">${item.name}</span>
        <span>
          <a href="#" data-complete><i class="bi ${iconClass}"></i></a>
          <a href="#" data-delete><i class="bi bi-x-circle"></i></a>
        </span>
      </li>`
      );
      handleItem(item);
    });
  }
};

//handle event on button
const handleItem = (itemData) => {
  const items = document.querySelectorAll(".list-group-item");
  items.forEach((item) => {
    if (
      item.querySelector(".name").getAttribute("data-time") ==
      itemData.createdAt
    ) {
      //Complete task checkbox
      item
        .querySelector("[data-complete]")
        .addEventListener("click", function (e) {
          e.preventDefault();
          const itemIndex = todoItems.indexOf(itemData);
          const currentItem = todoItems[itemIndex];
          const currentClass = currentItem.complete
            ? "bi-check-circle-fill"
            : "bi-check-circle";
          currentItem.complete = currentItem.complete ? false : true;
          todoItems.splice(itemIndex, 1, currentItem);
          setLocalStorage(todoItems);
          const iconClass = currentItem.complete
            ? "bi-check-circle-fill"
            : "bi-check-circle";
          this.firstElementChild.classList.replace(currentClass, iconClass);
        });

      //Delete an item from list
      item
        .querySelector("[data-delete]")
        .addEventListener("click", function (e) {
          e.preventDefault();
          if (confirm("Are you sure you want to delete this todo?")) {
            itemsList.removeChild(item);
            deleteItem(item);
            setLocalStorage(todoItems);
            //return todoItems.filter((item) => item != itemData);
          }
        });
    }
  });
};
