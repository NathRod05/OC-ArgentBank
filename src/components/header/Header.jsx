import logo from "../../assets/argentBankLogo.png";
import "./header.css";

function Header() {
  return (
    <header className="container-header">
      <a href="/">
        <img src={logo} alt="Argent Bank logo" className="logo"></img>
      </a>
      <div>
        <a className="header-nav-item" href="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
        <div>
          <a className="main-nav-item" href="./user">
            <i className="fa fa-user-circle"></i>
            Tony
          </a>
          <a className="main-nav-item" href="./">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
