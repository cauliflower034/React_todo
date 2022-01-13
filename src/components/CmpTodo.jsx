import React from "react";

export const CmpTodo = (props) => {
  const { cmp, onBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {cmp.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
