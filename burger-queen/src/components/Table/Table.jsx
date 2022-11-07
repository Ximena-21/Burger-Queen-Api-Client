import "./style.scss"
import { filterAtributteList } from "../../lib/helpers";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import { getProducts } from "../../lib/requests";
import { useEffect, useState } from "react";


export const Table = (props) => {

    const {listFilterKeys, listElements} = props

    const filterListElements = filterAtributteList(listFilterKeys, listElements)
    console.log('array filtrado', filterListElements)



    return(
        <table className="table">
            <TableHeader headerColumns ={listFilterKeys}/>
            <TableBody listElements={filterListElements} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla