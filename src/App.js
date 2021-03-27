import logo from './logo.svg';
import './App.css';
import Sidenav from './Sidenav';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <header className="py-4 logo">
            klaborda.me
          </header>
          <Sidenav />
        </div>
        <div className="col">
          Content Here
        </div>
      </div>
    </div>
  );
}

export default App;
