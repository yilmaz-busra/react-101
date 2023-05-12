import React from "react";

function Footer({ setFiltered, duty, setDuty }) {
  const onClickk = (e) => {
    setFiltered(e.target.name);
  };
  return (
    <div className="btn-style">
      <button name="All" onClick={onClickk}>
        All
      </button>
      <button name="Active" onClick={onClickk}>
        Active
      </button>
      <button name="Completed" onClick={onClickk}>
        Completed
      </button>
      <button
        onClick={() => {
          const newArray = duty.filter((item) => item.complete === false);
          setDuty(newArray);
        }}
      >
        Clear Completed{" "}
      </button>
    </div>
  );
}

export default Footer;
