import "./style.scss"
import { filterAtributteList } from "../../lib/helpers";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import { useContext } from "react";
import TableContext from "../../context/TableContext";


export const Table = (props) => {
    
    const {products, avaliablesKeys, onClose} = useContext(TableContext)

    const filterListElements = filterAtributteList(avaliablesKeys, products)
    // const {listFilterKeys, listElements, onClose} = props
    // const filterListElements = filterAtributteList(listFilterKeys, listElements)
    console.log('array filtrado', filterListElements)

    return(
        <table className="table">
            <TableHeader headerColumns ={avaliablesKeys}/>
             {/* <TableBody onClose = {onClose} listElements={filterListElements} /> */}
            <TableBody onClose = {onClose} listElements={filterListElements} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla