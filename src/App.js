import './App.css';
import './components/default.css';
import './cssFiles/main.css';
import { Alert } from './components/Alert'
function App() {
  return (
    <div className="App">
      <Alert  severity="success" alertMsg="Task Successful"/>
      <div><img src="src/assets/alertIcons/info.png" className="imgCLass" alt="dasd siddharthvikram/fabui"/>
      <img src="src/assets/ButtonIcons/home.svg" alt="asfasf" className="imgCLass"/>
      </div>
    </div>

  );
}
export default App;

