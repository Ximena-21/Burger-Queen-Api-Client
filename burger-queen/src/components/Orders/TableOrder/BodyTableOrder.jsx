import { useEffect, useState } from "react";
import { useOrderContext } from "../../../context/OrderContext";
import { BoxQuantity } from "../../Waiter/TakesOrder/BoxQuantity/BoxQuantity";

export const BodyTableOrder = () => {

  const { productsOrder} =  useOrderContext()

  const [total, setTotal] = useState(0)

  useEffect(() => {
    !productsOrder ? '' :
    setTotal(
        productsOrder.reduce((previous, product) => previous + parseInt(product.qty) * product.product.price, 0)
    )
}, [productsOrder])


  const listTr =  productsOrder.map((element) => {

    console.log('element TableBodyOrder ',element);
    return (
        <tr className='bodyTabletOrder_rowBody'>

            {/* cantidad */}
            <td className='bodyTabletOrder_columnBody bodyTabletOrder_columnBody--quantity'>{    
            element.qty
              // < BoxQuantity 
              // element={element.qty}
              // substract={() => deleteItemToOrder(element)} 
              // add={ () => addItemToOrder(element)}/>
            }
            </td>
            <td className='bodyTabletOrder_columnBody'>{element.product.name}</td>
            <td className='bodyTabletOrder_columnBody bodyTabletOrder_columnBody--price'>${element.product.price * element.qty}</td>

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
            <td className='bodyTabletOrder_columnBody'>${total}</td>
        </tr>
    </tbody>
  )
};


