import React from "react";
import "./container.css";
import Modal from "react-modal";
import Usercard from "./../Components/Usercard";
import { connect } from "react-redux";
import { addUser, fetchUser, addChats, openChats } from "./../Store/actions";
Modal.setAppElement("#root");
function Usercontainer(props) {
  const [modal, setModal] = React.useState(false);
  const addUserRef = React.useRef("");
  function clickToOpen(id) {
    props.openChats({ id });
  }
  React.useEffect(() => {
    props.fetchUser();
  }, []);

  function addUserFunction() {
    if (addUserRef.current.value.trim()) {
      let newUser = {
        id: props.user.length + 1,
        name: addUserRef.current.value.trim(),
        clicked: false,
        chats: []
      };
      props.addUser(newUser);
    }

    setModal(!modal);
  }
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          content: {
            width: "20rem",
            height: "12rem",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }
        }}
      >
        <div className="add-user-header">Add new user</div>
        <input className="add-user-input" ref={addUserRef} type="text" />
        <button className="btn" onClick={addUserFunction}>
          Submit
        </button>
      </Modal>
      <div className="user-main">
        <div className="user-header">
          Users
          <button className="btn" onClick={() => setModal(true)}>
            ADD +
          </button>
        </div>
        <div className="user-body">
          {props.user.map((e) => {
            return (
              <Usercard
                key={e.id}
                name={e.name}
                clicked={e.clicked}
                id={e.id}
                handleClick={clickToOpen}
              />
            );
          })}
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
})(Usercontainer);
