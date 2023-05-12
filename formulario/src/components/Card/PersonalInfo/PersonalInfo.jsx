// styles
import style from "./personalInfo.module.scss";
//components
import PersonalInput from "./PersonalInput/PersonalInput"

function PersonalInfo() {

    
    return (
        <>
            <div className={style.personalContainer}>
                <div className={style.infoContainer}>
                    <h2>Personal info</h2>
                    <div className={style.text}>
                        <p>Please provide your name, email</p>
                        <p>address, and phone number</p>
                    </div>
                </div>
                <form className={style.form}>
                    <PersonalInput label={"Name"} name={"name"} type={"text"} />
                    <PersonalInput label={"Email Address"} name={"email"} type={"email"} />
                    <PersonalInput label={"Phone Number"} name={"phone"} type={"phone"} />
                </form>
            </div>
        </>

    )
}

export default PersonalInfo