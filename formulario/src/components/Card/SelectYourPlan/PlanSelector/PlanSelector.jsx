import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { AppContext } from '@/components/AppContext'

function PlanSelector({ icon, title, price, selected }) {

  const { info, setInfo } = useContext(AppContext);
  const [select, setSelect] = selected;

  const handlePrice = () => {
    setSelect(title);
    setInfo({
      ...info,
      plan: {
        ...info.plan,
        selection: title,
        price: price
      }
    })
  }

  return (
    <button onClick={handlePrice}>
      <Image src={icon} />
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </button>
  )
}

export default PlanSelector