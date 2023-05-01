import { Outlet } from "react-router-dom";
import "./App.css";
import Sidenav from "./Sidenav";
import { formatDistanceToNowStrict } from "date-fns";

function Root() {
  // Data details for the about page
  const aboutData = {
    city: "Salt Lake City, UT",
    age: formatDistanceToNowStrict(new Date("1988-09-16T09:24:00"), {
      unit: "year",
    }),
    stack: [
      "React",
      "Node.js",
      "Python",
      "Docker",
      "OpenShift",
      "MongoDB",
      "PostgreSQL",
    ],
  };

  // Data details for the contact page
  const contactData = {
    linkedIn: "https://www.linkedin.com/in/kevin-laborda-4386b71a/",
    email: "klaborda@gmail.com",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <header className="py-4 logo">klaborda.me</header>
          <Sidenav />
        </div>
        <div className="col my-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
