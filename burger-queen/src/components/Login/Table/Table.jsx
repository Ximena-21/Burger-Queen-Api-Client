import { filterAtributteList } from "../../../lib/helpers";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = (props) => {


    const {listFilterKeys, listElements} = props

    const filterListElements = filterAtributteList(listFilterKeys, listElements)
    console.log({
        listaFiltra: listFilterKeys,
        products: listElements,
        elementsFilter: filterListElements
    })

return(
    <table className="table">
        <TableHeader listElements={filterListElements}/>
        <TableBody filterListElements={filterListElements}/>
    </table>
)
}

export default Table;