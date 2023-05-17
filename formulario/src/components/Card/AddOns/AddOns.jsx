//style
import style from './addOns.module.scss';
import React, { useContext } from 'react';
import CheckBox from './CheckBox/CheckBox';
import { AppContext } from '@/components/AppContext';

function AddOns() {

    const { info, setInfo } = useContext(AppContext);

    // en esta variable obtenemos si el plan que se selecciono
    // es mensual o anual
    const planType = info.plan.type;

    //constantes
    const { ONLINE_SERVICE, LARGER_STORAGE, CUSTOM_PROFILE } = {
        ONLINE_SERVICE: { title: "Online service", text: "Acces to multiplayer games" },
        LARGER_STORAGE: { title: "Larger storage", text: "Extra 1TB of cloud save" },
        CUSTOM_PROFILE: { title: "Customizable profile", text: "Custom theme on your profile" }
    }

    const type = {
        //definimos que precios tienen los addons
        //dependiendo del plan
        monthly: {
            [ONLINE_SERVICE.title]: 1,
            [LARGER_STORAGE.title]: 2,
            [CUSTOM_PROFILE.title]: 2
        },
        yearly: {
            [ONLINE_SERVICE.title]: 10,
            [LARGER_STORAGE.title]: 20,
            [CUSTOM_PROFILE.title]: 20
        }
    }

    return (
        <>
            <div className='infoContainer'>
                <h2>Pick add-ons</h2>
                <div className='text'>
                    <p>Add-ons help enhance your gaming</p>
                    <p>experience.</p>
                </div>
            </div>
            <div className={style.checkContainer}>
                <CheckBox title={ONLINE_SERVICE.title} text={ONLINE_SERVICE.text} price={type[planType][ONLINE_SERVICE.title]} />
                <CheckBox title={LARGER_STORAGE.title} text={LARGER_STORAGE.text} price={type[planType][LARGER_STORAGE.title]} />
                <CheckBox title={CUSTOM_PROFILE.title} text={CUSTOM_PROFILE.text} price={type[planType][CUSTOM_PROFILE.title]} />
            </div>
        </>
    )
}

export default AddOns