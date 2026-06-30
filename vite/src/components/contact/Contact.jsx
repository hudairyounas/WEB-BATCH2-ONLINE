import React, { useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Ali", age: 22, email: "ali@gmail.com" },
    { id: 2, name: "Osama", age: 21, email: "ali@gmail.com" },
    { id: 3, name: "Hassan", age: 25, email: "ali@gmail.com" },
    { id: 4, name: "Ahmad", age: 20, email: "ali@gmail.com" },
  ]);

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const addContacts = () => {

    if (!userName || !userAge || !userEmail) {
        return alert("Please fill all the fields");
    }


    setContacts([
      ...contacts,
      {
        id: contacts.length + 1,
        name: userName,
        age: userAge,
        email: userEmail,
      },
    ]);

    setUserName("")
    setUserAge("")
    setUserEmail("")
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="text"
        placeholder="Enter your age"
        onChange={(e) => setUserAge(e.target.value)}
        value={userAge}
      />
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
      />
      <button onClick={addContacts}>Add</button>
      <table border="2" width={"100%"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.email}</td>
                <td>
                    <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Contact;
