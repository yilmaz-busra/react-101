import React from "react";

function Header({ number, increment }) {
  console.log("Header Component Re-render");
  return (
    <div>
      Header-{number}
      <br />
      <br />
      <button onClick={increment}>Click</button>
      {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  );
}

export default React.memo(Header);
