'use client'
//style
import styles from "./indicators.module.scss";
//components and hooks
import { useContext } from "react";
import { AppContext } from "../AppContext";

function Indicators() {

    const pages = [1, 2, 3, 4];
    const { info, setInfo } = useContext(AppContext);

    return (
        <>
            {
                pages?.map(elemento => <button className={elemento === info.page ? styles.buttonSelected : styles.button} key={elemento}> {elemento} </button>)
            }
        </>
    )
}

export default Indicators;