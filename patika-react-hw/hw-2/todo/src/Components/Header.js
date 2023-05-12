import React from "react";
import { useState } from "react";
function Header({ duty, setDuty }) {
  const [todos, setTodos] = useState({ complete: false, todo: " " });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (todos.todo === "") {
        alert("add task");
        return false;
      }

      setDuty([...duty, todos]);
      console.log(duty);
    }
  };
  return (
    <div>
      <h1>todos</h1>
      <div className="header-ib">
        <input
          name="todo"
          placeholder="What needs to be done?"
          value={todos.todo}
          onChange={(e) => {
            setTodos({ ...todos, [e.target.name]: e.target.value });
            //   inputa yeni değer girip todos state ine atıyoruz
          }}
          // enter ile veri gönderme
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default Header;
