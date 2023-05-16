import style from "./planSelector.module.scss";
import Image from 'next/image';
import React, { useContext } from 'react';
import { AppContext } from '@/components/AppContext';

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
  };

  return (
    <button className={select === title ? style.selected : style.selectButton} onClick={handlePrice}>
      <Image src={icon} />
      <div className={style.textContainer}>
        <h3>{title}</h3>
        <p>${price}/{info.plan.type === "monthly" ? "mo" : "yr"}</p>
      </div>
      <div className={style.popUpText}>
        <p >{info.plan.type === 'yearly' && "2 months free"}</p>
      </div>
    </button>
  )
};

export default PlanSelector