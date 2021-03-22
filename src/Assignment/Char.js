import React from 'react'

const Char = (props) => {
    const sytle = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign:'center'
    };
    return (
        <div style={sytle} onClick={props.clicked}>
<h2 >{props.character}</h2>
        </div>
    )
}

export default Char;