import React from "react";

const Loader = ({ loader }) => {
  console.log(loader);
  let style = loader ? { display: "block" } : { display: "none" };
  return (
    <div className="loader" style={style}>
      <div className="loader-spin" />
    </div>
  );
};

export default Loader;
