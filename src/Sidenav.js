import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="list-group-item">
          <Link to="/about">About Me</Link>
        </li>
        <li className="list-group-item">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
