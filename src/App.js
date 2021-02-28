import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
let style = {
      border: "2px solid red",
      padding: "10px",
      margin: "30px",
      whiteSpace: "nowrap"
    };
    let pStyle = {
      backgroundColor: "white",
      color: "red",
      margin: "10px 10px",
      borderRadius: "5px",
      padding: "10px"
    }

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div sty>
          <h1>Practice Counter: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
        <div>
          <Users></Users>
        </div>
      </header>
    </div>
  );

  function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    return (
      <div>
        <h3>Dynamic Users count: {users.length}</h3>
        {
          users.map(user => {
            return <div style={style}>
              <h2>Name: {user.name}</h2>
              <h3>Email: {user.email}</h3>
              <p style={pStyle}>{user.company.catchPhrase}</p>
            </div>
          })
        }
      </div>
    )
  }
}

export default App;
