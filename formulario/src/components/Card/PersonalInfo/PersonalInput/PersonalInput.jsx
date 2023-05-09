'use client'

import style from "./personalInput.module.scss";
import { useState } from "react";
import { handleTypeError, handlePlaseHolder } from "@/utils/handlers";

function PersonalInput({ label, type, name }) {

    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);
        setError(handleTypeError(name, value))
    };

    const [plaseHolder] = useState(handlePlaseHolder(name));
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    return (
        <>
            <div className={style.inputContainer}>
                <div className={style.labelError}>
                    <label>{label}</label>
                    {
                        error ? <p>{error}</p> : null
                    }
                </div>
                <input type={type} name={name} placeholder={plaseHolder} onChange={(e) => { handleChange(e) }} value={input} />
            </div>
        </>
    )
}

export default PersonalInput;