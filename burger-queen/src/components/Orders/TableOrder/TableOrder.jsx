import { BodyTableOrder } from "./BodyTableOrder"
import { HeaderTableOrder } from "./HeaderTableOrder"
// import "./style.scss"


export const TableOrder = ({orders}) => {
    

    return(
        <table className="tableOrder">
            <HeaderTableOrder/>
            <BodyTableOrder orders={orders}/>
        </table>
    )
}
