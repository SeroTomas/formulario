//styles
import style from './selectYourPlan.module.scss';
//components and hooks
import React, { useState } from 'react'
import PlanSelector from './PlanSelector/PlanSelector'
import Switch from '@mui/material/Switch';
import arcadeIcon from '../../../../public/icon-arcade.svg';
import advancedIcon from '../../../../public/icon-advanced.svg';
import proIcon from '../../../../public/icon-pro.svg';

function SelectYourPlan() {

    const [plan, setPlan] = useState(null);
    const [toggle, setToggle] = useState(true);
    const prices = {
        monthly: {
            arcade: 9,
            advanced: 12,
            pro: 15
        },
        yearly: {
            arcade: 90,
            advanced: 120,
            pro: 150
        }
    };

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleChange = () => {
        toggle ? setPlan(prices.monthly) : setPlan(prices.yearly);
    };

    const handleToggle = (e) => {
        const value = e.target.value;
        console.log(value)
    };

    return (
        <>
            <div className='infoContainer'>
                <h2 >Select your plan</h2>
                <div className='text'>
                    <p>You have the option of monthly or </p>
                    <p>yearly billing</p>
                </div>
            </div>
            <div>
                <PlanSelector icon={arcadeIcon} title={"Arcade"}/>
                <PlanSelector icon={advancedIcon} title={"Advanced"}/>
                <PlanSelector icon={proIcon} title={"Pro"}/>
            </div>
            <div>
                <p>Monthly</p>
                <Switch onChange={handleToggle}/>
                <p>Yeraly</p>
            </div>
        </>
    )
}

export default SelectYourPlan