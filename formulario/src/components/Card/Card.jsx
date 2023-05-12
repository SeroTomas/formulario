import PersonalInfo from "./PersonalInfo/PersonalInfo";
import style from "./card.module.scss";

function Card() {
    return (
        <>
            <section className={style.card}>
              <PersonalInfo/>
            </section>
        </>
    )
}

export default Card