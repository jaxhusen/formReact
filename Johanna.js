import React from 'react'
import Axhusen from './Axhusen';

const people = [
    { id: 1, name: "Johanna", age: 27 },
    { id: 2, name: "Ewelina", age: 23 },
    { id: 3, name: "Kristoffer", age: 24 },
    { id: 4, name: "Axl", age: 26 }
];

function Johanna() {

    const handleClick = (e) => {
        console.log(e.target)
        e.target.classList.add('done')
    }

    return (
        <ul>
            {
                people.map(people => (
                    people.id % 2 === 0
                        ? <Axhusen key={people.id} peep={people} handleClick={handleClick} class="" />
                        : <Axhusen key={people.id} peep={people} handleClick={handleClick} class="HEJ" />
                ))
            }
        </ul>
    )
}

export default Johanna


//people.map(people => (<Axhusen key={people.id} peep={people} handleClick={handleClick}/>














