import { useEffect } from "react"
import { useState } from "react"
import editOrder from '../../../../assets/images/EditOrder.png'
import { useOrderContext } from "../../../../context/OrderContext"
import './style.scss'

export const QuantityProducts = () => {

    const [productsLength, setProductsLength] = useState(0);

    const { orderItems } = useOrderContext();

    useEffect(() => {
        !orderItems ? '' :
        setProductsLength(
            orderItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [orderItems])

   return productsLength === 0 ? '' : 
   ( <div className="editOrder"> <img className="editOrder_img" src={editOrder} alt="" /> 
   <div className="editOrder_length"><h4 className="editOrder_length--quantity">{productsLength}</h4></div> </div> )
}