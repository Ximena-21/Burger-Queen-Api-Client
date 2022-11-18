import { useState } from "react"
import { useWaiterContext } from "../../../context/WaiterContext";
import { CardProducts } from "./ContainerProducts/CardProducts";

export const TableWaiter = () => {

    const [typeMenu, setTypeMenu] = useState('')
    const {products} =  useWaiterContext()

    const handleTypeMenu = (e) => {
        setTypeMenu(e.target.value)
    }




    return ( 
    <div >
        <select name="select_type"  value={typeMenu} onChange={handleTypeMenu} >
            <option selected='selected' >Seleccionar</option>
            <option >Desayuno</option>
            <option >Almuerzo</option>
        </select>
        {
            typeMenu === '' ? '...cargando' :
                <div>
                    {
                        products.map(element => {
                            if(element.type === typeMenu)
                           return <CardProducts element={element} />
                        })
                    }
                </div>
        }
    </div>
  
    )
}