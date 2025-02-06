import { useState } from "react";
import PropTypes from "prop-types";
import "./modal-edit.css";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../../redux/userSlice";
import { tokenUser } from "../../redux/loginSlice";
import { editUsername, fetchUserProfile } from "../../api";
import { login } from "../../redux/userSlice";

function ModalEdit({ onClose }) {
  const user = useSelector(userInfo);
  const token = useSelector(tokenUser);
  const [username, setUsername] = useState(user.userName);
  const dispatch = useDispatch();

  const handleNewUsername = async (e) => {
    e.preventDefault();
    try {
      if (token) {
        const newUsername = await editUsername(username, token);
        if (newUsername) {
          const userProfile = await fetchUserProfile(token);
          if (userProfile) {
            dispatch(
              login({
                user: userProfile,
              })
            );
          }
        }
        onClose();
      }
    } catch (error) {
      console.error(
        "Erreur au changement du nom d'utilisateur:",
        error.message
      );
    }
  };
  return (
    <div>
      <form className="container-form" onSubmit={handleNewUsername}>
        <div className="edition-logo">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Edit</h1>
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
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
          <button className="btn" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

ModalEdit.propTypes = {
  onClose: PropTypes.func,
};

export default ModalEdit;
