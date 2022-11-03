import { TableComlumnOption } from "./TableColumnOption"


export const TableBody = (props) => {

    const { listElements } = props
    console.log('lista de elementos', listElements)


   // const tr = return listElements.includes(regexUrl) ? listTrImg : listTr 
//    listElements.length === 0 ?
    const listTr = listElements.map((element) => {
       // console.log('elemento', element)
        return (
            <tr className='table_rowBody'>
                <td className='table_columnBody table_columnBody--img'><img src={element.image} alt="" /></td>
                <td className='table_columnBody'>{element.name}</td>
                <td className='table_columnBody table_columnBody--price'>{element.price}</td>
                <TableComlumnOption/>
            </tr>
        )
    }) 

    return (
        <tbody className='table_body'>
            {listTr}
        </tbody>
    )
}

