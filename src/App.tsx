import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { func } from "prop-types";
import { type } from "os";

export type TodoType = { text: string; active: boolean; id: string };
export type TodoList = TodoType[];

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<TodoList>([]);
  const [type, setType] = useState("ALL");
  // 할일 목록 입력받기
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 할일 목록 추가하기
  const handleAddTodo = () => {
    const newTodo: TodoType = { text: text, active: false, id: uuidv4() };
    setTodoList((pre) => [...pre, newTodo]);
    setText("");
  };

  // 할일 목록 active 바꾸기
  const handleChangeActive = (id: string) => {
    const data = todoList.map((todo) =>
      todo.id === id ? { ...todo, active: !todo.active } : todo
    );
    setTodoList(data);
  };

  const handleChangeType = (type: string) => {
    setType(type);
  };

  const handleDeleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  let showTodoList = getShowTodoList(todoList, type);

  return (
    <>
      <Layout>
        <Header handleChangeType={handleChangeType}></Header>
        <Main
          showTodoList={showTodoList}
          handleChangeActive={handleChangeActive}
          handleDeleteTodo={handleDeleteTodo}
        ></Main>
        <Footer
          text={text}
          handleChange={handleChange}
          handleAddTodo={handleAddTodo}
        ></Footer>
      </Layout>
    </>
  );
}

const getShowTodoList = (todoList: TodoList, type: string) => {
  if (type === "ALL") return todoList;
  else if (type === "ACTIVE")
    return todoList.filter((todo) => todo.active === true);
  else if (type === "INACTIVE")
    return todoList.filter((todo) => todo.active === false);
};

export default App;
