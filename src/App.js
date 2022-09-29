import logo from './logo.svg';
import './App.css';
import "animate.css/animate.min.css";
import Card from './componets/Card';
function App() {
  return (
  
  <div>
    <h1 className="animate__animated animate__fadeInLeft animate__delay-faster ">An animated element</h1>
    <Card className="animate__animated animate__fadeInLeft animate__delay-faster " ></Card>
  </div>
  );
}

export default App;
