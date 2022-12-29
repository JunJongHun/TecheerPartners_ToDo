import React from "react";
import { TodoList } from "../App";

type MainType = {
  showTodoList: TodoList | undefined;
  handleChangeActive: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

function Main({
  showTodoList,
  handleChangeActive,
  handleDeleteTodo,
}: MainType) {
  return (
    <main className="layout__main">
      <ul>
        {showTodoList?.map((todo) => {
          return (
            <>
              <li
                key={todo.id}
                onClick={() => {
                  handleChangeActive(todo.id);
                }}
              >
                <input type="checkbox" readOnly checked={todo.active} />
                <span>{todo.text}</span>
              </li>
              <button
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              >
                삭제
              </button>
            </>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
