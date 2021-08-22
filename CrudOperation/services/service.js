const host = "https://reqres.in/";

const list = async (page) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users?page=${page}`, {
      method: "GET",
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const create = async (model) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users`, {
      method: "POST",
      body: model,
    })
      .then((resp) => {
        resolve(resp.json());
        console.log(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const update = async (id, model) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users/${id}`, {
      method: "PUT",
      body: model,
    })
      .then((resp) => {
        resolve(resp.json());
        console.log(resp);
      })
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const listDelete = async (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users/${id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        resolve(resp.text());
        console.log(resp);
      })
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  list: list,
  create: create,
  update: update,
  listDelete: listDelete,
};
