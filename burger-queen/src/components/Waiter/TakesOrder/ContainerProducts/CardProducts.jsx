import './style.scss'
import { useWaiterContext } from "../../../../context/WaiterContext"
import { useState } from 'react';
import { BoxQuantity } from '../BoxQuantity/BoxQuantity';

export const CardProducts = ({element}) => {

        const [quantity, setQuantity] = useState(0)

        const showQuantity = () => {
            const newQuantity = quantity + 1
            setQuantity(newQuantity)
        }

        const substractQuantity = () => {
            const newQuantity = quantity - 1
            setQuantity(newQuantity)
        }

        return(
            <div className="cardProduct"  >
                <div className="cardProduct_info" onClick={(e) => showQuantity()}>
                    <h4 className='cardProduct_info--name'>{element.name}</h4>
                    <h6 className='cardProduct_info--name'>{element.price}</h6>
                </div>
                    < BoxQuantity quantity={quantity} substract={substractQuantity} add={showQuantity}/>
            </div>
        
            )
}