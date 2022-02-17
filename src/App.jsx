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
  const [allCount, setAllCount] = useState(0);
  const [cmpCount, setCmpCount] = useState(0);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  useEffect(() => {
    setVal(allCount === 0 ? 0 : keisan());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCount]);

  const keisan = () => {
    const V = (100 * cmpCount) / allCount;
    return V.toFixed(0);
  };

  const allDelete = () => {
    const DeleteAll = () => {
      setcmp([]);
      setincmp([]);
      setAllCount(0);
      setCmpCount(0);
    };
    const DeleteIncmp = () => {
      setincmp([]);
      setAllCount(allCount - incmp.length);
    };
    const DeleteCmp = () => {
      setcmp([]);
      setAllCount(allCount - cmp.length);
      setCmpCount(0);
    };
    const pop = prompt(
      "どの範囲を削除するか入力してください(0:全て 1:未完了のみ 2:完了のみ)"
    );
    pop === "0"
      ? DeleteAll()
      : pop === "1"
      ? DeleteIncmp()
      : pop === "2"
      ? DeleteCmp()
      : alert("正常に処理されませんでした");
  };

  const onClickAdd = () => {
    if (TodoText === "") return;
    let Flag = false;
    incmp.forEach((text) => {
      if (text === TodoText) {
        Flag = true;
      }
    });
    cmp.forEach((text) => {
      if (text === TodoText) {
        Flag = true;
      }
    });

    if (Flag) {
      alert("文字が重複しています");
    } else {
      const newTodos = [...incmp, TodoText];
      setincmp(newTodos);

      setAllCount(allCount + 1);
    }
    setTodoText("");
  };

  const onClickdel = (index) => {
    const newTodos = [...incmp];
    newTodos.splice(index, 1);
    setincmp(newTodos);

    setAllCount(allCount - 1);
  };

  const onClickCmp = (index) => {
    const newincmpTodos = [...incmp];
    newincmpTodos.splice(index, 1);
    setincmp(newincmpTodos);

    const newcmpTodos = [...cmp, incmp[index]];
    setcmp(newcmpTodos);

    setCmpCount(cmpCount + 1);
  };

  const onClickBack = (index) => {
    const newcmpTodos = [...cmp];
    newcmpTodos.splice(index, 1);

    const newincmpTodos = [...incmp, cmp[index]];
    setcmp(newcmpTodos);
    setincmp(newincmpTodos);

    setCmpCount(cmpCount - 1);
  };
  return (
    <>
      <InputTodo
        todoText={TodoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        delclick={allDelete}
      />

      <Progress Value={Val} />

      <IncmpTodo incmp={incmp} onCmp={onClickCmp} onDel={onClickdel} />

      <CmpTodo cmp={cmp} onBack={onClickBack} />
    </>
  );
};
