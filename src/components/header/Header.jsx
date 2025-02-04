import logo from "../../assets/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { tokenUser, logoutReducer } from "../../redux/loginSlice";
import { userInfo, logout } from "../../redux/userSlice";

import "./header.css";

function Header() {
  const token = useSelector(tokenUser);
  const user = useSelector(userInfo);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutReducer());
    dispatch(logout());
  };

  return (
    <header className="container-header">
      <a href="/">
        <img src={logo} alt="Argent Bank logo" className="logo"></img>
      </a>
      <div>
        {!token ? (
          <a className="header-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        ) : (
          <>
            {user && user.userName ? (
              <a className="main-nav-item name" href="./user">
                <i className="fa fa-user-circle user"></i>
                {user.userName}
              </a>
            ) : (
              <div>
                <i className="fa fa-user-circle user"></i>Loading...
              </div>
            )}
            <a className="main-nav-item" href="/login" onClick={handleLogout}>
              <i className="fa fa-sign-out logout"></i>
              Sign Out
            </a>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
