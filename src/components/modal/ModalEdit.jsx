import { useState } from "react";
import "./modal-edit.css";
import { useSelector } from "react-redux";
import { userInfo } from "../../redux/userSlice";

function ModalEdit({ onClose }) {
  const user = useSelector(userInfo);
  const [username, setUsername] = useState("");

  return (
    <div>
      <form className="container-form">
        <div className="edition-logo">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Edit</h1>
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user.userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" value={user.firstName} disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" value={user.lastName} disabled />
        </div>
        <div className="btn-container">
          <button className="btn" type="submit">
            Save
          </button>
          <button className="btn" type="submit" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalEdit;
