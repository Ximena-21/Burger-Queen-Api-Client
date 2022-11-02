import { filterAtributteList } from "../../lib/helpers";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export const Table = (props) => {


    const {listFilterKeys, listElements} = props

    const filterListElements = filterAtributteList(listFilterKeys, listElements)
    // console.log({
    //     listaFiltra: listFilterKeys,
    //     products: listElements,
    //     elementsFilter: filterListElements
    // })

    return(
        <table className="table" border='1'>
            <TableHeader listElements={filterListElements} headerColumns ={listFilterKeys}/>
            <TableBody listElements={filterListElements} />
        </table>
    )
}
