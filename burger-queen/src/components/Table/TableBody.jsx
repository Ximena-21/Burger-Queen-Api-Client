import { TableComlumnOption } from "./TableColumnOption"


export const TableBody = (props) => {

    const { listElements } = props
    console.log('lista de elementos', listElements)

   // const tr = return listElements.includes(regexUrl) ? listTrImg : listTr 
//    listElements.length === 0 ?
    const listTr = listElements.map((element) => {

        return (
            <tr className='table_rowBody'>
                <td className='table_columnBody table_columnBody--img'><img src={element.image} alt="" /></td>
                <div className="table_columnBody--section">
                    <td className='table_columnBody'>{element.name}</td>
                    <td className='table_columnBody table_columnBody--price'>{element.price}</td>
                </div>
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

