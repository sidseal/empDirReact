import axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [people, setPeople]=React.useState([])

  React.useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=5").then(x=>setPeople(x.data.results))
  })

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {people.map(person=>{
          return(
          <h1>{person.name}</h1>
          )
        })}
      </header>
    </div>
  );
  
}

export default App;
