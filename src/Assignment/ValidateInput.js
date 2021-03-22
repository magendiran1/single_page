import React from 'react'

const validateInput = (props) => {


    // let  validatetext='Text to short';

    // if(props.ValidateInput>=5){
    //     validatetext='Text to Long'
    // }
    return (
        <div>

            {
                props.ValidateInput > 5 ?
                    <h1>Please Enter max  char</h1>
                    :
                    <h1>Please Enter char to short</h1>}
        </div>
    );
}

export default validateInput

