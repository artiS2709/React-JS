import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Count from './components/Count';
import ClassSimpleHandler from './components/ClassSimpleHandler';
import FunctionSimpleHandler from './components/FunctionSimpleHandler';
import EventBind from './components/EventBind';
import FouthApproachEventBindingInClassComp from './components/FouthApproachEventBindingInClassComp';
import ParentComp from './components/ParentComp';
import ParentMemoComp from './components/ParentMemoComp';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import LifecycleA from './components/LifecycleA';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <HoverCounter/>
      <ClickCounter/>
      <ParentMemoComp/>
      {/* <ParentComp/> */}
      <FouthApproachEventBindingInClassComp/>
      <EventBind/>
      <ClassSimpleHandler/>
      <FunctionSimpleHandler/>
      {/* <LifecycleA/> */}
      {/* <Count/> */}
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
