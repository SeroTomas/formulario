//styles
import style from "./card.module.scss";
//components and hooks
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SelectYourPlan from "./SelectYourPlan/SelectYourPlan";
import AddOns from "./AddOns/AddOns";
import {AppContext} from "../AppContext";
import { useContext } from "react";

function Card() {

    const {info, setInfo} = useContext(AppContext);

    const sections = {
        1: <PersonalInfo/>,
        2: <SelectYourPlan/>,
        3: <AddOns/>
    }
    return (
        <>
            <section className={style.card}>
                {
                    sections[info.page]
                }
            </section>
        </>
    )
}

export default Card