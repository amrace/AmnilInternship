import services from "./services/service.js";

const personTable = document.getElementById("table");
const addPerson = document.querySelector(".add");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const avatar = document.getElementById("avatar");
const submitButton = document.querySelector(".btn");

//Get the list of data in a table
const getPersons = async (page) => {
  let persons = await services.list(page);
  persons.data.map((person) => {
    personTable.insertAdjacentHTML(
      "beforeend",
      `<tr >
        <th scope="row" class="card-body" >${person.id}</th>
        <td class="personFirstName">${person.first_name}</td>
        <td class="personLastName">${person.last_name}</td>
        <td class="personEmail">${person.email}</td>
        <td class="personAvatar"><img src=${person.avatar} alt="personAvatar" /></td>
        <td data-id=${person.id}><a class="update" href="#" id="edit">Update</a> || <a class="delete" href="#" id="delete">Delete</a></td>
      </tr>`
    );
  });
};
getPersons();

//create post method
addPerson.addEventListener("submit", async (e) => {
  e.preventDefault();
  const getPost = async (model) => {
    let posts = await services.create({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      avatar: avatar.value,
    });
    console.log("person created successfully:", posts);
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    avatar.value = "";
  };
  getPost();
});

//update and delete the table list
personTable.addEventListener("click", (e) => {
  e.preventDefault();
  let deleteButton = e.target.id == "delete";
  let updateButton = e.target.id == "edit";
  let id = e.target.parentElement.dataset.id;
  //Delete
  if (deleteButton) {
    const deleteItem = async () => {
      let remove = await services.listDelete(id);
      console.log("person removed successfully:", remove);
    };
    deleteItem();
  }
  if (updateButton) {
    let personFirstName =
      document.querySelector(".personFirstName").textContent;
    let personLastName = document.querySelector(".personLastName").textContent;
    let personEmail = document.querySelector(".personEmail").textContent;
    let personAvatar = document.querySelector(".personAvatar").textContent;

    firstName.value = personFirstName;
    lastName.value = personLastName;
    email.value = personEmail;
    avatar.value = personAvatar;
  }
  //Update the existing form value
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const updatePerson = async (id) => {
      let update = await services.update(id);
      console.log("person updated successfully:", update);
    };
    updatePerson();
  });
});
