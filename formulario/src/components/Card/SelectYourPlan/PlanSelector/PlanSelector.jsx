import Image from 'next/image'
import React from 'react'

function PlanSelector({icon, title, price}) {
  return (
    <button>
        <Image src={icon}/>
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    </button>
  )
}

export default PlanSelector