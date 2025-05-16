import './App.css';
import Scenario4 from './Component/Scenario4';
import Scenario5 from './Component/Scenario5';
import Scenario6 from './Component/Scenario6';
import Scenario1 from './Component/Scenario1';
import Scenario2 from './Component/Scenario2';
import Scenario3 from './Component/Scenario3';

function App() {
  return (
    <div className="App">
      <Scenario1 text="I'm a tooltip!">
        <button>Hover me</button>
      </Scenario1>
      <Scenario4 />
      <Scenario5 />
      <Scenario2 />
      <Scenario6 />
      <Scenario3 />
    </div>
  );
}

export default App;
