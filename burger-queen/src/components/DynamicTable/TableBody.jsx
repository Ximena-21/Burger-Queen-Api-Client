export const TableBody = (props) => {

    const {data, columns} = props

    const listTr = data.map((element) => {

        return (
            <tr className='table_rowBody'>
                {
                    columns.map(objectColumn=>{
                        if(objectColumn.hasOwnProperty("componente")){
                            return objectColumn.componente(element)
                        }
                        
                        return <td  className='table_columnBody'>{element[objectColumn.key]} </td>
                    })
                }
            </tr>
        )
    }) 

    return (
        <tbody className='table_body'>
            {listTr}
        </tbody>
    )
}