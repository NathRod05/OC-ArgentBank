import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
import Error from "../src/pages/404/Error";
import Footer from "../src/components/footer/Footer";

function RouterArgentBank() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error404" element={<Error />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterArgentBank;
