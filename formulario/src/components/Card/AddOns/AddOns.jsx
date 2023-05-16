import React from 'react'
import CheckBox from './CheckBox/CheckBox'

function AddOns() {
    return (
        <>
            <div className='infoContainer'>
                <h2>Pick add-ons</h2>
                <div className='text'>
                    <p>Add-ons help enhance your gaming</p>
                    <p>experience.</p>
                </div>
            </div>
            <div>
                <CheckBox/>
                <CheckBox/>
                <CheckBox/>
            </div>
        </>
    )
}

export default AddOns