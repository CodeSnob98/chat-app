import React from "react";
import "./components.css";
export default function Uesrcard(props) {
  return (
    <>
      <div
        onClick={() => props.handleClick(props.id)}
        className={props.clicked ? "user-card-active" : "user-card"}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5T97dChywsxNg6z0j_5fRVefxUjNuKOWbE1VG1EIUBev3_XC_l3Vscelpf9jwnrlitM&usqp=CAU"
          alt="Icon"
          className="chat-icon"
        ></img>
        <div className="user-card-text" title={props.name}>
          {props.name}
        </div>
      </div>
    </>
  );
}
