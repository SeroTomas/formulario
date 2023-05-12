import React from 'react'
import PlanSelector from './PlanSelector/PlanSelector'
import Switch from '@mui/material/Switch';

function SelectYourPlan() {
    return (

        <div>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <PlanSelector />
                <PlanSelector />
                <PlanSelector />
            </div>
            <div>
                <p></p>
                <Switch/>
                <p></p>
            </div>
        </div>

    )
}

export default SelectYourPlan