import React from "react";

// gif
import spinner from "./../gifs/loading.gif";

const Loader = () => {
  return (
    <div>
      <img src={spinner} />
      <h1>Loading</h1>
    </div>
  );
};

export default Loader;
