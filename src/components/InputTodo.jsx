import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, delclick } = props;
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
        <button onClick={delclick}>一括削除</button>
      </div>
    </>
  );
};
