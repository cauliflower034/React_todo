import React from "react";

export const InputTodo = (props) => {
  const { TodoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODO入力" value={TodoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
