import './App.css';
import React, { useState } from 'react';
import Heading from './Heading';
import Buttons from './Buttons';
import Inputs from './Inputs';



function App() {

  const [heading, setHeading] = useState('Nic nie umiem');




  return (
    <div className="App">
      <Heading headingText={heading} />
      <Buttons newHeading={setHeading} />
      <Inputs />
    </div>
  );
}

export default App;


//zrob ButtonsPanel - przekazywanie danych z dziecka do rodzica 
//Stwóz input. Napisz skrypt który sprawi, że po kliknięciu w przycisk 'zmien tytuł' w nagłówku h1 pojawi się tekst, który jest wpisany w  inpucie
//jak pobrac wartosc z input https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

//load to github