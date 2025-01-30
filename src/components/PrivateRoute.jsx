import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { tokenUser } from "../redux/loginSlice";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(tokenUser); // Adaptez ce chemin selon votre state

  if (!token) {
    return <Navigate to="/login" />; // Redirection vers la page de connexion
  }

  return children; // Rendre les enfants (c'est-à-dire la page utilisateur)
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // 'children' est requis et doit être de type node
};

export default ProtectedRoute;
