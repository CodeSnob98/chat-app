import "./styles.css";
import Chatcontainer from "./Containers/Chatcontainer";
import Usercontainer from "./Containers/Usercontainer";
export default function App() {
  return (
    <div className="App">
      <Usercontainer />
      <Chatcontainer />
    </div>
  );
}
