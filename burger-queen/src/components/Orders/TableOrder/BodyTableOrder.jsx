export const BodyTableOrder = (props) => {

    // const { orders } = props

    const orders = [
        { name: 'Sandwiche de jamon y queso', price: 4000 },
        { name: 'Haburguesa', price: 12000 }
    ]
    const listTr = orders.map((element) => {

        return (
            <tr className='bodyTabletOrder_rowBody'>

                {/* cantidad */}
                <td className='bodyTabletOrder_columnBody'>{element.name}</td>
                <td className='bodyTabletOrder_columnBody bodyTabletOrder_columnBody--price'>${element.price}</td>

                {/* <TableComlumnOption  element={element}/> */}
            </tr>
        )
    })

    return (
        <tbody className='bodyTabletOrder'>
            <div className="bodyTabletOrder_bodyContainer">

                {listTr}
            </div>
            <tr className='bodyTabletOrder_rowBody bodyTabletOrder_rowBody--subtotal'>
                <td className='bodyTabletOrder_columnBody'>Subtotal</td>
                <td className='bodyTabletOrder_columnBody'>$</td>
            </tr>
        </tbody>
    )
}
