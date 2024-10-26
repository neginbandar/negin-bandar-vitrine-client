import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import StoreProfilePage from "../../pages/StoreProfilePage/StoreProfilePage";
import { Link } from "react-router-dom";

export default function Navbar() {
  const userId = 2;
  return (
    <nav className="fixed-bottom navbar-bottom ">
      <div className="nav-app">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={`/users/${userId}`}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link to={`/users/${userId}/upload`}>New Post</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Messages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
