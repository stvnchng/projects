import "./App.css";
import Dropdown from "./components/Dropdown";

export default function App() {
  // MODIFY THESE ARRAYS TO SEE THEM IN ACTION
  const items = ["Kevin", "Gore", "Sanders", "Wellington", "David"];
  const ages = ["Twenty", "Twenty one", "Twenty one and a half", "Twenty two"];

  //TODO: make a live demo and allow user input to create dropdown options
  return (
    <div className="App">
      <Dropdown label="Tag" items={items} multiple />
      <Dropdown label="Age" items={ages} />
    </div>
  );
}
