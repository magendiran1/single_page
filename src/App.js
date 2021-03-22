import logo from './logo.svg';
import './App.css';
import We from './Component/welcome'
import Greet from './Component/Greet'
import LoginControl from './Component/Conditional/Conditon'


function App() {
  return (
    <div className="App">
     <We />
     <Greet />
     <LoginControl />
   

    </div>
  );
}

export default App;
