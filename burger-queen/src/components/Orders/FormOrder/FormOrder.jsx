import { TableOrder } from "../TableOrder/TableOrder"
import "./style.scss"

export const FormOrder = () =>{
    
    return (

        <div className="formOrder">

            <h3 className="formOrder_text">Orden</h3>

            <div className="formOrder_clientContainer">
                <label className="formOrder_clientContainer--label" htmlFor="">Cliente</label>
                <input type="text" className="formOrder_clientContainer--input" />
            </div>

            <TableOrder/>

            <div className="formOrder_btnContainer">
                <button className="formOrder_btn " >ENVIAR PEDIDO</button>
                <button className="formOrder_btn formOrder_btn--abort" >CANCELAR PEDIDO</button>
            </div>
        </div>

    )
}


