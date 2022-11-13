import "./style.scss"
import { filterAtributteList } from "../../lib/helpers";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import { useProductsContext } from "../../context/TableContext";


export const Table = (props) => {
    
    const {products, avaliablesKeys} = useProductsContext()
    
    // console.log('products ', products);
    console.log({products,avaliablesKeys})
    const filterListElements = filterAtributteList(avaliablesKeys, products)
    // const {listFilterKeys, listElements, onClose} = props
    // const filterListElements = filterAtributteList(listFilterKeys, listElements)

    return(
        <table className="table">
            <TableHeader headerColumns ={avaliablesKeys}/>
            <TableBody listElements={filterListElements} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla