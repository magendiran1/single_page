import React ,{useEffect, useRef} from 'react';


const Ref = () => {

const InputRef = useRef(null)

function alertMessage() {
    alert(InputRef.current.value)
}

useEffect(()=>{
InputRef.current.focus();
},[])

useEffect (alertMessage,[])


    return (
        <div>
            <div>
                <span>First Name:</span>
                <input ref={InputRef} type="text" />
            </div>

            <div>
                <span>Last Name:</span>
                <input type="text" />
            </div>
            <div>
                <span>Age:</span>
                <input type="number" />
            </div>
            <div>
               
                <input type="submit" value="submit" onClick={()=>alertMessage()} />
            </div>
        </div>
    )
}

export default Ref;