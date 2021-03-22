// Here we are Going to Learn  How the JSX will Work 

// First we write with JSX Script 

import React from 'react'
// function JSXwork()

// {
// return <h1>This is With JSX</h1>
// }

function JSXwork()
{
return  React.createElement('div',null,React.createElement('h1',null,'This is Without JSX'))
}

export default JSXwork;