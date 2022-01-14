import "./App.css";
import Input from "../Input";
import { useState } from "react";
import RecipeDisplay from "../RecipeDisplay";
import logo from "../../cooklogo.png";
// import Banner from "../Banner";

function App() {
  const [userInput, setuserInput] = useState("");
  function handleuserInput(input) {
    console.log(userInput);
    setuserInput(input);
  }
  return (
    <div className="App">
      <div className="headingAndLogo">
        <h1>Happy Recipe Land</h1>
        <img src={logo} alt="logo here" />
      </div>
      {/* <Banner /> */}
      <Input onChange={handleuserInput} />
      <RecipeDisplay userInput={userInput} />
    </div>
  );
}

export default App;
