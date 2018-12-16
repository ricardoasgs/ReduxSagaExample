export function requestTodoList(text = "teste123") {
  return {
    type: "REQUEST_TODO_LIST",
    payload: text
  };
}
