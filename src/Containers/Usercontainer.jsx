import React from "react";
import "./container.css";
import Modal from "react-modal";
import Usercard from "./../Components/Usercard";
import { connect } from "react-redux";
import { addUser, fetchUser, addChats, openChats } from "./../Store/actions";
Modal.setAppElement("#root");
function Usercontainer(props) {
  const [modal, setModal] = React.useState(false);
  function clickToOpen(id) {
    props.openChats({ id });
  }
  React.useEffect(() => {
    props.fetchUser();
  }, []);
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
        <input type="text" />
        <button className="btn" onClick={() => setModal(!modal)}>
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
