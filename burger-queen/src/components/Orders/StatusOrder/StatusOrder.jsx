import { useState } from "react";
import { useViewOrderContext } from "../../../context/ViewOrderContext";

export const StatusOrder = ({element}) => {

    const dataUser = JSON.parse(localStorage.getItem("dataUser"))
    const [checked, setChecked] = useState(false);
    const {changeStatusDelivered} = useViewOrderContext()

    const handleChange = async () => {
        setChecked(!checked);
        if(dataUser.role === 'Jefe Cocina' && checked === true  ){
            if(element.status === 'pending') {
                await changeStatusDelivered(element.id, {status: 'ready'})
            }else{
                await changeStatusDelivered(element.id, {status: 'pending'})
            }
        }else if(dataUser.role === 'Meser@' && checked === true){
            if(element.status === 'ready') {
                await changeStatusDelivered(element.id, {status: 'delivered'})
            }else{
                await changeStatusDelivered(element.id, {status: 'ready'})
            }
        } 
    };

    return(
        <>
        {
           dataUser.role !== 'admin' && 
           <input
            type="checkbox" 
            value={checked}
           onChange={handleChange}/>
        }
        </>
    )
}