import './App.css';
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import TricksterCalc from './components/trickstercalc';

function App() {
  return (
    <div>
      <Header></Header>
      <TricksterCalc></TricksterCalc>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
