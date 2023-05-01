import { Link } from "react-router-dom";
import "./Sidenav.css";
import { Heading } from "@adobe/react-spectrum";

function Sidenav() {
  return (
    <nav>
      <ul>
        <li>
          <Heading level={2}>klaborda.me</Heading>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
