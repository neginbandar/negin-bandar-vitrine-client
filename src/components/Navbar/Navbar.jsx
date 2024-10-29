import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import StoreProfilePage from "../../pages/StoreProfilePage/StoreProfilePage";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/person.svg";
import addNew from "../../assets/icons/patch-plus.svg";
import envelopIcon from "../../assets/icons/envelope.svg";

export default function Navbar() {
  const userId = 2;
  return (
    <nav className="fixed-bottom navbar-bottom ">
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={`/users/${userId}`}>
              <img className="nav__icon" src={profileIcon} alt="profile icon" />
              <p className="nav__label">Profile</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`/users/${userId}/upload`}>
              <img className="nav__icon" src={addNew} alt="plus icon" />
              <p className="nav__label">New Post</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`/users/${userId}/messages`}>
              <img className="nav__icon" src={envelopIcon} alt="message icon" />
              <p className="nav__label">Messages</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
