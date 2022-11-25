import { useEffect, useState } from "react";
import { useOrderContext } from "../../../context/OrderContext";
import { BoxQuantity } from "../../Waiter/TakesOrder/BoxQuantity/BoxQuantity";

export const BodyTableOrder = () => {

  const { productsOrder, addItemToOrder, deleteItemToOrder} =  useOrderContext()

  const [total, setTotal] = useState(0)

  useEffect(() => {
    !productsOrder ? '' :
    setTotal(
        productsOrder.reduce((previous, product) => previous + parseInt(product.qty) * product.product.price, 0)
    )
}, [productsOrder])



  return (
    <tbody className='bodyTabletOrder'>
        <div className="bodyTabletOrder_bodyContainer">

            {
              productsOrder.map((element) => {

                return (
                    <tr key={element.product.id} className='bodyTabletOrder_rowBody'>
            
                        {/* cantidad */}
                        <td className='bodyTabletOrder_columnBody bodyTabletOrder_columnBody--quantity'>{    
                          < BoxQuantity 
                          element={element.qty}
                          substract={() => deleteItemToOrder(element.product)} 
                          add={ () => addItemToOrder(element.product)}/>
                        }
                        </td>
                        <td className='bodyTabletOrder_columnBody'>{element.product.name}</td>
                        <td className='bodyTabletOrder_columnBody bodyTabletOrder_columnBody--price'>${element.product.price * element.qty}</td>
            
                    </tr>
                )
              })
            }
        </div>
        <tr className='bodyTabletOrder_rowBody bodyTabletOrder_rowBody--subtotal'>
            <td className='bodyTabletOrder_columnBody'>Total</td>
            <td className='bodyTabletOrder_columnBody'>${total}</td>
        </tr>
    </tbody>
  )
};


