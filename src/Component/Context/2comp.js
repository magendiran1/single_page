import React from 'react';
import Comp3 from './3comps';
import Comp1 from './1comp'

export default function comp2() {

 const   dark ={
    backgroundColor:"blue",
    color :"White",
    border:'2px'
    }


    return (
        <div>
            <Comp1.Provider value={dark}>
            <Comp3 />
               </Comp1.Provider>
          
        </div>
    )
}
