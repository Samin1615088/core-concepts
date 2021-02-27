import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: 'Samin',
    job: 'coder'
  };

  let pStyle = {
    color: '#FC600A',
    backgroundColor: '#F7E0D4',
    borderRadius: "5px",
    padding: "10px"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={pStyle}>My React Paragraph. Created by {person.job} {person.name}</p>
      </header>
    </div>
  );
}

export default App;
