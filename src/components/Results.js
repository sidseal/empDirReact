import React from "react";
import axios from 'axios';
import Search from "./Search"

function Results() {
    const [people, setPeople] = React.useState([])
    const [searchVal, setSearchVal] = React.useState([])

    React.useEffect(() => {
        axios.get("https://randomuser.me/api/?results=10&inc=name,phone,nat,email,picture").then(x => setPeople(x.data.results))
    }, [])

    function sortResults(){
        let newPeople = new Array(...people)
        newPeople.sort(function(a, b) {
            if (a.name.first > b.name.first) {
              return 1;
            }
            if (a.name.first < b.name.first) {
              return -1;
            }
            return 0;
          });
        setPeople(newPeople)

    }
    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        setSearchVal(event.target.value);
      };
    return (
        <>
        <Search handleSearchChange={handleInputChange}/>
        <p>{searchVal}</p>
        <div onClick={()=>sortResults()}
        className="results">
            {people.map(person => {
                console.log(person)
                return (
                    <h1 key={person.id}>  {person.name.first} {person.name.last}</h1>
                )

            })
            }</div>
</>
    )
}

export default Results;
