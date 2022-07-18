import React, { useState } from 'react';
import axios from 'axios'

function Get() {

    const [post, setPost] = useState('')

    const displayData = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(ImageData => {
                debugger;
                setPost(ImageData.data)
                console.log(ImageData)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // const element = post && post.length > 0 && post.map((postData) => {
    //         return (<li>{postData.name}</li>)
    //     });

    

    debugger;
    return (
        <div>
            <button onClick={() => displayData()}> GET METHOD </button>

            <ul>
                { post && post.length > 0 && post.map((postData) => {
            return (<li>{postData.name}</li>)
        })}
            </ul>
        </div>
    )

}

export default Get;