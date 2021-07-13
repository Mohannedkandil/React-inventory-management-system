import logo from './logo.svg';
import './App.css';
import Info from "./info";

function App() {
  return (
    <div className="App">
      <AddItem />
      <AddItem />
      <AddItem />
    </div>
  );
}



function AddItem(){
  const value = 'Mohanad kandil';
  return (
    <form>
      <Info />
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form" value={value}/>
    </form>
  );
}
export default App;
