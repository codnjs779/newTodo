import React from "react";
import "./TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <h1 className="title">할일목록</h1>
      <div className="contents">{children}</div>
    </div>
  );
};

export default TodoTemplate;
