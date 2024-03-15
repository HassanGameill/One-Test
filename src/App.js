import logo from './logo.svg';
import Tester from './Components/Tester.jsx';
import './App.css';

function App() {
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
        
        <Tester name="Hassan" des="Welcome Hassan" bg="red" Color="#fff"/>
        
        <Tester name="Hassan" des="Welcome Hassan" bg="green" Color="#fff"/>
        
        <Tester name="Hassan" des="Welcome Hassan" bg="#fff" Color="#222"/>
        
        <Tester name="Hassan" des="Welcome Hassan" bg="gray" Color="#fff"/>
        
        <Tester name="Hassan" des="Welcome Hassan" bg="yellow" Color="#222"/>
        
        <Tester name="Hassan" des="Welcome Hassan" bg="#222" Color="#fff"/>
        
      </header>
    </div>
  );
}

export default App;
