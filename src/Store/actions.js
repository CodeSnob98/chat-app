export function addUser(value) {
  return {
    type: "ADD_USER",
    payload: value
  };
}
export function fetchUser() {
  return {
    type: "FETCH_USER"
  };
}
export function addChats(value) {
  return {
    type: "ADD_CHATS",
    payload: value
  };
}
export function openChats(value) {
  return {
    type: "OPEN_CHATS",
    payload: value
  };
}
