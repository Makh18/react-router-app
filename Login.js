import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export default function Login() {

    const [clicked, setClicked] = useState(false)

    if (clicked === false) {
        return (
            <div>
                <p>Click here to login</p>
                <button onClick={() => setClicked(true)}>Log in</button>
            </div>
        )
    } else {
        return (
            <Redirect to="/admin" />
        )
    }
    
}
