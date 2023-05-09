// styles
import style from "./personalInfo.module.scss";
//components
import PersonalInput from "./PersonalInput/PersonalInput"

function PersonalInfo() {
    return (
        <>
            <div className={style.personalContainer}>
                <div>
                    <h2>Personal info</h2>
                    <div>
                        <p>Please provide your name, email</p>
                        <p>address, ans phone number</p>
                    </div>
                </div>
                <form>
                    <PersonalInput label={"Name"} name={"name"} type={"text"} />
                    <PersonalInput label={"Email Address"} name={"email"} type={"email"} />
                    <PersonalInput label={"Phone Number"} name={"phone"} type={"phone"} />
                </form>
            </div>
        </>

    )
}

export default PersonalInfo