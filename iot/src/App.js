import logo from './logo.svg';
import './App.css';
import Caixa from './components/caixa';
import Circulo from './components/circulo/circulo';

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
        <Caixa/>
        <Circulo/>
        <Circulo/>
      </header>
     
    </div>
  );
}

export default App;
