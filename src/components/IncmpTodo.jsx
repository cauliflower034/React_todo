import React from "react";

export const IncmpTodo = (props) => {
  const { incmp, onCmp, onDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incmp.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onCmp(index)}>完了</button>
              <button onClick={() => onDel(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
