import axios from "axios";

export async function fetchChatData() {
  try {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    let actualData = {
      isUser: false,
      content: data["title"]
    };
    return actualData;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchUsers() {
  try {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let actualData = data.map((e) => {
      let x = {};
      x.id = e["id"];
      x.name = e["name"];
      x.clicked = false;
      x.chats = [];
      return x;
    });
    return actualData;
  } catch (e) {
    console.error(e);
  }
}
