import "./App.css";
import Input from "../Input";
import { useState } from "react";
import RecipeDisplay from "../RecipeDisplay";
import logo from "../../cooklogo.png"

function App() {
  const [userInput, setuserInput] = useState("");
  function handleuserInput(input) {
    console.log(userInput);
    setuserInput(input);
  }
  return (
    <div className="App">
      <h1>Definitely not a recipe API LOL</h1>
      <img src={logo} alt="logo here"/>
      <Input onChange={handleuserInput} />
      <RecipeDisplay userInput={userInput} />
    </div>
  );
}

export default App;
