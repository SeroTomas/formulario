import Image from 'next/image'
import React from 'react'
import { AppContext } from '@/components/AppContext'

function PlanSelector({icon, title, price}) {


  const handlePrice = () => {

  }

  return (
    <button onClick={handlePrice}>
        <Image src={icon}/>
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    </button>
  )
}

export default PlanSelector