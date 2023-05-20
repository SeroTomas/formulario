import React, {useContext} from 'react';
import { AppContext } from '@/components/AppContext';


function Plan({infoPlan}) {

  const {info, setInfo} = useContext(AppContext);
  const {selection, type, price} = infoPlan;

  return (
    <div>
      <div>
        <h2>{`${selection} (${type})`}</h2>
        <button>Change</button>
      </div>
      <p>{`$${price}/${type === "monthly" ? "mo" : "yr"}`}</p>
    </div>
  )
}

export default Plan