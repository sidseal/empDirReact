import axios from 'axios';
import React from 'react';
// import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Results from "./components/Results";
import SearchBar from "./components/Search"
import './App.css';

function App() {

  const [people, setPeople]=React.useState([])

  React.useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=5").then(x=>setPeople(x.data.results))
  },[])

 
  return (
    <div>
      <Wrapper>
      <Header />
        <SearchBar />
        <Results />

      </Wrapper>
    </div>
  
  )}

export default App;
