//style
import style from "./buttons.module.scss";
//components and hooks
import { AppContext } from "../AppContext";
import { useContext } from "react";

function Buttons() {

    const { info, setInfo } = useContext(AppContext);
    const { inputs, errors, page } = info;

    const handlePageUp = () => {
        if (page < 4) {
            setInfo({
                ...info,
                page: page + 1
            })
        }
    }

    const handlePageDown = () => {
        if (page > 1) {
            setInfo({
                ...info,
                page: page - 1
            })
        }
    }

    // anyError se encarga de verificar que no haya ningun error
    // en el form de PersonalInfo
    const anyError = () => {
        if (errors.name || errors.email || errors.phone) {
            return true;
        } else return false;
    }

    // anyInput se encarga de verificar que exista informacion
    // en cada input del form existente en PersonalInfo
    const anyInput = () => {
        if (inputs.name || inputs.email || inputs.phone) {
            return false
        } else return true
    }
    
    return (
        <>
            <div className={style.buttonsContainer}>
                <button onClick={handlePageDown} className={page !== 1 ? style.back : style.nonBack} disabled={page === 1}>Go Back</button>
                <button onClick={handlePageUp} className={style.next} disabled={anyError() || anyInput()}>Next Step</button>
            </div>
        </>
    )
}

export default Buttons