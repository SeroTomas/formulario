import style from "./buttons.module.scss";
import { handlePageDown, handlePageUp } from "@/utils/handlers";

function Buttons({ info, setInfo }) {

    const handlePageUp = () => {
        if (info.page < 4) {
            setInfo({
                ...info,
                page: info.page + 1
            })
        }
    }

    const handlePageDown = () => {
        if (info.page > 1) {
            setInfo({
                ...info,
                page: info.page - 1
            })
        }
    }

    return (
        <>
            <div className={style.buttonsContainer}>
                <button onClick={() => { handlePageDown() }} className={info.page !== 1 ? style.back : style.nonBack} disabled={info.page === 1}>Go Back</button>
                <button onClick={() => { handlePageUp() }} className={style.next}>Next Step</button>
            </div>
        </>
    )
}

export default Buttons