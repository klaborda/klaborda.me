import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./Sidenav";
import NoMatch from "./NoMatch";
import Home from "./Home";
import About from "./About";
import BlogEdit from "./BlogEdit";
import BlogList from "./BlogList";
import Contact from "./Contact";
import { formatDistanceToNowStrict } from "date-fns";

function App() {
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
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <header className="py-4 logo">klaborda.me</header>
            <Sidenav />
          </div>
          <div className="col my-5">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About data={aboutData} />
              </Route>
              <Route path="/blog">
                <BlogList />
              </Route>
              <Route path="/blogedit">
                <BlogEdit />
              </Route>
              <Route path="/contact">
                <Contact data={contactData} />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
