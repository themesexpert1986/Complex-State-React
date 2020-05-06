import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const nameField = event.target.name;

    setContact(prev => {
      if (nameField === "fName") {
        return {
          fName: newValue,
          lName: prev.lName,
          email: prev.email
        };
      } else if (nameField === "lName") {
        return {
          fName: prev.fName,
          lName: newValue,
          email: prev.email
        };
      } else if (nameField === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
