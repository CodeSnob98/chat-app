import React from "react";
import "./container.css";
import Chatcard from "./../Components/Chatcard";
import { connect } from "react-redux";
import { addUser, fetchUser, addChats, openChats } from "./../Store/actions";
function Chatcontainer(props) {
  const myRef = React.useRef("");
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    if (bodyRef) {
      bodyRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  function sendMsg() {
    if (myRef.current.value.trim() && props.id) {
      // dispatching
      let data = {
        isUser: true,
        content: myRef.current.value
      };
      props.addChats(data);
      myRef.current.value = "";
    }
  }
  React.useEffect(() => {
    let inv = setInterval(function () {
      if (props.id) {
        props.addChats();
      }
    }, 3000);

    return function () {
      clearInterval(inv);
    };
  }, [props.id]);
  return (
    <>
      <div className="chat-main">
        <div className="chat-header">Chat Messages</div>
        <div ref={bodyRef} className="chat-body">
          {props.id ? (
            props.user[props.id - 1].chats.map((e) => {
              return (
                <Chatcard key={e.id} content={e.content} isUser={e.isUser} />
              );
            })
          ) : (
            <div className="empy-chat-box">
              Select user to start conversation
            </div>
          )}
        </div>
        <div className="footer">
          <div className="footer-header-text">
            <p> New Messages</p>
            <div className="line"></div>
          </div>
          <div className="input-field">
            <input
              className="inp"
              type="text"
              placeholder="Type something..."
              ref={myRef}
            />
            <button className="btn-2" onClick={sendMsg}>
              SEND
              <img
                className="send-icon"
                src="https://img.icons8.com/ios-glyphs/30/000000/filled-sent.png"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    id: state.id,
    user: state.users
  };
};
export default connect(mapStateToProps, {
  addUser,
  fetchUser,
  addChats,
  openChats
})(Chatcontainer);
