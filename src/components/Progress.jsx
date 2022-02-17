import React from "react";

export const Progress = (props) => {
  const { Value } = props;
  return (
    <div className="progress-area">
      進捗度:
      <progress id="myProgress" value={Value} max="100">
        0%
      </progress>
      {Value}%
    </div>
  );
};
