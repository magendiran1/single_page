import React, { useState, useEffect } from 'react';

export const LearnUseEffect = () => {


    const [fistState, secState] = useState({
        name: "Mage",
        age: 25,
        address: "139,old bank street",
        statue: "single",
        gender: "Male",
        Occupation: "IT"

    })
    const {name,age,Occupation,statue}=fistState

    useEffect(()=>{
        console.log("Running UseEffect")
        setTimeout(()=>{
        secState({name:'Magendiran',age:25,statue:"ready to mingle",Occupation:"Farmer"})}
        ,5000)
      

    },[])
    return(
    
        <div>
<h1> i am {name} and my age is {age} and my working as {Occupation} and i am {statue}</h1>
        </div>
    )

}