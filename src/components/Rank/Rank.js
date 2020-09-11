import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 ma3">{`${name}, your current rank is ...`}</div>
      <div className="white f1 fw9">{entries}</div>
    </div>
  );
};

export default Rank;
