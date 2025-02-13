import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
import User from "../src/pages/user/User";
import Error from "../src/pages/404/Error";
import Footer from "../src/components/footer/Footer";
import ProtectedRoute from "./components/PrivateRoute";

function RouterArgentBank() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="/error404" element={<Error />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterArgentBank;
