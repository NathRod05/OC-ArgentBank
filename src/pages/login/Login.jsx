import { useDispatch } from "react-redux";
import "./login.css";
import { useState } from "react";
import { login } from "../../redux/userSlice";
import { loginReducer } from "../../redux/loginSlice";
import { loginUser, fetchUserProfile } from "../../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userToken = await loginUser({ email: username, password });
      if (userToken) {
        dispatch(
          loginReducer({
            token: userToken,
            loggedIn: true,
          })
        );
        const userProfile = await fetchUserProfile(userToken);
        if (userProfile) {
          dispatch(
            login({
              user: userProfile,
            })
          );
        }
        navigate("/user");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.message);
    }
  };

  return (
    <main className="main container-login">
      <section className="sign-in-content">
        <div className="auth-logo">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
