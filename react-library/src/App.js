import React from "react";
import "./App.scss";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <Button label="Home" type="link" />
      <Button label="Contact Us" type="secondary" />
      <Button label="About Us" type="info" size="small" />
      <Button
        label="About Us"
        type="info"
        size="large"
        onClickHandler={() => alert("You CLicked Me!")}
      />
      <Button />
    </>
  );
}

export default App;
