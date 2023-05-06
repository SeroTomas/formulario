'use client'

import { useState } from "react";
import handlePlaseHolder from "@/utils/handlePlaseHolder";
import handleTypeError from "@/utils/handleTypeError";

function PersonalInput({ label, type, name }) {

    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);
        setError(handleTypeError(name, value))
    };

    const handleError = (value) => {
        
    }

    const [plaseHolder] = useState(handlePlaseHolder(name));
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    return (
        <>
            <div>
                <label>{label}</label>
                {
                    error ? <p>{error}</p> : null
                }
            </div>
            <input type={type} name={name} placeholder={plaseHolder} onChange={(e) => { handleChange(e) }} value={input} />
        </>
    )
}

export default PersonalInput;