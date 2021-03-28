import { useLocation } from "react-router-dom";

function NoMatch() {
  let location = useLocation();

  return (
    <div className="alert alert-danger">
      No match found for <code>{location.pathname}</code>
    </div>
  );
}

export default NoMatch;
