import "./NavTop.scss";
import logo from "../../assets/logo/Vitrine-v5.svg";
import { Link } from "react-router-dom";

export default function NavTop() {
  return (
    <nav className="nav-top">
      <div className="nav-top__nav">
        <img className="logo nav-top__logo" src={logo} alt="logo-vitrine" />
        <Link to="/">
          <p className="nav-top__item">Log out</p>
        </Link>
      </div>
    </nav>
  );
}
