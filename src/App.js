import logo from './logo.svg';
import './App.css';
import We from './Component/welcome'
import Greet from './Component/Greet'
import LoginControl from './Component/Conditional/Conditon'
import LifeCycle from './Component/Lifecycle';


function App() {
  return (
    <div className="App">
     <We />
     <Greet />
     <LoginControl />
   <LifeCycle text='10' />

    </div>
  );
}

export default App;
