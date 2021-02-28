import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Samin", "Sakib", "Jamal"];
  const jobs = ["Programmer", "Cricketer", "Footballer"];
  const persons = [
    { name: "Samin", job: "Programmer" },
    { name: "Sakib", job: "Cricketer" },
    { name: "Jamal", job: "Footballer" }
  ];
  return (
    <div className="App">
      <header className="App-header">
        { persons.map( person => <MyComponentCard person= {person}></MyComponentCard>)}
      </header>
    </div>
  );

  function MyComponentCard(props) {
    let style = {
      border: "2px solid red",
      margin: "10px",
      width: "33%", 
    };
    let pStyle = {
      backgroundColor: "white",
      color: "red",
      margin: "10px 10px",
      borderRadius: "5px",
      padding: "10px"
    }
    let {name , job} = props.person;
    return (
      <div style={style}>
        <h2>Name: {name}, I am a {job}</h2>
        <p style={pStyle}>{job} of the Earth</p>
      </div>
    );
  }
}

export default App;
