import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import TodoTemplate from "./components/TodoTemplate";
import Data from "./data";

function App() {
  const [todos, setTodos] = useState(Data);

  //new todolist
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  //local storage

  useEffect(() => {
    const getData = localStorage.getItem("Text");
    if (getData) {
      setTodos(JSON.parse(getData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Text", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
