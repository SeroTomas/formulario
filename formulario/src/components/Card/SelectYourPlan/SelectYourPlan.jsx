//styles
import style from './selectYourPlan.module.scss';
//components and hooks
import React, { useState, useContext } from 'react'
import PlanSelector from './PlanSelector/PlanSelector'
import Switch from '@mui/material/Switch';
import arcadeIcon from '../../../../public/icon-arcade.svg';
import advancedIcon from '../../../../public/icon-advanced.svg';
import proIcon from '../../../../public/icon-pro.svg';
import { AppContext } from '@/components/AppContext';

function SelectYourPlan() {
    
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
    
    const {info, setInfo} = useContext(AppContext);

    const [plan, setPlan] = useState(prices.monthly);
    const [checked, setChecked] = useState(false);
    const selected = useState('');

    const handleToggle = (e) => {
        const value = e.target.checked
        setChecked(value)
        handlePlanAndContext(value)
    };

    const handlePlanAndContext = (value) => {
        //esta funcion se encarga de modificar el estado plan
        //como tambien guardar la informacion en el estado global context
        const onYearly = () => {
            setPlan(prices.yearly);
            setInfo({
                ...info,
                plan:{
                    ...info.plan,
                    type:'yearly'
                }
            })
        }
        const onMonthly = () => {
            setPlan(prices.monthly);
            setInfo({
                ...info,
                plan:{
                    ...info.plan,
                    type:'monthly'
                }
            })
        }
        value ? onYearly() : onMonthly();
    }

    return (
        <>
            <div className='infoContainer'>
                <h2 >Select your plan</h2>
                <div className='text'>
                    <p>You have the option of monthly or </p>
                    <p>yearly billing</p>
                </div>
            </div>
            <div className={style.buttonsContainer}>
                <PlanSelector icon={arcadeIcon} title={"Arcade"} price={plan.arcade} selected = {selected}/>
                <PlanSelector icon={advancedIcon} title={"Advanced"} price={plan.advanced} selected={selected}/>
                <PlanSelector icon={proIcon} title={"Pro"} price={plan.pro} selected={selected}/>
            </div>
            <div className={style.switchContainer}>
                <p className={info.plan.type === "monthly" ? style.selected : null}>Monthly</p>
                <Switch
                    checked={checked}
                    onChange={handleToggle} />
                <p className={info.plan.type === "yearly" ? style.selected : null}>Yearly</p>
            </div>
        </>
    )
}

export default SelectYourPlan