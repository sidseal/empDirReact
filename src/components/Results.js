import React from "react";
import axios from 'axios';


function Results() {
    const [people, setPeople] = React.useState([])

    React.useEffect(() => {
        axios.get("https://randomuser.me/api/?results=5").then(x => setPeople(x.data.results))
    }, [])
    return (
        <div className="results">
            {people.map(person => {
                console.log(person)
                return (
                    <h1 key={person.id}>  {person.name.first} {person.name.last}</h1>
                )

            })
            })</div>

    )
}

export default Results;
