import "./style.scss"
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";


export const Table = (props) => {
    
    const {data, columns, columnKeys} = props
    
    // console.log('mis columnas', columnKeys)

    return(
        <table className="table">
            <TableHeader columnKeys ={columnKeys}/>
            <TableBody data={data} columns={columns} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla