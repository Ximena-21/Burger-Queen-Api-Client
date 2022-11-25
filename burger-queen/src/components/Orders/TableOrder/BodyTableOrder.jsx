import { useOrderContext } from "../../../context/OrderContext";

export const BodyTableOrder = () => {

  const { productsOrder } = useOrderContext();

  const listTr =  productsOrder.map((element) => {

    return (
        <tr className='bodyTabletOrder_rowBody'>

            {/* cantidad */}
            <td className='bodyTabletOrder_columnBody'>{element.qty}</td>
            <td className='bodyTabletOrder_columnBody'>{element.product.name}</td>
            <td className='bodyTabletOrder_columnBody bodyTabletOrder_columnBody--price'>${element.product.price}</td>

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
};


