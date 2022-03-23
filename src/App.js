import logo from './BrandonTorres.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>My name is Brandon Torres and I'm going to master React!</code>
        </p> 
        <a
          className="App-link"
          href="https://github.com/TorresBrandon117"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
