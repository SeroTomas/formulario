import Adds from "../Sumatory/Adds/Adds"
import Plan from "../Sumatory/Plan/Plan"
import style from "./resume.module.scss"
import React, { useContext } from 'react'
import { AppContext } from "@/components/AppContext"

function Resume() {
  const {info, setInfo} = useContext(AppContext);
  const addOns = info.addOns;
  const planType = info.plan.type;

  return (
    <div>
      <Plan infoPlan = {info.plan}/>
      {
        addOns.map(element => <Adds 
          price={element.price}
          title={element.title}
          planType={planType}
          />)
      }
    </div>
  )
}

export default Resume