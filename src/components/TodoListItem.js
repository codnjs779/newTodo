import React, { useState } from "react";
import "./TodoListItem.css";
import { RiCheckboxBlankLine } from "react-icons/ri";

const TodoListItem = ({ todo }) => {
  const { text } = todo;

  return (
    <div className="TodoListItem">
      <div className="check">
        <RiCheckboxBlankLine />

        <div className="todoText">{text}</div>
      </div>

      <div className="remove">⛔</div>
    </div>
  );
};

export default TodoListItem;
