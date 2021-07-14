import './App.css';
import Info from "./info";

function App() {
  return (
    <div className="App">
      <AddItem text = "Tim" number={44}/>
      <AddItem />
      <AddItem />
    </div>
  );
}



function AddItem(props){
  const value = props.text;
  return (
    <form>
      <Info text="Mohanad"/>
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form" value={value}/>
      <p>{props.number}</p>
    </form>
  );
}
// default props with the function name
AddItem.defaultProps = {
  number: 2,
}
export default App;
