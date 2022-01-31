import React, { useState, useEffect } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncmpTodo } from "./components/IncmpTodo";
import { CmpTodo } from "./components/CmpTodo";
import { Progress } from "./components/Progress";

export const App = () => {
  const [TodoText, setTodoText] = useState("");
  const [incmp, setincmp] = useState([]);
  const [cmp, setcmp] = useState([]);
  const [Val, setVal] = useState(0.0);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const progress_set = () => {
    let allcnt = 0;
    let cmpcnt = 0;
    useEffect(() => {
      incmp.map(() => allcnt++);
      cmp.map(() => allcnt++);
      cmp.map(() => cmpcnt++);
      setVal(allcnt === 0 ? 0 : keisan());
      console.log(allcnt, cmpcnt, Val);
    }, [incmp]);

    const keisan = () => {
      const V = (100 * cmpcnt) / allcnt;
      return V.toFixed(0);
    };

    // return (
    //   <div className="progress-area">
    //     進捗度:
    //     <progress id="myProgress" value={val} max="100">
    //       0%
    //     </progress>
    //     {val}%
    //   </div>
    // );
  };

  const allDelete = () => {
    // const pop = prompt("何を消す?", "here");
    // console.log(pop);
    // const allTodods = [...incmp,...cmp];
    // console.log(allTodods);
    setincmp([]);
    setcmp([]);
  };

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
        delclick={allDelete}
        setVal={progress_set}
      />

      <Progress Setpro={progress_set} Value={Val} />

      <IncmpTodo incmp={incmp} onCmp={onClickCmp} onDel={onClickdel} />

      <CmpTodo cmp={cmp} onBack={onClickBack} />
    </>
  );
};
