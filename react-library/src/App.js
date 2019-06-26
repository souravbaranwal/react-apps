import React from 'react';
import './App.scss';
import Button from './Components/Button';

function App() {
  return (
   <>
    <Button label = 'Home' type= 'primary'/>
    <Button label = 'Contact Us' type= 'secondary'/>
    <Button label = 'About Us' type= 'primary' size= 'small'/>
    <Button/>
   </>
  );
}

export default App;
