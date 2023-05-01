import { Outlet } from "react-router-dom";
import "./Root.css";
import Sidenav from "./Sidenav";

function Root() {
  return (
    <main className="wrapper">
      <header className="full-bleed">
        <Sidenav />
      </header>
      <Outlet />
    </main>
  );
}

export default Root;
