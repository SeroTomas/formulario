//styles
import style from './selectYourPlan.module.scss';
//components and hooks
import React from 'react'
import PlanSelector from './PlanSelector/PlanSelector'
import Switch from '@mui/material/Switch';
import arcadeIcon from '../../../../public/icon-arcade.svg';
import advancedIcon from '../../../../public/icon-advanced.svg';
import proIcon from '../../../../public/icon-pro.svg';

function SelectYourPlan() {
    return (

        <div>
            <div>
                <h2 className='h2Title'>Select your plan</h2>
                <p className='pText'>You have the option of monthly or </p>
                <p className='pText'>yearly billing</p>
            </div>
            <div>
                <PlanSelector />
                <PlanSelector />
                <PlanSelector />
            </div>
            <div>
                <p>Monthly</p>
                <Switch/>
                <p>Yeraly</p>
            </div>
        </div>

    )
}

export default SelectYourPlan