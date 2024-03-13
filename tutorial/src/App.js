import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Count from './components/Count';
// import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      {/* <LifecycleA/> */}
      <Count/>
      {/*<Message/>*/}
      {/*<Greetings name ="Arti" topic="functional component"><p>This is a chidren props</p></Greetings>
      <Greetings name ="Anmol"/>
      <Greetings name ="Pooja"/>
      <Welcome name="Coding" topic="class component"> 
        <p>This is also children props.</p>
  </Welcome>*/}
    </div>
  );
}

export default App;
