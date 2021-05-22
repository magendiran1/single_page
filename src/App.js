import logo from './logo.svg';
import './App.css';
import We from './Component/welcome'
import Greet from './Component/Greet'
import LoginControl from './Component/Conditional/Conditon'
import LifeCycle from './Component/Lifecycle';
import Ref from './Component/Ref';
import WrapperComponent from './Component/HOC/WrapperComp';
import Comps3 from './Component/Context/3comps';
import GET from  './Axios/Get'
import Comp2 from './Component/Context/2comp';
import CommonFile from './NewScreen/CommonFile'


function App() {
  return (
    <div className="App">
     <We />
     <Greet />
     <LoginControl />
   <LifeCycle text='10' />
<WrapperComponent />
<Ref /> 
<Comps3 />
<GET />
<Comp2 />
<CommonFile />
    </div>
  );
}

export default App;
