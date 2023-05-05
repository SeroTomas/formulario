'use client'

import { useState } from "react"
import handlePlaseHolder from "@/utils/handlePlaseHolder"

function PersonalInput({label, type, name}) {

    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);
    };

    const handleError = () => {
        
    }

    const [plaseHolder] = useState(handlePlaseHolder(name));
    const [input, setInput] = useState(null);
    const [error, setError] = useState(null);

    return (
        <>
            <div>
                <label>{label}</label>
                <p>{}</p>
            </div>
            <input type={type} name={name} placeholder={plaseHolder} onChange={(e)=>{handleChange(e)}} value={input}/>
        </>
    )
}

export default PersonalInput;