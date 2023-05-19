import Adds from "../Sumatory/Adds/Adds"
import Plan from "../Sumatory/Plan/Plan"
import style from "./resume.module.scss"
import React, { useContext } from 'react'

function Resume() {
  return (
    <>
      <Plan />
      <Adds />
    </>
  )
}

export default Resume