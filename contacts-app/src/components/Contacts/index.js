import React from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";
import { useState, useEffect } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Büşra",
      phone_number: "323113",
    },
    {
      fullname: "kayra",
      phone_number: "545451",
    },
    {
      fullname: "azr",
      phone_number: "656565",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>CONTACTS</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
