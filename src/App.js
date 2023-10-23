import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1';
import Carray from './Carray';
import Cradiosel from './Components/Cradiosel';
import Cuseref from './Components/Cuseref';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';

function App() {
  return (
    <div className="App">
     <Comp1/>
     <Carray/>
     <Cradiosel/>
     <Cuseref/>
     <Comp2/>
     <Comp3/>
    </div>
  );
}

export default App;
