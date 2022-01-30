import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, delclick, setVal } = props;
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
        <button onClick={delclick}>一括削除</button>
      </div>
      {setVal()}
      {/* <div className="progress-area">
        進捗度:
        <progress id="myProgress" value="0" max="100">
          0%
        </progress>
      </div> */}
    </>
  );
};
