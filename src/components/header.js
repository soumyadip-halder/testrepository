import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  return (
    <div className="card" data-test="card">
      <div className="btn btn-primary font-weight-bold" data-test="btn">
        Header
      </div>
    </div>
  );
}

export default Header;
