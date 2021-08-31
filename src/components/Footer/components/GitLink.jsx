import React from "react";

const GitLink = () => {
  return (
    <div className=" shop-footer text-center p-3">
      The project is edited and upgraded by
      <a
        href="https://www.facebook.com/sao.choi.568847"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` Ngọc Bách Nguyễn`}
      </a>
      , click
      <a
        href="https://github.com/ngocbach99"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` Here `}
      </a>
      to get the source code
    </div>
  );
};

export default GitLink;
