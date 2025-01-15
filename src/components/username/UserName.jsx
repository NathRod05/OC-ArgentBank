import PropTypes from "prop-types";
import "./username.css";

function UserName({ username }) {
  return (
    <div className="container-username">
      <h1>
        Welcome back
        <br />
        {username}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

UserName.propTypes = {
  username: PropTypes.string,
};

export default UserName;
