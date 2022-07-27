import React from "react";
import "./Card.css";
function Card() {
  const data = [
    {
      id: 1,
      title: "Weekly",
      email: "ansab@gmail.com",
    },
    {
      id: 2,
      title: "Monhly",
      email: "ansab@gmail.com",
    },
    {
      id: 3,
      title: "card",
      email: "ansab@gmail.com",
    },
    {
      id: 4,
      name: "ansab",
      email: "ansab@gmail.com",
    },
    {
      id: 5,
      name: "ansab",
      email: "ansab@gmail.com",
    },
    {
      id: 6,
      name: "ansab",
      email: "ansab@gmail.com",
    },
    {
      id: 7,
      name: "ansab",
      email: "ansab@gmail.com",
    },
    {
      id: 8,
      name: "ansab",
      email: "ansab@gmail.com",
    },
    {
      id: 9,
      name: "ansab",
      email: "ansab@gmail.com",
    },
    {
      id: 10,
      name: "ansab",
      email: "ansab@gmail.com",
    },
  ];
  return (
    <>
      {data.map((value) => {
        return (
          <div className="App">
            <h4 key={value.id}>{value.id}</h4>
            <h1>{value.email}</h1>
            <h2>{value.title}</h2>
          </div>
        );
      })}
    </>
  );
}

export default Card;
