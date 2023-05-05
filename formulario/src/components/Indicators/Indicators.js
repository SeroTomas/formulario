'use client'
//hooks
import { useState } from "react";
//
import styles from "./indicators.module.scss";

function Indicators() {
 
    const [pages, setPages] = useState(['1', '2', '3', '4'])

    return (<>
        {
            pages?.map(elemento => <button className={styles.button} key={elemento}> {elemento} </button>)

        }
    </>)
}

export default Indicators