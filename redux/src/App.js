import logo from './logo.svg';
import './App.css';
import Interval from './components/Interval';
import Average from './components/Average';
import Sum from './components/Sum';
import Sortition from './components/Sortition';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Interval></Interval>
      </div>
      <div className='linha'>
        <Average></Average>
        <Sum></Sum>
        <Sortition></Sortition>
      </div>

    </div>
  );
}

export default App;
