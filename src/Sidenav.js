import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li class="list-group-item">
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
