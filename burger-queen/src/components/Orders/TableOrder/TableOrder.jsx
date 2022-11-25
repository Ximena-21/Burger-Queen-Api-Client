import { BodyTableOrder } from "./BodyTableOrder"
import { HeaderTableOrder } from "./HeaderTableOrder"
// import "./style.scss"


export const TableOrder = () => {
    

    return(
        <table className="tableOrder">
            <HeaderTableOrder/>
            <BodyTableOrder />
        </table>
    )
}
