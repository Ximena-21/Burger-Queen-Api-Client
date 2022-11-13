// import { useContext } from "react"
// import TableContext from "../../context/ProductsContext"
// import { TableComlumnOption } from "./TableColumnOption"


export const TableBody = (props) => {

    // const {products} = useContext(TableContext)
    const {data, columns} = props

    // console.log("get products inside table body", products)

   // const tr = return listElements.includes(regexUrl) ? listTrImg : listTr 
//    listElements.length === 0 ?
    const listTr = data.map((element) => {

        return (
            <tr className='table_rowBody'>
                {
                    columns.map(objetoCOlumna=>{
                        if(objetoCOlumna.hasOwnProperty("componente")){
                            return objetoCOlumna.componente(element)
                        }
                        
                        return <td  className='table_columnBody'>{element[objetoCOlumna.key]} </td>
                    })
                }
                {/* <td className='table_columnBody table_columnBody--img'><img src={element.image} alt="" /></td>
                <div className="table_columnBody--section">
                    <td className='table_columnBody'>{element.name}</td>
                    <td className='table_columnBody table_columnBody--price'>{element.price}</td>
                </div>
                <TableComlumnOption  element={element}/> */}
                 
            </tr>
        )
    }) 

    return (
        <tbody className='table_body'>
            {listTr}
        </tbody>
    )
}

//no se cuantos td crear ? -> n elementos (map, for, ... bucle)