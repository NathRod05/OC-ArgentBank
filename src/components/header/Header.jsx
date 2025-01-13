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
      </div>
    </header>
  );
}

export default Header;
