import PropTypes from "prop-types";
import "./username.css";

function UserName({ username, onOpen }) {
  return (
    <div className="container-username">
      <h1>
        Welcome back
        <br />
        {username}
      </h1>
      <button className="edit-button" onClick={onOpen}>
        Edit Name
      </button>
    </div>
  );
}

UserName.propTypes = {
  username: PropTypes.string,
  onOpen: PropTypes.func,
};

export default UserName;
