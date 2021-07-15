import React from "react";
import "./components.css";
export default function Chatcard(props) {
  return (
    <>
      <div className={props.isUser ? "chat-card-main-user" : "chat-card-main"}>
        {!props.isUser && (
          <img
            src="https://previews.123rf.com/images/vitechek/vitechek1907/vitechek190700199/126786791-user-login-or-authenticate-icon-human-person-symbol-vector.jpg"
            alt="Icon"
            className="chat-icon"
          ></img>
        )}
        <div className="card-text">{props.content}</div>
      </div>
    </>
  );
}
