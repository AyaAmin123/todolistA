import React, { useState } from "react";
import "../../style.css";
import FeatherIcon from "feather-icons-react";
const TodosAddForm = (props) => {
  const [nweaddTodo, setnweaddTodo] = useState("");
  return (
    <div className="todos-form">
      <div className="todos-form_icon">
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="اضف مهمة جديدة ..."
          onChange={(e) => {
            setnweaddTodo(e.target.value);
          }}
          value={nweaddTodo}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          disabled={nweaddTodo.trim() ? false : true}
          onClick={() => {
            props.addTodoHandler(nweaddTodo);
            setnweaddTodo("");
          }}
        >
          اضافة
        </button>
      </div>
    </div>
  );
};

export default TodosAddForm;
