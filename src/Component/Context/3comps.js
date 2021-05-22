import React from 'react'
import Comp1 from './1comp'



export default function comps3() {
    return (
       
        
        <Comp1.Consumer>
            {
                (inputContext) => {
                    return (
                        <div>
                            <h1>Context Use </h1>
                            <button style={inputContext.light}>Context button</button>
                          
                        </div>
                    )
                }
            }
        </Comp1.Consumer>
       

    )
}
