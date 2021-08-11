import React, { useState } from "react";
// import Todo from "../components/todos/Todo";
import "../style.css";
import Todos from "../components/todos/Todos";
import TodosAddForm from "../components/todos/TodosAddForm";
const TodoList = () => {
  const initalState = [
    { id: 1, title: "شراء مستلزمات", done: false },
    { id: 2, title: "شراء منتجات", done: true },
    { id: 3, title: "مشاهدة الكورس", done: false },
    { id: 4, title: "تجربة الكود", done: true },
  ];
  const [todos, settodos] = useState(initalState);
  const changeTodoCompletion = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      }
      return el;
    });
    settodos(newTodos);
  };
  const deleteTodo = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.filter((el) => el.id !== id);
    settodos(newTodos);
  };
  const addTodoHandler = (title) => {
    const curTodos = [...todos];
    curTodos.push({
      id: Date.now(),
      title: title,
      done: false,
    });
    settodos(curTodos);
  };
  const showOnlyNotDone = () => {};

  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodosAddForm addTodoHandler={addTodoHandler} />
          <Todos
            todos={todos}
            deleteTodo={deleteTodo}
            changeTodoCompletion={changeTodoCompletion}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
