import React from "react";

function List({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo, i) => {
        if (todo.complete === true) {
          return (
            <li key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => {
                    const tempArray = [...todos];
                    tempArray[i].complete = false;
                    setTodos(tempArray);
                  }}
                />
                <span>{todo.task}</span>
              </div>
            </li>
          );
        } else {
          return (
            <li key={i}>
              <div>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => {
                    const tempArray = [...todos];
                    tempArray[i].complete = true;
                    setTodos(tempArray);
                  }}
                />
                <span>{todo.task}</span>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default List;
