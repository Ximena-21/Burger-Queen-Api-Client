import { useState } from "react"
import { useWaiterContext } from "../../../context/WaiterContext";
import { CardProducts } from "./ContainerProducts/CardProducts";
// import { CardProducts } from "./ContainerProducts/ContainerProducts";

export const TableWaiter = () => {

    const {products} = useWaiterContext(); //array de objeto
    const [typeMenu, setTypeMenu] = useState('')


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

            <CardProducts typeMenu={typeMenu} quantity={0}/>
        }
        {/* {
            typeMenu === '' ? '...cargando' :
            products.filter(element => {
                
            //    if(element.type === typeMenu) console.log(element) 
               if(element.type === typeMenu) return <CardProducts element={element.name} quantity={0}/>
            //    else return <CardProducts element={element}/>
            }) 
        } */}
    </div>
  
    )
}