import React from "react";

function List({ duty, setDuty, filtered }) {
  return (
    <div className="listdesign">
      <ul>
        {duty.map((item, i) => {
          if (filtered === "All") {
            if (item.complete === true) {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    //   bu islemi todo icerisnde olan li nin checkbox ını değiştirebilmek icin yazdik
                    onChange={() => {
                      const tempArray = [...duty];
                      tempArray[i].complete = false;
                      setDuty(tempArray);
                    }}
                    checked={true}
                  />
                  <span className="completed">{item.todo}</span>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    //   bu islemi todo icerisnde olan li nin checkbox ını değiştirebilmek icin yazdik
                    onChange={() => {
                      const tempArray = [...duty];
                      tempArray[i].complete = true;
                      setDuty(tempArray);
                    }}
                  />
                  <span>{item.todo}</span>
                </li>
              );
            }
          }
          if (filtered === "Active") {
            if (item.complete === false) {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    //   bu islemi todo icerisnde olan li nin checkbox ını değiştirebilmek icin yazdik
                    onChange={() => {
                      const tempArray = [...duty];
                      tempArray[i].complete = true;
                      setDuty(tempArray);
                    }}
                  />
                  <span>{item.todo}</span>
                </li>
              );
            }
          }

          if (filtered === "Completed") {
            if (item.complete === true) {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    //   bu islemi todo icerisnde olan li nin checkbox ını değiştirebilmek icin yazdik
                    onChange={() => {
                      const tempArray = [...duty];
                      tempArray[i].complete = true;
                      setDuty(tempArray);
                    }}
                    checked={true}
                  />
                  <span className="completed">{item.todo}</span>
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
}

export default List;
