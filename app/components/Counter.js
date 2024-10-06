"use client";
import React from "react";
import { useState } from "react";
const Counter = ({ users }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="m-10 bg-orange-500"
        onClick={() => setCount((pre) => pre + 1)}
      >
        {count}
      </button>
      <p>{users.length}</p>
    </>
  );
};

export default Counter;
