'use client'
// style
import style from "./personalInput.module.scss";
//components and hooks
import { useState, useEffect } from "react";
import { handleTypeError, handlePlaseHolder } from "@/utils/handlers";
import { AppContext } from "@/components/AppContext";
import { useContext } from "react";

function PersonalInput({ label, type, name}) {

    const handleChange = (event) => {
        const value = event.target.value;
        const errorValue = handleTypeError(name, value)
        setInfo({
            ...info,
            inputs:{
                ...inputs,
                [name]:value
            },
            errors:{
                ...errors,
                [name]:errorValue
            }
        });
    };

    const {info, setInfo} = useContext(AppContext);
    const {inputs, errors} = info;
    const [plaseHolder] = useState(handlePlaseHolder(name));

    return (
        <>
            <div className={style.inputContainer}>
                <div className={style.labelError}>
                    <label>{label}</label>
                    {
                        errors[name] ? <p>{errors[name]}</p> : null
                    }
                </div>
                <input type={type} name={name} placeholder={plaseHolder} onChange={handleChange} value={inputs[name]} />
            </div>
        </>
    )
}

export default PersonalInput;