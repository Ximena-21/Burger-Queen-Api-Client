import { useState } from "react"
import { useOrderContext } from "../../../context/OrderContext"
import { TableOrder } from "../TableOrder/TableOrder"
import "./style.scss"

export const FormOrder = () =>{

    const {productsOrder} = useOrderContext()
    const [client, setClient] = useState('')
    const [order, setOrder] = useState({})
    
    const handleClient = (e) => {
        setClient(e.target.value)
    }

    const dataOrder = {
        userId: new Date().getTime(),
        client: client,
        products: productsOrder,
        status: pending,
        dateEntry: new Date()
    }

    return (

        <div className="formOrder">

            <h3 className="formOrder_text">Orden</h3>

            <div className="formOrder_clientContainer">
                <label className="formOrder_clientContainer--label" htmlFor="">Cliente</label>
                <input onChange={handleClient} type="text" className="formOrder_clientContainer--input" value={client} />
            </div>

            <TableOrder/>

            <div className="formOrder_btnContainer">
                <button className="formOrder_btn " >ENVIAR PEDIDO</button>
                <button className="formOrder_btn formOrder_btn--abort" >CANCELAR PEDIDO</button>
            </div>
        </div>

    )
}

// {
//     "userId": 15254,
//      "client": "Carol Shaw",
//      "products": [
//        {
//          "qty": 5,
//          "product": {
//            "id": 1214,
//            "name": "Sandwich de jamón y queso",
//            "price": 1000,
//            "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
//            "type": "Desayuno",
//            "dateEntry": "2022-03-05 15:14:10"
//          }
//        }
//      ],
//      "status": "pending",
//      "dateEntry": "2022-03-05 15:14:10"
//    }
   


