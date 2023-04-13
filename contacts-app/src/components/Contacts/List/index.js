import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  console.log("filtered", filtered);
  return (
    <div>
      <input
        placeholder="filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filtered.map((contacts, i) => (
          <li key={i}>{contacts.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
