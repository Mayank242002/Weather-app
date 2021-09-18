import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';

function App() {
  return (
    <div>
      <h1 className="heading">Weather App </h1>
      <p className="para"> A weather app to find the weather of any City of the world.</p>
  <Weather/>
    </div>
  );
}

export default App;
