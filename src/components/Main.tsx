import React from "react";
import { TodoList } from "../App";

type MainType = {
  showTodoList: TodoList | undefined;
  handleChangeActive: (id: string) => void;
  type: string;
};

function Main({ showTodoList, handleChangeActive, type }: MainType) {
  return (
    <main className="layout__main">
      <ul>
        {showTodoList?.map((todo) => {
          return (
            <li
              key={todo.id}
              onClick={() => {
                handleChangeActive(todo.id);
              }}
            >
              <input type="checkbox" readOnly checked={todo.active} />
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
