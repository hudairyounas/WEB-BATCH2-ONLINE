import React from "react";

const Footer = () => {
  let arr = ["h1", "h2", "h3", "h4", "h5"];

  let users = [
    {
      name: "Ali",
      email: "ALI@gmail.com",
    },
    {
      name: "Ahmed",
      email: "ALI@gmail.com",
    },
    {
      name: "Arslan",
      email: "ALI@gmail.com",
    },
    {
      name: "Arslan",
      email: "ALI@gmail.com",
    },
    {
      name: "Arslan",
      email: "ALI@gmail.com",
    },
    {
      name: "Arslan",
      email: "ALI@gmail.com",
    },
  ];

  return (
    <>
      <table style={{ width: "100%" }}>
        <tr>
          <td>Name</td>
          <td>email</td>
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
      {/* {
      arr.map((item) => {
        return (
          <h1>{item}</h1>
        )
      })
    } */}
    </>
  );
};

export default Footer;
