document.write(
  '<script type="text/javascript" src="localstorage.js" ></script>'
);
//import local from "./localstorages/localstorage.js";
//Select elements from dom
const form = document.getElementById("form");
const inputValue = document.getElementById("inputItem");
const itemsList = document.getElementById("itemsList");
const filter = document.querySelectorAll(".nav-item");
const deleteButton = document.getElementById("deleteAll");
const sortByName = document.getElementById("sortByName");

//Created an empty items list
let todoItems = [];

// sort by name
sortByName.addEventListener("click", () => {
  let array = sortedArray(todoItems);
  //local.setLocalStorage(array);
  setLocalStorage(array);
  todoItems = array;
  getList(array);
});
function sortedArray(todoItems) {
  let sortedarray1 = todoItems.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return sortedarray1;
}

//Implementing search with keyup
const search = () => {
  let value = document.getElementById("Search").value;
  let data = searchTodo(value, todoItems);
  getList(data);
};

const searchTodo = (value, data) => {
  let filteredTodo = [];
  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    let name = data[i].name.toLowerCase();
    if (name.includes(value)) {
      filteredTodo.push(data[i]);
    }
  }
  return filteredTodo;
};

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
        createdAt: performance.now(),
      };

      todoItems.push(itemObj);
      setLocalStorage(todoItems);
      getList(todoItems);
      inputValue.value = "";
      let endTime = performance.now();
      console.log(endTime);
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
          }
        });
    }
  });
};
