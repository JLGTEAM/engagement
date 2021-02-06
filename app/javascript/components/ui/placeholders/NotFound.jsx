import React, { Fragment } from "react";

const NoMatchFound = () => {
  document.body.style.backgroundColor = "white";

  return (
    <Fragment>
      <div className="text-center mt-4">
        <h3 className="text-muted">
          The page you were looking for doesn't exist.
        </h3>
        <img
          style={{ margin: "auto" }}
          src="http://gph.is/1b0nEjm"
          sizes="(max-width: 600px) 100vw, 600px"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default NoMatchFound;
