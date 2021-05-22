import React from 'react';
import Hoc from './Hoc'


const WrapperComponent1 =(props)=>{
return(
    <div>
<button >Number {props.count}</button>
    </div>
)

}

const WrapperComponent = Hoc(WrapperComponent1);
export default WrapperComponent;
