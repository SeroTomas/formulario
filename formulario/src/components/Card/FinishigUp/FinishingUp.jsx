import style from "./finishigUp.module.scss";
import React, { useContext } from 'react';
import { AppContext } from '@/components/AppContext';
import Sumatory from "./Sumatory/Sumatory";
import Resume from "./Resume/Resume";

function FinishingUp() {
    return (
        <>
            <div className="infoContainer">
                <h2>Finishing up</h2>
                <div className="text">
                    <p>Double-check everything looks OK</p>
                    <p>before confirming.</p>
                </div>
            </div>
            <Resume />
            <Sumatory />
        </>
    )
}

export default FinishingUp