import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { tokenUser } from "../redux/loginSlice";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(tokenUser);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
