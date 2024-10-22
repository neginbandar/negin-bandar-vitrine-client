import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav class="fixed-bottom navbar-bottom ">
      <div class="nav-app">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
