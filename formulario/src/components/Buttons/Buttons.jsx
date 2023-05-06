import style from "./buttons.module.scss";

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
                {
                    info.page === 1 ? null : <button onClick={()=>{handlePageDown()}} className={style.goBack}>Go back</button>
                }
                <button onClick={()=>{handlePageUp()}} className={style.next}>Next Step</button>
            </div>
        </>
    )
}

export default Buttons