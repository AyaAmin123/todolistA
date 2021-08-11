import React from "react";
import Todo from "./Todo";
import "../../style.css";
const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.todos.map((todo) => {
        return (
          <Todo
            deleteTodo={props.deleteTodo}
            changeTodoCompletion={props.changeTodoCompletion}
            key={todo.id}
            todo={todo}
          />
        );
      })}
      {props.todos.length === 0 ? (
        <h3 className="no-todos"> لا توجد مهام حالية...</h3>
      ) : null}
    </div>
  );
};

export default Todos;
