import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [TodoText, setTodoText] = useState("");
  const [incmp, setincmp] = useState([]);
  const [cmp, setcmp] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (TodoText === "") return;
    const newTodos = [...incmp, TodoText];
    setincmp(newTodos);
    setTodoText("");
  };

  const onClickdel = (index) => {
    const newTodos = [...incmp];
    newTodos.splice(index, 1);
    setincmp(newTodos);
  };

  const onClickCmp = (index) => {
    const newincmpTodos = [...incmp];
    newincmpTodos.splice(index, 1);
    setincmp(newincmpTodos);

    const newcmpTodos = [...cmp, incmp[index]];
    setcmp(newcmpTodos);
  };

  const onClickBack = (index) => {
    const newcmpTodos = [...cmp];
    newcmpTodos.splice(index, 1);

    const newincmpTodos = [...incmp, cmp[index]];
    setcmp(newcmpTodos);
    setincmp(newincmpTodos);
  };
  return (
    <>
      <InputTodo
        todoText={TodoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incmp.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickCmp(index)}>完了</button>
                <button onClick={() => onClickdel(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {cmp.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
