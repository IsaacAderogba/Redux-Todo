import uuid from "uuid";

let dummyTodos = [
  {
    id: uuid(),
    value: "Walk the dog.",
    completed: false
  },
  {
    id: uuid(),
    value: "Fry hamburgers.",
    completed: false
  },
  {
    id: uuid(),
    value: "Pay the bills.",
    completed: true
  }
];

let savedTodos = [];

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length ; i++) {
    let retrievedPost = JSON.parse(window.localStorage.getItem(i));
    savedTodos.push(retrievedPost);
  }
}

let exportedTodos = savedTodos.length !== 0 ? savedTodos : dummyTodos
export default exportedTodos;
