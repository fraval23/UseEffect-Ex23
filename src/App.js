import logo from './logo.svg';
import './App.css';
import Check1 from './Components/Check1';
import Users from './Components/Users';
import Parent from './Components/Parent';


function App() {
  return (
    <div className="App">
     
      {/* <Check1/> */}
      {/* <Users/> */}
      <Parent name="John Doe" location="Connecticut"/>
    </div>
  );
}


export default App;
