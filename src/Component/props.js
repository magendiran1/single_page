import React from 'react'
import State from './state'
function Props(props) {
    return (
        <div>
            <h1> Welcome {props.name}</h1>
        </div>
    )
}

export const Props1 = (props) => {
    return (

        <div>
            <State />
            <h1  > Welcome to Our Arrow function Mr {props.name}</h1>
        </div>)

}

export default Props;
