import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./Sidenav";
import NoMatch from "./NoMatch";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <header className="py-4 logo">klaborda.me</header>
            <Sidenav />
          </div>
          <div className="col my-5">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
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
