const initialSate = {
  id: null,
  users: []
};

export default function myReducer(state = initialSate, action) {
  switch (action.type) {
    case "OPEN_CHATS_SAGA":
      let user = state.users.map((element) => {
        if (element.id === action.payload.id) {
          element.clicked = true;
        } else {
          element.clicked = false;
        }
        return element;
      });
      return {
        ...state,
        users: user,
        id: action.payload.id
      };
    case "ADD_CHATS_SAGA":
      let y = state.users.map((e, i) => {
        if (i === state.id - 1) {
          e.chats = e.chats.concat(action.payload);
          return e;
        }
        return e;
      });
      return {
        ...state,
        users: y
      };
    case "ADD_USER_SAGA":
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    case "FETCH_USER_SAGA":
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    default:
      return state;
  }
}
