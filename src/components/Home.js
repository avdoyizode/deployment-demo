import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
const Home = () => {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState("");
  const [name, setName] = useState("");
  const [usn, setusn] = useState("");

  const Handledata = (e) => {
    e.preventDefault();
    db.collection("userdata").add({ input, add, name, usn });
  };

  return (
    <div className="Body">
      <div className="body-container">
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Input</h5>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <h5>Hobbies</h5>
          <input
            type="text"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <h5>USN</h5>
          <input
            type="number"
            value={usn}
            onChange={(e) => setusn(e.target.value)}
          />

          <button onClick={Handledata} className="register">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
