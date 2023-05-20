import React from 'react'

function Adds({title, price, planType}) {
  return (
    <div>
      <p>{title}</p>
      <p>{`$${price}/${planType === "monthly" ? "mo" : "yr"}`}</p>
    </div>
  )
}

export default Adds