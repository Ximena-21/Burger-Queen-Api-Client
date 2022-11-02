import { filterAtributteList, filterAtributteListPrueba } from "../../../lib/helpers";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = (props) => {


    const {listElements, listProducts} = props
    // const {listFilterKeys, listElements} = props

    // const filterListElements = filterAtributteList(listFilterKeys, listElements)
    const filterListElements = filterAtributteListPrueba( listElements, listProducts)

    console.log({
        listaFiltra: listProducts,
        products: listElements,
        elementsFilter: filterListElements
    })

return(
    <table className="table" border='1'>
        <TableHeader listElements={filterListElements}/>
        <TableBody filterListElements={filterListElements}/>
    </table>
)
}

export default Table;