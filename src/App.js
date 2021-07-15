import './App.css';
import Info from "./info";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClciked = () => {
    setTitle("We now have a title");
  }

  const updateCounterClciked = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Data title = { title } count = { count }/>
      <button onClick = {updateTitleClciked}>Update Title</button>
      <button onClick = {updateCounterClciked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title : { props.title }</p>
      <p>Count : { props.count }</p>
    </div>
  );
}

export default App;
