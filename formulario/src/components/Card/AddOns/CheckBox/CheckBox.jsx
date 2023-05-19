//style
import style from "./checkbox.module.scss";
import React, { useContext, useState } from 'react';
import { AppContext } from '@/components/AppContext';
import Checkbox from '@mui/material/Checkbox';

function CheckBox({ title, text, price }) {

    const { info, setInfo } = useContext(AppContext);
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        const isChecked = !checked
        setChecked(isChecked);
        if (isChecked) {
            setInfo({
                ...info,
                addOns: {
                    ...info.addOns,
                    [title]: price
                }
            });
        } else {
            let newAddOns = { ...info.addOns };
            delete newAddOns[title];
            setInfo({
                ...info,
                addOns: newAddOns
            });
        }
    };


    return (
        <button onClick={handleClick} className={checked ? style.checkedButton :style.checkButton}>
            <input type="checkbox" checked={checked}/>
            <div className={style.info}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={style.priceText}>
                <p>+${price}/{info.plan.type === "monthly" ? "mo" : "yr"}</p>
            </div>

        </button>
    )
}

export default CheckBox