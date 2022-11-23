export const BodyTableOrder = (props) => {

    // const { orders } = props

    const orders = [
        { name: 'Sandwiche de jamon y queso', price: 4000 },
        { name: 'Haburguesa', price: 12000 }
    ]
    const listTr = orders.map((element) => {

        return (
            <tr className='bodyTableOrder_rowBody'>

                {/* cantidad */}
                <td className='bodyTableOrder_columnBody'>{element.name}</td>
                <td className='bodyTableOrder_columnBody'>${element.price}</td>

                {/* <TableComlumnOption  element={element}/> */}
            </tr>
        )
    })

    return (
        <tbody className='table_body'>
            {listTr}
            <tr className='bodyTableOrder_rowBody bodyTableOrder_rowBody--subtotal'>
                <td className='bodyTableOrder_columnBody'>Subtotal</td>
                <td className='bodyTableOrder_columnBody'>$</td>
            </tr>
        </tbody>
    )
}
