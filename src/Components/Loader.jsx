import React from "react";
import spinner from "./spinner.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loader;
