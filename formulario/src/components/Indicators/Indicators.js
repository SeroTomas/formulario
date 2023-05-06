'use client'
//hooks
import { useState } from "react";
//
import styles from "./indicators.module.scss";

function Indicators({ info, setInfo }) {

    const [pages, setPages] = useState([1, 2, 3, 4])
    const {page} = info;

    return (
        <>
            {
                pages?.map(elemento => <button className={elemento === page ? styles.buttonSelected : styles.button} key={elemento}> {elemento} </button>)
            }
        </>
    )
}

export default Indicators;