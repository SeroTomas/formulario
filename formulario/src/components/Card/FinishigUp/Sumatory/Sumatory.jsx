import React, { useContext } from 'react'
import { AppContext } from '@/components/AppContext'


function Sumatory() {

  const { info, setInfo } = useContext(AppContext);
  const planType = info.plan.type;

  const totalPriceAddons = info.addOns.reduce((acumulador, currentAddon) => acumulador + currentAddon.price, 0)
  const planPrice = info.plan.price;
  const totalPrice = planPrice + totalPriceAddons;

  return (
    <div>
      <p>{`Total (per ${planType === "monthly" ? "month" : "year"})`}</p>
      <p>{`$${totalPrice}/${planType === "monthly" ? "mo" : "yr"}`}</p>
    </div>
  )
}

export default Sumatory