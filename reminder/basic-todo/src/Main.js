import React from "react";
import { useState } from "react";
function Main({ todos, setTodos }) {
  const [duty, setDuty] = useState({ complete: false, task: "" });
  return (
    <div>
      <input
        placeholder="görev gir"
        value={duty.task}
        onChange={(e) => {
          setDuty({ ...todos, task: e.target.value });
        }}
      />
      <button
        onClick={() => {
          if (duty.task === "") {
            return false;
          }
          setTodos([...todos, duty]);
        }}
      >
        Ekle
      </button>
    </div>
  );
}

export default Main;
