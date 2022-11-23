import { TableOrder } from "../TableOrder/TableOrder"
import "./style.scss"

export const FormOrder = ({orders}) =>{
    return (

        <div className="formOrder">
            <img className="formOrder_btnExit" src="" alt="exit buton" />

            <h3 className="formOrder_text">Orden</h3>

            <div className="formOrder_clientContainer">
                <label className="formOrder_clientContainer" htmlFor="">Cliente</label>
                <input type="text" className="formOrder_clientContainer--input" />
            </div>

            <TableOrder/>

            <div className="formOrder_btnContainer">
                <button className="formOrder_btn " >Enviar</button>
                <button className="formOrder_btn formOrder_btn--abort" >Cancelar</button>
            </div>
        </div>

    )
}


