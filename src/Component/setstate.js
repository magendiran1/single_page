import React, { useState } from 'react'

const Setstate = props => {

    const person1 = [
        { name: "max", Gender: "M" },
        { name: "mendy", Gender: "M" },
        { name: "Geetha", Gender: "F" }
    ]
    const [firststate, secondState] = useState(person1)

    const useStateChangename = () => {
        secondState(

            [
                { name: "timetowell maxxx", Gender: "Male" },
                { name: "mendy", Gender: "M" },
                { name: "Geetha", Gender: "F" }
            ]
        )
    }

    return (
        <div>
            <h4 onClick={useStateChangename}>
                Hi I am {firststate[0].name} and my gender is {firststate[0].Gender}
            </h4>
        </div>
    )
}

export default Setstate

