import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav class="fixed-bottom navbar-bottom ">
      <div class="nav-app">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">
              Messages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
