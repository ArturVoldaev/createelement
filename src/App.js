import React, { useState } from 'react';
import './App.css';

function App() {
  const h1 = React.createElement('h1', {}, 'unit_08');

  const h2 = React.createElement('h2', {'style':{
    'color': 'orange',
  }}, 'header 2');

  const p = React.createElement('p', {'style':{
    'color': 'red',
  }}, 'this is p');

  const input = React.createElement('input',{'defaultValue': 55}, )

  const p1 = React.createElement('p', {}, 'hi');

  const p2 = React.createElement('p', {}, 'world');

  const div = React.createElement('div', {'className':'text-grey'}, p1, p2);



  let ref = React.createRef();

  let [m,setM] = useState([]);



  function getValueInput(evt) {


    evt.preventDefault();
    const cE = React.createElement;
    let value = ref.current.value;
    let liItem = [...m, cE('li', {'key': value}, value)];
    
    if (ref.current.value !== '') {
      setM(liItem);
      ref.current.value =''
    } else {
      return false;
    }
  }



  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}

      <form action="">
        <input ref={ref} type="text" />
        <button onClick={getValueInput}>получить значение</button>
      </form>

      <ul>
        {m}
      </ul>

    </>
  );

  
}

export default App;
