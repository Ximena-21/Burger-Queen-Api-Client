import "./style.scss"
import { filterAtributteList } from "../../lib/helpers";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";


export const Table = (props) => {

    const {listFilterKeys, listElements, onClose} = props

    const filterListElements = filterAtributteList(listFilterKeys, listElements)
    console.log('array filtrado', filterListElements)

    return(
        <table className="table">
            <TableHeader headerColumns ={listFilterKeys}/>
            <TableBody onClose = {onClose} listElements={filterListElements} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla